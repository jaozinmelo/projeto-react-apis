import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToPokelistPage, goToPokedexPage } from "../../Router/Coordinator";
import {
  AddToPokedexButton,
  ButtonPokedex,
  ButtonPokelist,
  Container,
  DivButton,
  LogoPokedex,
} from "./styles";
import pokedexlogo from "../../assets/images/pokedexlogo.png";
import arrowleft from "../../assets/images/arrowleft.png";
import { useContext } from "react";
import { CardFunctionsContext } from "../../Contexts/CardFunctionsContext";
import { PokemonContext } from "../../Contexts/PokemonContext";
function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, types, id } = useParams();
  const detailPage = `/detailPage/${name}/${types}/${id}`;

  const { pokemons } = useContext(PokemonContext);
  const pokemon = pokemons.find((pokemon) => pokemon.name === name);
  const { pokemonCart, addToPokemon, removePokemon } =
    useContext(CardFunctionsContext);

  const checkPokemon = pokemonCart.find((pokemon) => pokemon.name === name);
  const renderButton = () => {
    if (!checkPokemon) {
      return (
        <AddToPokedexButton onClick={() => addToPokemon(pokemon, pokemon.name)}>
          Adicionar Pokemon
        </AddToPokedexButton>
      );
    } else {
      return (
        <AddToPokedexButton onClick={() => removePokemon(pokemon.id)}>
          Remover Pokemon
        </AddToPokedexButton>
      );
    }
  };
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <ButtonPokedex onClick={() => goToPokedexPage(navigate)}>
              POKÉDEX
            </ButtonPokedex>
            <LogoPokedex src={pokedexlogo} />
          </>
        );
      case "/pokedex":
        return (
          <DivButton>
            <ButtonPokelist onClick={() => goToPokelistPage(navigate)}>
              <img src={arrowleft} alt="seta para esquerda" /> TODOS POKÉMONS
            </ButtonPokelist>
            <LogoPokedex src={pokedexlogo} />
          </DivButton>
        );
      case detailPage:
        return (
          <>
            <ButtonPokelist onClick={() => goToPokelistPage(navigate)}>
              <img src={arrowleft} alt="seta para esquerda" /> TODOS POKÉMONS
            </ButtonPokelist>
            <LogoPokedex src={pokedexlogo} />
            {renderButton()}
          </>
        );
      default:
        return (
          <>
            <ButtonPokelist onClick={() => goToPokelistPage(navigate)}>
              TODOS POKÉMONS
            </ButtonPokelist>
            <span>Página inexistente</span>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
