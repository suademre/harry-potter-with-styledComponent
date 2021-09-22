import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import CardList from "../components/CardList";
import CreateCharacterForm from "../components/CreateCharacterForm";
import PersonRoute from "../components/PersonRoute";

const INITIAL_DATA = [
  {
    name: "Harry",
    house: "Gryffindor",
  },
  {
    name: "Hermione",
    house: "Gryffindor",
  },
];

function CharacterCreateForm() {
  const [data, setData] = useState(INITIAL_DATA);
  return (
    <StyledMain className="app">
      <Route exact path={["/characters/new", "/characters"]}>
        <CreateCharacterForm onCreateCharacter={handleCreateCharacter} />
      </Route>
      <Route exact path={["/characters/list", "/characters"]}>
        {data.map((character) => (
          <CardList
            key={character.name}
            name={character.name}
            house={character.house}
          />
        ))}
      </Route>
      <Route exact path={["/characters/person/:name"]}>
        <PersonRoute data={data} />
      </Route>
      <StyledLink to="/characters">Home</StyledLink>
      <StyledLink to="/characters/new">New</StyledLink>
      <StyledLink to="/characters/list">List</StyledLink>
    </StyledMain>
  );

  function handleCreateCharacter({ name, house }) {
    // Add an entry to data with data from the form
    // const newData = [
    //   ...data,
    //   {
    //     name: "Hermione",
    //     house: "Gryffindor",
    //   },
    // ];
    const newData = [
      ...data,
      {
        name: name,
        house: house,
      },
    ];
    setData(newData);
  }
}

const StyledAppCardDiv = styled.div`
  border: 0px solid #aaa;
  margin: 15px;
  padding: 15px;
  border-radius: 13px;

  box-shadow: 0px 0px 20px #dedede;
  display: flex;
`;

const StyledMain = styled.main`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: lightgray;
  padding: 5px;
  text-decoration: none;
  border-radius: 3px;
  color: black;
  margin: 3px;
`;

export default CharacterCreateForm;
