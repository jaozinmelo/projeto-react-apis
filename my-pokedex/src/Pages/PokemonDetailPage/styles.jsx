import styled from "styled-components";
import { getBackgroundColorByType } from "../../Components/PokemonCard/styles";

export const DetailContainer = styled.div`
  display: flex;
  background-color: #5d5d5d;
  min-height: 100vh;
  padding: 40px;
`;
export const SectionDetail = styled.section`
  position: relative;
  display: flex;
  margin: 40px;
  border-radius: 12px;
  width: 1389.14px;
  height: 663px;
  background-color: ${(props) => getBackgroundColorByType(props.types)};
  column-gap: 10px;
  justify-content: space-evenly;
  align-items: center;
`;
export const PokemonImagesDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const DivImagePokemon = styled.div`
  display: flex;
  width: 282px;
  height: 292px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
export const ImagePokemon = styled.img``;

export const BaseStatusContainter = styled.div`
  background-color: #ffffff;
  height: 613px;
  width: 343px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  h2 {
    padding: 20px;
  }
`;
export const BaseStatsDiv = styled.div`
  border-bottom: 1px solid #ffffff;
  display: grid;
  grid-template: 1fr / 25% 10% 1fr;
  gap: 15px;
  height: 2rem;

  p {
    margin: auto 0px;
  }
`;

export const StatsLines = styled.p`
  text-align: right;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StatsNumbers = styled.p`
  text-align: right;
`;

export const ProgressionBar = styled.div`
  display: flex;
  padding: 0.6rem;
  --progress: calc((${(prop) => prop.base} / 80) * 100);

  &::before {
    content: "";
    border-radius: 8px;
    width: calc(var(--progress) * 1%);
    background-color: hsl(var(--progress), 70%, 50%);
  }
`;

export const ContainerMovesAndMiniCard = styled.div`
  height: 613px;
  width: 292px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const PokemonMoves = styled.div`
  background-color: #ffffff;
  height: 453px;
  width: 292px;
  border-radius: 8px;
`;

export const ContainerMoves = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 800;
    line-height: 29.05px;
  }
  margin: 1rem;
`;
export const DetailMoves = styled.div`
  color: #000000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 350px;
  margin-top: 1rem;
  overflow-y: auto;
`;
export const Moves = styled.div`
  background-color: #ececec;
  border: 1px dashed #00000024;
  border-radius: 12px;
  align-self: flex-start;
  padding: 8px 10px;
`;
export const MiniCard = styled.div`
  /* background-color: #ffffff; */
  height: auto;
  width: 292px;
  border-radius: 8px;
  padding-top: 6px;

  h2 {
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font: bold;
    font-size: 16px;
    line-height: 10px;
    padding-bottom: 4px;
  }

  h3 {
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font: bold;
    font-size: 32px;
    line-height: 38.73px;
    text-transform: capitalize;
    padding-bottom: 8px;
  }
`;
export const DivAvatarPokemon = styled.img`
  width: 270px;
  height: 270px;
  /* background-color: #ffffff; */
`;
// export const DivAvatarPokemon = styled.div`
//   width: 270px;
//   height: 270px;
//   background-color: #ffffff;
// `;
