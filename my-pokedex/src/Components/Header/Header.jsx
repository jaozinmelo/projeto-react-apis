import { useLocation, useNavigate } from "react-router-dom";
import { goToPokelistPage, goToPokedexPage } from "../../Router/Coordinator";
import { ButtonPokedex, ButtonPokelist, Container } from "./styles";

function Header() {
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <ButtonPokedex onClick={() => goToPokedexPage(navigate)}>
              POKÉDEX
            </ButtonPokedex>
            <span>Lista de pokemons</span>
          </>
        );
      case "/pokedex":
        return (
          <>
            <ButtonPokelist onClick={() => goToPokelistPage(navigate)}>
              TODOS POKÉMONS
            </ButtonPokelist>
            <span>Pokedex</span>
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
