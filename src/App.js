import { useReducer } from "react";
import { Form } from "./components/Form";
import { NewestPerson } from "./components/NewestPerson";
import { People } from "./components/People";
import { PeopleContext } from "./context/PeopleContext";
import PeopleReducer from "./context/PeopleReducer";
import { ADD_PERSON } from "./context/types";

export const App = () => {
  const initState = {
    people: [
      { name: "Christopher", lastname: "Johnson" },
      { name: "John", lastname: "Doe" },
    ],
  };

  const [state, dispatch] = useReducer(PeopleReducer, initState);

  const addPerson = (person) => {
    dispatch({ type: ADD_PERSON, payload: person });
  };

  return (
    <PeopleContext.Provider value={{ people: state.people, addPerson }}>
      <div className="container mt-4">
        <div className="row">
          <Form />
          <People />
          <NewestPerson />
        </div>
      </div>
    </PeopleContext.Provider>
  );
};
