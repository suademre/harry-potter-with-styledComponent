import React from "react";
import styled from "styled-components";

function Emoji({ handleImojiClick }) {
  return (
    <div className="emoji__buttons">
      <StyledButton onClick={() => handleImojiClick("👹")}>👹</StyledButton>
      <StyledButton onClick={() => handleImojiClick("😥")}>😥</StyledButton>
      <StyledButton onClick={() => handleImojiClick("🤫")}>🤫</StyledButton>
      <StyledButton onClick={() => handleImojiClick("🎃")}>🎃</StyledButton>
    </div>
  );
}

const StyledButton = styled.button`
  background: transparent;
  border: none;
`;

export default Emoji;
