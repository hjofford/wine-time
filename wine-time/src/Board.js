import React, { useState, useEffect } from "react";
import Stream from "./components/Stream";
import dragState from "./dragState";
import "./App.css";


function Board({ streams, loading, error, data }) {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    setTasks(data);

  }, [data]);

  const onDragStart = (e, id) => {

    e.dataTransfer.setData("id", id);

  };

  const onDragOver = (e) => {

    e.preventDefault();

  };

  const onDrop = (e, streamId) => {

    const id = e.dataTransfer.getData("id");

    const newTasks = tasks.filter((task) => {

      if (task.id === parseInt(id)) {

        task.stream = streamId;
      }
      return task;

    });

    setTasks(newTasks);
  };

  return (
    <div className="boardWrapper">
      {streams.map((stream) => (
        <Stream
          key={stream.id}
          streamId={stream.id}
          streamTitle={stream.streamTitle}
          loading={loading}
          error={error}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          tasks={tasks.filter((task) => task.stream === stream.id)}
        />
      ))}
    </div>
  );
};

export default dragState(Board);