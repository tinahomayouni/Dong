import React from "react";
import styled from "styled-components";

const Text = (props) => {
  return React.createElement(props.type, { ...props });
};

Text.defaultProps = {
  type: "span",
};

const StyledText = styled(Text)`
  font-size: 14px;
`;

export default StyledText;
