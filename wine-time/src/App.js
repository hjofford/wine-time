import React from "react";

import Board from "./Board";
import Title from "./components/Title";


function App() {
  const streams = [
    { id: 1, streamTitle: "To Do" },
    { id: 2, streamTitle: "In Progress" },
    { id: 3, streamTitle: "Review" },
    { id: 4, streamTitle: "Done" },
  ];

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">    
      <Title />
      <Board
        streams={streams}
        dataSource={"../../ProjectManagementBoard/assets/data.json"}
      />
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
};

export default App;
