import React from "react";
import styled from "styled-components";

function Footer({ activeHouse, onHouseButtonClick }) {
  return (
    <StyledFooter>
      {/* <nav className="navigation"> */}
      <button
        className={
          activeHouse === "Gryffindor"
            ? "footer__button--active"
            : "navigation__button"
        }
        onClick={() => onHouseButtonClick("Gryffindor")}
      >
        Gryffindor
      </button>
      <button
        className={
          activeHouse === "Hufflepuff"
            ? "footer__button--active"
            : "navigation__button"
        }
        onClick={() => onHouseButtonClick("Hufflepuff")}
      >
        Hufflepuff
      </button>
      <button
        className={
          activeHouse === "Ravenclaw"
            ? "footer__button--active"
            : "navigation__button"
        }
        onClick={() => onHouseButtonClick("Ravenclaw")}
      >
        Ravenclaw
      </button>
      <button
        className={
          activeHouse === "Slytherin"
            ? "footer__button--active"
            : "navigation__button"
        }
        onClick={() => onHouseButtonClick("Slytherin")}
      >
        Slytherin
      </button>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: rgb(255, 255, 255);
  height: 8vh;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #dedede;
`;

export default Footer;
