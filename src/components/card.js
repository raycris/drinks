import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fontName, fontSize } from "../utils/fonts";
import { color } from "../utils/colors";
import Divder from "./divder";

const API =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const Card = () => {
  const [character, setCharacter] = useState([]);
  const ingredientes = [];
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.drinks);
      });
  }, []);

  return (
    <Container>
      {character.map((item) => (
        <CardContainer key={item.idDrink}>
          <DrinkName>{item.strDrink}</DrinkName>
          <DrinkContainerDescription>
            <DescriptionContainer>
              <Description>{item.strInstructions}</Description>
            </DescriptionContainer>
            <DrinkPhoto src={item.strDrinkThumb} />
          </DrinkContainerDescription>

          <Divder title="INGREDIENTS" />
          <IngredientBox>
            <IngredientContainer>
              <IngredientsLabel>{item.strMeasure1}</IngredientsLabel>
              <IngredientsLabel>{item.strIngredient1}</IngredientsLabel>
            </IngredientContainer>
            <IngredientContainer>
              <IngredientsLabel>{item.strMeasure2}</IngredientsLabel>
              <IngredientsLabel>{item.strIngredient2}</IngredientsLabel>
            </IngredientContainer>
            <IngredientContainer>
              <IngredientsLabel>{item.strMeasure3}</IngredientsLabel>
              <IngredientsLabel>{item.strIngredient3}</IngredientsLabel>
            </IngredientContainer>
            {item.strMeasure4 != null ? (
              <>
                <IngredientContainer>
                  <IngredientsLabel>{item.strMeasure4}</IngredientsLabel>
                  <IngredientsLabel>{item.strIngredient4}</IngredientsLabel>
                </IngredientContainer>
                <IngredientContainer>
                  <IngredientsLabel>{item.strMeasure5}</IngredientsLabel>
                  <IngredientsLabel>{item.strIngredient5}</IngredientsLabel>
                </IngredientContainer>
              </>
            ) : (
              <></>
            )}
          </IngredientBox>
        </CardContainer>
      ))}
    </Container>
  );
};

export default Card;

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 50%;
  border: 1px solid ${color.white};
  margin: 16px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: ${color.darkGray};
`;

const DescriptionContainer = styled.div`
  width: 50%;
`;

const DrinkContainerDescription = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const IngredientContainer = styled.div`
  display: flex;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
`;
const IngredientBox = styled.div`
  width: 50%;
  margin: 16px;
  border: 1px solid ${color.red};
  border-radius: 10px;
  background-color: ${color.white};
`;

const Description = styled.p`
  color: ${color.white};
`;

const DrinkName = styled.p`
  color: ${color.white};
  font-size: ${fontSize.title};
  font-family: ${fontName.title};
`;

const DrinkPhoto = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 16px;
  border-radius: 6px;
`;

const IngredientsLabel = styled.p`
  font-size: ${fontSize.small};
  font-family: ${fontName.title};
`;
