import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import Card from "../../Components/PokemonCard/Card";
import { PokemonContext } from "../../Contexts/PokemonContext";
import { Container } from "./styles";
import { CardFunctionsContext } from "../../Contexts/CardFunctionsContext";

const Pokelist = () => {
  const { pokemons } = useContext(PokemonContext);
  const { pokemonCart } = useContext(CardFunctionsContext);

  return (
    <>
      <Header />
      <Container>
        {pokemons
          .filter((pokemonInList) => {
            if (
              pokemonCart.find(
                (pokemonInPokedex) =>
                  pokemonInList.name === pokemonInPokedex.name
              )
            ) {
              return !pokemonInList;
            } else {
              return pokemonInList;
            }
          })
          .map((pokemon) => {
            return <Card key={pokemon.id} pokemon={pokemon} />;
          })}
      </Container>
    </>
  );
};

export default Pokelist;
