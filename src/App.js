import React, { useState, useEffect, useMemo } from "react";
import Card from "./components/card";
import Field from "./components/field";
import "./styles.css";

function App() {
  const [search, setSearch] = useState("");
  const [monsters, setMonsters] = useState([]);

  const filteredMosters = useMemo(() => {
    if (!search) return monsters;
    return monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [monsters, search]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
        setSearch(search);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="title">Monsters Rolodex</h1>
      <Field text={search} setSearch={setSearch} />
      <Card monster={filteredMosters} />
    </div>
  );
}

export default App;
