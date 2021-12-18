import React, { useState, useEffect } from "react";


// was using Atlassians Beautiful DND, however, created function to execute the 
function dragState(Container) {

  const DragState = (props) => {
    
    const [currentState, setCurrentState] = useState([]);
    const [fetch, setFetch] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

      const fetchData = async () => {

        try {

          const tasks = await fetch(props.dataSource);
          const tasksJSON = await tasks.json();
          setCurrentState(tasksJSON);
          setFetch(false);
        } catch (err) {

          setFetch(false);
          setError(err.message);
        }
      };

      fetchData();
    }, [props.dataSource]);

    return (
      <Container
        data={currentState}
        loading={fetch}
        error={error}
        {...props}
      />
    );
  };

  DragState.displayName = `DragState(${Container.name})`;
  return DragState;
};

export default dragState;