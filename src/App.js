import React from "react";
import "./App.css";
import { data } from "./data";

function App() {
  // useSTate for data
  const [people, setPeople] = React.useState(data);

  // Removing single Item from list on button function
  const removeItem = (id) => {
    const newData = people.filter((person) => person.id != id);
    // setting new data
    setPeople(newData);
  };

  return (
    <section className="App">
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="persondiv">
            <h4>{name}</h4>
            {/* Button for removing 1 item */}
            <button type="button" onClick={() => removeItem(id)}>
              Remove Item
            </button>
          </div>
        );
      })}

      <div className="btndiv">
        {/* Clearing items list from this button */}
        <button
          type="button"
          className="btnClear"
          onClick={() => setPeople([])}
        >
          Clear Items
        </button>
      </div>
    </section>
  );
}

export default App;
