import React from "react";
import styled from "styled-components";
import { color } from "../utils/colors";
import { fontSize, fontName } from "../utils/fonts";

const Divder = (props) => {
  return (
    <DividerContainer>
      <Line />
      <Label>{props.title}</Label>
      <Line />
    </DividerContainer>
  );
};

export default Divder;

const DividerContainer = styled.div`
  width: 90%;
  margin: 14px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${color.red};
`;

const Label = styled.p`
  color: white;
  margin: 0 8px;
  font-size: ${fontSize.subtitle};
  font-family: ${fontName.secondary};
`;
