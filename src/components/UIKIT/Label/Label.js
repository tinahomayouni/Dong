import React from 'react';
import styled from 'styled-components';
import { Text } from '../index';

export const StyledLabel = styled.label`
    font-size:1em;
`

export default function Label(props) {
    return (
      <StyledLabel>
        <Text type="p">
            {props.children}
        </Text>
      </StyledLabel>
    )
}
