import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  box-shadow: 0 0 4px #c5c5c5;
  border-radius: 4px;
  padding: 10px;
`;

function Card(props) {
  return <StyledCard {...props}>{props.children}</StyledCard>;
}
export default Card;
