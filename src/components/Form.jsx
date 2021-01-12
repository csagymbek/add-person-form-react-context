import { useContext, useState } from "react";
import { PeopleContext } from "../context/PeopleContext";

export const Form = () => {
  const [person, setPerson] = useState({ name: "", lastname: "" });
  const { addPerson } = useContext(PeopleContext);

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (person.name.trim() === "" || person.lastname.trim() === "") return;
    const newPerson = {
      name: person.name.trim(),
      lastname: person.lastname.trim(),
    };
    addPerson(newPerson);
    setPerson({ name: "", lastname: "" });
  };

  return (
    <div className="col">
      <h2>Add a person</h2>
      <hr />
      <form action="" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={person.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Last Name"
            value={person.lastname}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add Person
        </button>
      </form>
    </div>
  );
};
