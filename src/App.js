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
    </section>
  );
}

export default App;
