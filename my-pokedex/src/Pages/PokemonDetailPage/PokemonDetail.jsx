import React from "react";
import {
  BaseStatusDiv,
  DetailContainer,
  DivAvatarPokemon,
  DivImagePokemon,
  MiniCard,
  PokemonImagesDiv,
  PokemonMoves,
  SectionDetail,
} from "./styles";
import Header from "../../Components/Header/Header";

const PokemonDetail = ({ pokemon }) => {
  return (
    <>
      <Header />
      <DetailContainer>
        <SectionDetail>
          <PokemonImagesDiv>
            <DivImagePokemon></DivImagePokemon>
            <DivImagePokemon></DivImagePokemon>
          </PokemonImagesDiv>
          <BaseStatusDiv></BaseStatusDiv>
          <div>
            <PokemonMoves></PokemonMoves>
            <MiniCard></MiniCard>
          </div>
          <DivAvatarPokemon></DivAvatarPokemon>
        </SectionDetail>
      </DetailContainer>
    </>
  );
};

export default PokemonDetail;
