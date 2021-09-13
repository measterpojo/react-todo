import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom"

import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./Todolist";
import Navbar from "./Navbar";

import { v4 as uuidv4 } from 'uuid'

import About from "./pages/About";
import Notmatch from "./pages/Nomatch";



const TodoContainerfunc = () => {
    const [todos , setTodos ] = useState(getInitialTodos())

    const handleChange = id => {
        setTodos(prevState =>
            prevState.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            return todo
            })

        )
    }

    const delTodo = (id) => {
        setTodos([
            ...todos.filter(todo =>{
                return todo.id !== id
            }),
        ])
    }


    const addTodoItem = title =>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id)=>{
        setTodos(
            todos.map(todo => {
                if (todo.id === id){
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }



    function getInitialTodos(){
        // getting stored item
        const temp = localStorage.getItem('todos')
        const savedTodo = JSON.parse(temp)
        return savedTodo || []
    }

    return (
        <>
        <Navbar />
            <Switch>
                <Route exact path="/">
                    <div className='container'>
                        <div className='inner'>
                            <Header />
                            <InputTodo addTodoProps={addTodoItem} />
                            <TodosList

                                todos={todos}
                                handleChangeProps={handleChange}
                                deleteTodoProps={delTodo}
                                setUpdate={setUpdate}
                            />
                        </div>
                    </div>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <Notmatch />
                </Route>
            </Switch>
        </>
    )

}

export default TodoContainerfunc;