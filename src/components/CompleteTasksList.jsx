import React from 'react'
import ListItem from './ListItem'

function CompleteTasksList(props) {
    return (
        <div className="task-col-wrapper border shadow-sm">
            <div className="task-col-title p-2 bg-success">
                <h5 className="text-light">Complete</h5>
            </div>
            <div className="p-3 border">
                <ListItem data={props.done}/>
            </div>
        </div>
    )
}

export default CompleteTasksList
