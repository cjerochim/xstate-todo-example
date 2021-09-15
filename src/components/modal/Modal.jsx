import React from "react";
import styled from "styled-components";

const Base = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ active }) => (active ? "1.0" : "0.0")};
  pointer-events: ${({ active }) => (active ? "painted" : "none")};

  transition-property: opacity;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const Panel = styled.section`
  will-change: transform;
  position: relative;
  border-radius: 0.5em;
  padding: 1em;
  background-color: #fff;
  width: 100%;
  max-width: 20em;
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0.95)")};
  transition-property: transform;
  transition-duration: ${({ active }) => (active ? "0.3s" : "0.2s")};
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  box-shadow: 0 0 1em 0em rgba(0, 0, 0, 0.3);
`;

const PanelButton = styled.button`
  position: relative;
  padding: 0.5em 1em;
  font-size: 0.8em;
  border: 1px solid #000;
  background-color: transparent;
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

const PanelHeader = styled.header`
  position: relative;
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PanelBody = styled.div`
  position: relative;
  margin-top: 1em;
  margin-bottom: 1em;
  height: 8em;

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

const PanelTitle = styled.h3`
  position: relative;
  margin: 0;
  font-weight: normal;
`;

const ModalGroup = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  visibility: ${({ active }) => (active ? "visible" : "hdden")};
  opacity: ${({ active }) => (active ? "1.0" : "0.0")};
  pointer-events: ${({ active }) => (active ? "painted" : "none")};
  transition-property: visibility, opacity;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);

  & > form :first-child {
    margin-top: 0;
  }
`;

const Modal = ({ active, title, children, onCancel }) => (
  <Base active={active}>
    <Panel active={active}>
      <PanelHeader>
        <PanelTitle>{title}</PanelTitle>
        <PanelButton onClick={onCancel}>Close</PanelButton>
      </PanelHeader>
      <PanelBody>{children}</PanelBody>
    </Panel>
  </Base>
);

Modal.Group = ModalGroup;

export default Modal;
