import React from "react";

function Field({value, setSearch}) {
  return (
    <div className="field">
      <input
        placeholder="Search a monster"
        className="input"
        value={value}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}


export default Field;