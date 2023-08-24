import React from "react";
import ListItem from "./ListItem";
function TodoTaskLists(props) {
    return ( 
        <>
         <div className="task-col-wrapper border shadow-sm">
            <div className="task-col-title p-2 bg-primary">
                <h5 className="text-light">To-do</h5>
            </div>
            <div className="p-3 border">
                <ListItem data={props.todoList}/>
            </div>
         </div>
        </>
     );
}

export default TodoTaskLists;