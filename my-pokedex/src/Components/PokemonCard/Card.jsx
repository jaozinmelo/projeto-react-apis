import { useContext } from "react";
import {
  AvatarPokemon,
  CapturarButton,
  CardContainer,
  Cardbox,
  DetailsPokemon,
  DetailsPokemonButton,
  ImagePokemon,
  PokemonId,
  PokemonName,
  PokemonType,
  RemoveButton,
  TextPokemonType,
  TypeOfPokemon,
} from "./styles";
import { useLocation } from "react-router-dom";
import { CardFunctionsContext } from "../../Contexts/CardFunctionsContext";

function Card({ pokemon }) {
  const location = useLocation();
  const { addToPokemon, removePokemon } = useContext(CardFunctionsContext);
  const renderButtonCard = () => {
    switch (location.pathname) {
      case "/":
        return (
          <CapturarButton onClick={() => addToPokemon(pokemon, pokemon.name)}>
            Capturar!
          </CapturarButton>
        );
      case "/pokedex":
        return (
          <RemoveButton onClick={() => removePokemon(pokemon.id)}>
            Excluir
          </RemoveButton>
        );
      default:
        return (
          <CapturarButton onClick={() => addToPokemon(pokemon, pokemon.name)}>
            Capturar!
          </CapturarButton>
        );
    }
  };

  return (
    <CardContainer>
      <Cardbox type={pokemon.types[0].type.name}>
        <DetailsPokemon>
          {pokemon.id < 10 ? (
            <PokemonId>{`#0${pokemon.id}`}</PokemonId>
          ) : (
            <PokemonId>{`#${pokemon.id}`}</PokemonId>
          )}
          <PokemonName>{pokemon.name}</PokemonName>

          <TypeOfPokemon>
            <PokemonType>
              <div>
                {Object.values(pokemon.types).map((typeInfo) => {
                  return (
                    <TextPokemonType>{typeInfo.type.name}</TextPokemonType>
                  );
                })}
              </div>
            </PokemonType>
          </TypeOfPokemon>
          <DetailsPokemonButton>Detalhes</DetailsPokemonButton>
        </DetailsPokemon>

        <AvatarPokemon>
          <ImagePokemon
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`${pokemon.name} Image`}
          />

          {renderButtonCard()}
        </AvatarPokemon>
      </Cardbox>
    </CardContainer>
  );
}

export default Card;
