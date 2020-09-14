import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background: red;
  color: #fff;
`;

export default function Button(props) {
  return <StyledButton>{props.children}</StyledButton>;
}
