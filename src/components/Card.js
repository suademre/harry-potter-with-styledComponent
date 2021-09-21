import React, { useState } from "react";
import styled, { css } from "styled-components";
import Emoji from "./Emoji";

function tellColorName(house) {
  let color;
  if (house === "Gryffindor") {
    color = "red";
  } else if (house === "Hufflepuff") {
    color = "yellow";
  } else if (house === "Ravenclaw") {
    color = "blue";
  } else if (house === "Slytherin") {
    color = "green";
  } else {
    color = "white";
  }
  return color;
}

function Card({
  characterName,
  house,
  imgUrl,
  actor,
  gender,
  birthday,
  yearOfBirth,
  isFavorite,
  onFavoriteButtonClick,
  favorites,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [emoji, setEmoji] = useState("");

  const handleImojiClick = (item) => {
    item !== emoji ? setEmoji(item) : setEmoji("");
  };

  const color = tellColorName(house);

  console.log("isFavorite : " + isFavorite);

  return (
    <>
      <StyledCarachterCardDiv>
        <StyledCardSection isFavorite={isFavorite} house={house}>
          <StyledCardImgDiv>
            <StyledCardImg src={imgUrl} alt={characterName} />
          </StyledCardImgDiv>
          <StyleCardPropertiesTag>
            <StyledFacoriteButton
              onClick={() => onFavoriteButtonClick(characterName)}
            >
              {isFavorite ? (
                <i className="fas fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </StyledFacoriteButton>

            <Emoji handleImojiClick={handleImojiClick} />
            <h4 className="card__name">
              {emoji} Name : {characterName}{" "}
            </h4>

            <h6 className="card__actor">Actor's Name{actor}</h6>
            <h6 className={color}>House : {house}</h6>
            <button onClick={() => setShowAnswer(!showAnswer)} className="more">
              More
            </button>

            {showAnswer && (
              <div className="moreInfo">
                <h6>Gender : {gender}</h6>
                <h6>Birthday : {birthday}</h6>
                <h6>Birthyear : {yearOfBirth}</h6>
              </div>
            )}
            {characterName === "Harry Potter"
              ? "⚡"
              : characterName === "Hermione Granger"
              ? "😥"
              : characterName === "Ron Weasley"
              ? "🤫"
              : ""}
          </StyleCardPropertiesTag>
        </StyledCardSection>
      </StyledCarachterCardDiv>
    </>
  );
}

const StyledCarachterCardDiv = styled.div`
  margin: 60px 0px;
`;

const StyledCardSection = styled.section`
  ${({ isFavorite, house }) =>
    isFavorite && house === "Gryffindor"
      ? css`
          width: 400px;
          border: 2px solid #dedede;
          border-radius: 10px;
          margin: 10px 20px;
          box-shadow: 0px 0px 10px #dedede;
          padding: 10px 5px;
          display: flex;
          flex-wrap: wrap;
          background-color: lightcoral;
        `
      : isFavorite && house === "Hufflepuff"
      ? css`
          width: 400px;
          border: 2px solid #dedede;
          border-radius: 10px;
          margin: 10px 20px;
          box-shadow: 0px 0px 10px #dedede;
          padding: 10px 5px;
          display: flex;
          flex-wrap: wrap;
          background-color: lightyellow;
        `
      : isFavorite && house === "Ravenclaw"
      ? css`
          width: 400px;
          border: 2px solid #dedede;
          border-radius: 10px;
          margin: 10px 20px;
          box-shadow: 0px 0px 10px #dedede;
          padding: 10px 5px;
          display: flex;
          flex-wrap: wrap;
          background-color: lightblue;
        `
      : isFavorite && house === "Slytherin"
      ? css`
          width: 400px;
          border: 2px solid #dedede;
          border-radius: 10px;
          margin: 10px 20px;
          box-shadow: 0px 0px 10px #dedede;
          padding: 10px 5px;
          display: flex;
          flex-wrap: wrap;
          background-color: lightgreen;
        `
      : css`
          width: 400px;
          border: 2px solid #dedede;
          border-radius: 10px;
          margin: 10px 20px;
          box-shadow: 0px 0px 10px #dedede;
          padding: 10px 5px;
          display: flex;
          flex-wrap: wrap;
        `}
`;

const StyledCardImgDiv = styled.div`
  width: 45%;
  text-align: center;
  margin: 25px auto;
`;

const StyledCardImg = styled.img`
  max-width: 150px;
  height: 100%;
  border: 2px solid #dedede;
  border-radius: 50%;
`;

const StyleCardPropertiesTag = styled.div`
  width: 45%;
  text-align: center;
  margin-left: 30px;
  margin-top: 10px;
`;

const StyledFacoriteButton = styled.button`
  background: transparent;
  border: none;
  margin-left: 80%;
  font-size: 20px;
  margin-bottom: 10px;
`;

export default Card;
