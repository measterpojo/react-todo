import React from "react";
import ReactDOM from "react-dom";
// import TodoContainer from "./class/components/TodoContainer"
import TodoContainerfunc from "./function/TodoContainer";
import { BrowserRouter as Router} from "react-router-dom"

import "./class/App.css"

ReactDOM.render(
    
<React.StrictMode>
    <Router>
        <TodoContainerfunc/>

    </ Router >
</React.StrictMode>,

    


    document.getElementById('root')
)

        // <TodoContainer /> 