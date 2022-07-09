import React from "react";

function App() {
  const [textState, textSetState] = React.useState("");
  const [itemState, itemSetState] = React.useState([]);

  function handleChange(event) {
    var newValue = event.target.value;
    textSetState(newValue);
  }

  function onAdd() {
    itemSetState((prevItems) => {
      return [...prevItems, textState];
    });
    textSetState("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={textState} />
        <button onClick={onAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemState.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
