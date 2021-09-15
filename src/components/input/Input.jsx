import React, { forwardRef } from "react";
import styled from "styled-components";

const Base = styled.div`
  position: relative;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const TextField = styled.input`
  display: block;
  font-size: 1em;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  padding: 1em 0.5em;
  border-radius: 0.5em;
  border: 1px solid #c3c3c3;
  width: 100%;
`;
const Label = styled.label`
  position: relative;
  font-size: 0.85em;
  color: #333;
`;

const Input = forwardRef(({ id, label, onChange, value }, ref) => {
  return (
    <Base>
      <Label htmlFor={id}>{label}</Label>
      <TextField ref={ref} value={value} id={id} onChange={onChange} />
    </Base>
  );
});

export default Input;
