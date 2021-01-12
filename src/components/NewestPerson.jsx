import { useContext, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { PeopleCount } from "./PeopleCount";

export const NewestPerson = () => {
  const context = useContext(PeopleContext);
  const newestPerson = context.people[context.people.length - 1];

  useEffect(() => {
    const newestPersonName = `${newestPerson.name} ${newestPerson.lastname}`;
    document.title = newestPersonName;
    console.log("useEffect()");
    return () => console.log("unmount()");
  }, [newestPerson]);

  return (
    <div className="col col-sm-12">
      <h2 className="mt-4 text-center">
        Newest Person: {`${newestPerson.name} ${newestPerson.lastname}`}
      </h2>
      <PeopleCount />
    </div>
  );
};
