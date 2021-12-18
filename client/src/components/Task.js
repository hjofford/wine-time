import React from "react";
import "../App.css"

function Task({ marginRight, onDragStart, task }){

  return(
    <div className="taskContain"
        draggable
        onDragStart={(e) => onDragStart && onDragStart(e, task.id)}
        marginright={marginRight}
    >
        <h3 className="taskTitle">{task.title}</h3>
        <p className="taskContent">{task.content}</p>
    </div>
)};

export default Task;