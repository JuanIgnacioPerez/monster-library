import React from "react";

function Card({ monster }) {
  return (
    <div className="container">
      {monster.map((monster) => {
        return (
          <div className="card" key={monster.id}>
            <h2 className="number">{monster.id}</h2>
            <img
              alt="image"
              src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            />
            <p className="name">{monster.name}</p>
            <p className="mail">{monster.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
