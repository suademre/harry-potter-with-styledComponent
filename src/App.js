import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CharacterCreateForm from "./pages/CharacterCreateForm";
import HarryPotterCaharacter from "./pages/HarryPotterCaharacter";

function App(/* { harryPotterData } */) {
  return (
    <Switch>
      <Route exact path="/">
        <StyledLink to="/characters">Characters App</StyledLink>
        <StyledLink to="/harrypotter">Harry Potter App</StyledLink>
      </Route>
      <Route path="/characters">
        <CharacterCreateForm />
      </Route>
      <Route path="/harrypotter">
        <HarryPotterCaharacter /* data={harryPotterData} */ />
      </Route>
    </Switch>
  );
}

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: lightgray;
  padding: 5px;
  text-decoration: none;
  border-radius: 3px;
  color: black;
  margin: 3px;
`;

export default App;
