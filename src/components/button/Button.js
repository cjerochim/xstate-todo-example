import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  padding: 0.5em 1em;
  display: block;
  width: ${({ full }) => (full ? "100%" : "auto")};
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 0.5em;
  cursor: pointer;
  transition-property: background-color, color;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #000;
  }
`;

export default Button;
