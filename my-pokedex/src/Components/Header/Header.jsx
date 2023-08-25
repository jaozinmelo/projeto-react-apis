import { useLocation, useNavigate } from "react-router-dom";
import { goToPokelistPage, goToPokedexPage } from "../../Router/Coordinator";
import {
  ButtonPokedex,
  ButtonPokelist,
  Container,
  DivButton,
  Logo,
  LogoPokedex,
} from "./styles";
import pokedexlogo from "../../assets/images/pokedexlogo.png";
// import { BiChevronLeft } from "react-icons/bi";
import arrowleft from '../../assets/images/arrowleft.png'
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
