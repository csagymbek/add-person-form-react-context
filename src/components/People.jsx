import React, { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";

export const People = () => {
  const { people } = useContext(PeopleContext);

  return (
    <div className="col">
      <h2>People: </h2>
      <hr />
      {people.map((p) => (
        <div key={Math.random() * 10000000}>
          <p>
            {p.name} {p.lastname}
          </p>
        </div>
      ))}
    </div>
  );
};
