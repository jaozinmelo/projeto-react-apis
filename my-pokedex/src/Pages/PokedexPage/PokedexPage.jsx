import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import Card from "../../Components/PokemonCard/Card";
import { CardFunctionsContext } from "../../Contexts/CardFunctionsContext";
import { Container } from "./styles";


const PokedexPage = () => {
  const { pokemonCart } = useContext(CardFunctionsContext);
  return (
    <>
      <Header />
      <Container>
      {pokemonCart.map((pokemon) => {
        return <Card key={pokemon.id} pokemon={pokemon} />;
      })}
      </Container>
    </>
  );
};

export default PokedexPage;
