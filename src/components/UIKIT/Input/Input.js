import React from "react";
import styled from "styled-components";
import { Label } from "../index";

export const StyledInput = styled.input`
  color: #000;
`;

Input.defaultProps = {
  type: "text",
};

export default function Input(props) {
  return (
    <>
      {props.label ? <Label>{props.label}</Label> : null}
      <StyledInput
        onChange={(e) => props.onChange(e.target.value)}
        type={props.type}
      />
    </>
  );
}
