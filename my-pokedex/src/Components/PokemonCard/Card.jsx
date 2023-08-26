import { useContext } from "react";
import {
  AvatarPokemon,
  ButtonDiv,
  CapturarButton,
  CardContainer,
  Cardbox,
  DetailsPokemon,
  DetailsPokemonButton,
  ImagePokebola,
  ImagePokemon,
  PokeTypes,
  PokeTypesImg,
  PokemonId,
  PokemonName,
  PokemonType,
  RemoveButton,
  TextPokemonType,
  TypeOfPokemon,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { CardFunctionsContext } from "../../Contexts/CardFunctionsContext";
import pokebola from "../../assets/images/pokebola.png";
import { getTypeImageByType } from "../../assets/functionType/functionType";
import { goToDetailsPage } from "../../Router/Coordinator";

function Card({ pokemon }) {
  const navigate = useNavigate()
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
              {Object.values(pokemon.types).map((typeInfo) => {
                return (
                  <PokeTypesImg
                    key={typeInfo.type.name}
                    src={getTypeImageByType(typeInfo.type.name)}
                  />
                );
              })}
            </PokemonType>
          </TypeOfPokemon>
          <DetailsPokemonButton onClick={()=> goToDetailsPage(navigate, pokemon.id)}>Detalhes</DetailsPokemonButton>
        </DetailsPokemon>
        
        <AvatarPokemon>
          <ImagePokebola src={pokebola}/>
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
