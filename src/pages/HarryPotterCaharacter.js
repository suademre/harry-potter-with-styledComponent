import React, { useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

function HarryPotterCaharacter({ data }) {
  const [activeHouse, setActiveHouse] = useState("");

  function handleHouseButtonClick(house) {
    setActiveHouse(house);
  }

  const filteredData = data.filter(
    (character) => character.house === activeHouse || activeHouse === ""
  );

  //favorite
  const [favorites, setFavorite] = useState(() => {
    //set default value
    if (localStorage.getItem("favoritesLocalStorage")) {
      return JSON.parse(localStorage.getItem("favoritesLocalStorage"));
    } else {
      return [];
    }
  });

  function handleFavoriteButtonClick(characterName) {
    const isFavorite = favorites.includes(characterName);
    let newFavorites;
    if (isFavorite) {
      // Remove from favorites
      newFavorites = favorites.filter((item) => {
        if (item === characterName) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      // Add to favorites
      newFavorites = favorites.concat(characterName);
    }
    setFavorite(newFavorites);
    localStorage.setItem("favoritesLocalStorage", JSON.stringify(newFavorites));
  }
  return (
    <div className="App">
      <Header />
      {filteredData.map((character) => (
        <Card
          key={character.name}
          characterName={character.name}
          house={character.house}
          imgUrl={character.image}
          actor={character.actor}
          gender={character.gender}
          birthday={character.dateOfBirth}
          yearOfBirth={character.yearOfBirth}
          onFavoriteButtonClick={handleFavoriteButtonClick}
          isFavorite={favorites.indexOf(character.name) > -1}
          favorites={favorites}
        />
      ))}
      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClick}
      />
    </div>
  );
}

export default HarryPotterCaharacter;
