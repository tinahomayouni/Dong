import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => (props.type === 'primary' ? '#1c90f3' : '#25c775')};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
`;

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.defaultProps = {
  type: 'primary'
};
