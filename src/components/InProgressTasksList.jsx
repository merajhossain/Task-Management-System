import React from 'react'
import ListItem from './ListItem'

export default function InProgressTasksList(props) {
  return (
    <>
        <div className="task-col-wrapper border shadow-sm">
            <div className="task-col-title p-2 bg-warning">
                <h5 className="text-light">In Progress</h5>
            </div>
            <div className="p-3 border">
                <ListItem data={props.ongoing}/>
            </div>
        </div>
    </>
  )
}
