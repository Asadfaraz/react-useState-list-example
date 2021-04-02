import React from "react";
import "./App.css";
import { data } from "./data";

function App() {
  // useSTate for data
  const [people, setPeople] = React.useState(data);

  return (
    <section className="App">
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="persondiv">
            <h4>{name}</h4>
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
