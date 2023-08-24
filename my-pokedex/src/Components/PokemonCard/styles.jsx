import styled from "styled-components";

const getBackgroundColorByType = (type) => {
  switch (type) {
    case "bug":
      return "#76A866";
    case "dark":
      return "#704139";
    case "dragon":
      return "#7038F8";
    case "electric":
      return "#F8D030";
    case "fairy":
      return "#EE99AC";
    case "fighting":
      return "#C03028";
    case "fire":
      return "#F08030";
    case "flying":
      return "#A890F0";
    case "ghost":
      return "#705898";
    case "grass":
      return "#78C850";
    case "ground":
      return "#E0C068";
    case "ice":
      return "#98D8D8";
    case "normal":
      return "#A8A878";
    case "poison":
      return "#A040A0";
    case "psychic":
      return "#F85888";
    case "rock":
      return "#B8A038";
    case "steel":
      return "#B8B8D0";
    case "water":
      return "#6890F0";
    default:
      return "transparent";
  }
};
export const CardContainer = styled.div`
  width: /* 27.5rem */440px;
  height: 263px;
  position: relative;
`;
export const Cardbox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: /* 27.5rem */440px;
  height: 210px;
  background: ${(props) => getBackgroundColorByType(props.type)};
  /* position: absolute;
  bottom: 0; */
`;
export const DetailsPokemon = styled.div`
  margin-top: 2rem;
  width: 50%;
  position: relative;
`;
export const PokemonId = styled.div`
  font: bold;
  font-size: 0.75rem;
  line-height: 0.75rem;
`;
export const PokemonName = styled.div`
  font: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-transform: capitalize;
  margin-top: 0.375rem;
`;
export const TypeOfPokemon = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PokemonType = styled.div`
  border-radius: 0.25rem;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  width: 4rem;
  height: 1.5rem;
  margin: 0.25rem 0 0 0.25rem;
`;
export const TextPokemonType = styled.div`
  font-weight: 500;
  font-size: 0.75rem; /* 12px */
  line-height: 1rem; /* 16px */
  background-color: aqua;
`;
export const AvatarPokemon = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center; 
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const ImagePokemon = styled.img`
  width: 193px;
  height: 193px;
`;
export const CapturarButton = styled.div`
  /* bg-orange-500 
    hover:bg-red-700 
    text-white 
    font-bold  */
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  &:hover{
    
    cursor: pointer;
    background-color:  #FF6262;

  }
`;
export const RemoveButton = styled.div`
  /* bg-orange-500 
    hover:bg-red-700 
    text-white 
    font-bold  */
  background-color: #FF6262;
;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-top: 2rem;
`;
export const DetailsPokemonButton = styled.div`
  background-color: transparent;
  /* hover:bg-orange-500  */
  font-weight: 600;
  /* hover:text-white  */
  padding: 0.5rem 1rem;
  border-width: 1px;
  /* border-orange-500  */
  /* hover:border-transparent 
    rounded */
  /* position: absolute;
  bottom: 0;
  left: 0; */
`;
