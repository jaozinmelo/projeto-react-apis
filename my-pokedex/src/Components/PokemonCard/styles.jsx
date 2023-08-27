import styled from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Poppins:wght@700&display=swap');
</style>;

export const getBackgroundColorByType = (types) => {
  switch (types) {
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
      return "#EAAB7D";
    case "flying":
      return "#A890F0";
    case "ghost":
      return "#705898";
    case "grass":
      return "#729F92";
    case "ground":
      return "#E0C068";
    case "ice":
      return "#98D8D8";
    case "normal":
      return "#BF9762";
    case "poison":
      return "#A040A0";
    case "psychic":
      return "#F85888";
    case "rock":
      return "#B8A038";
    case "steel":
      return "#B8B8D0";
    case "water":
      return "#71C3FF";
    default:
      return "transparent";
  }
};
export const CardContainer = styled.div`
  width: /* 27.5rem */ 440px;
  height: 263px;
  position: relative;
`;
export const Cardbox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  border-radius: 8px;
  padding: 1.5rem;
  width: 440px;
  height: 210px;
  background: ${(props) => getBackgroundColorByType(props.types)};
`;
export const DetailsPokemon = styled.div`
  margin-top: 2rem;
  width: 50%;
  position: relative;
`;
export const PokemonId = styled.h3`
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font: bold;
  font-size: 16px;
  line-height: 10px;
`;
export const PokemonName = styled.h3`
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font: bold;
  font-size: 32px;
  line-height: 38.73px;
  text-transform: capitalize;
`;
export const TypeOfPokemon = styled.div`
  display: flex;
  flex-direction: row;
`;
// tipos do pokemon
export const PokemonType = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  gap: 5px;
`;
export const PokeTypesImg = styled.img`
  width: 91px;
  height: 31px;
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
  z-index: 1;
`;
export const ImagePokebola = styled.img`
  /* width: 500px; */
  /* height: 270px; */
  position: absolute;
  bottom: 21px;
  right: 0;
  z-index: 1;
`;
export const CapturarButton = styled.button`
  font-weight: bold;
  width: 146px;
  height: 38px;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  z-index: 1;
  &:hover {
    transition: ease-in-out;
    cursor: pointer;
    background-color: #ff6262;
  }
`;
export const RemoveButton = styled.button`
  width: 146px;
  height: 38px;
  font-weight: bold;
  background-color: #ff6262;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  z-index: 1;
  &:hover {
    transition: ease-in-out;
    cursor: pointer;
    background-color: #b82b2b;
  }
`;
export const DetailsPokemonButton = styled.button`
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #ffffff;
  &:hover{
    color: #ffffffe1;
    cursor: pointer;
  }
  padding: 0.5rem 1rem;
  border: none;
  text-decoration: underline;
  height: 38px;
  position: absolute;
  bottom: -10px;
`;
