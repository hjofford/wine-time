import React from "react";
import Task from "./Task";
import '../App.css'

function Stream({
  streamId,
  tasks,
  loading,
  error,
  onDragStart,
  onDragOver,
  onDrop,
  streamTitle,
}) {
  return(
  
  <div className="streamContain" onDragOver={onDragOver} onDrop={(e) => onDrop(e, streamId)}>

    <h2 className="streamTitle">{streamTitle}</h2>
    

    {(loading || error) && <div className="alert">{loading ? "Working on it..." : error}</div>}

    <div className="taskContain">

      {tasks.map((task) => (

        <Task key={task.id} onDragStart={onDragStart} tasks={task} />

      ))}

    </div>

  </div>
    
)};

export default Stream;