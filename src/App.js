import React from "react";
import styled from "styled-components";
import Card from "./components/card";
import { color } from "./utils/colors";

function App() {
  return (
    <Container>
      <Title>Pagina de bebida</Title>
      <Card />
    </Container>
  );
}

export default App;

const Title = styled.h1``;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${color.background};
`;
