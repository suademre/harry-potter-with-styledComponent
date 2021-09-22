import React from "react";
import { useParams } from "react-router-dom";
import CardList from "./CardList";

function PersonRoute({ data }) {
  // get name from the Url
  const { name } = useParams();

  // search data array for the data of the person
  const personInfo = data.find((person) => person.name === name);
  return personInfo ? (
    <CardList name={personInfo.name} house={personInfo.house} />
  ) : (
    <div>PERSON NOT FOUND</div>
  );
}

export default PersonRoute;
