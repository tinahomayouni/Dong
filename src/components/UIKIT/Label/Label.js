import React from 'react';
import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-size: 1em;
`;

export default function Label(props) {
  return <StyledLabel>{props.children}</StyledLabel>;
}
