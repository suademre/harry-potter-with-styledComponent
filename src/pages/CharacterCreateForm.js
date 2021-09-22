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
