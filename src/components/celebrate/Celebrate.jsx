import styled from "styled-components";

const Celebrate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ active }) => (active ? "1.0" : "0.0")};
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

export default Celebrate;
