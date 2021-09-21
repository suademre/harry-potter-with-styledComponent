import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <StyledH1>Herry Potter</StyledH1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100vw;
  position: fixed;
  z-index: 10;
  top: 0;
  margin-top: 0;
  margin-bottom: 10px;
`;

const StyledH1 = styled.h1`
  background-color: #884bd7;
  color: white;
  text-align: center;
  font-size: 40px;
  padding-top: 10px;
  margin-top: 0px;
`;

export default Header;
