import React from "react";
import styled from "styled-components";
import Card from "./components/card";
import { color } from "./utils/colors";
import { fontName, fontSize } from "./utils/fonts";

function App() {
  return (
    <Container>
      <Title>Cocktail Recipes</Title>
      <Card />
    </Container>
  );
}

export default App;

const Title = styled.h1`
  color: ${color.red};
  font-size: ${fontSize.title};
  font-family: ${fontName.title};
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${color.background};
`;
