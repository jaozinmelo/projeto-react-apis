import React, { useContext } from "react";
import {
  BaseStatusContainter,
  ContainerMoves,
  ContainerMovesAndMiniCard,
  DetailContainer,
  DetailMoves,
  DivAvatarPokemon,
  DivImagePokemon,
  MiniCard,
  Moves,
  PokemonImagesDiv,
  PokemonMoves,
  ProgressionBar,
  SectionDetail,
  StatsLines,
  StatsNumbers,
  BaseStatsDiv,
} from "./styles";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../../Contexts/PokemonContext";
import { getTypeImageByType } from "../../assets/functionType/functionType";
import { ImagePokemon } from "../../Components/PokemonCard/styles";

const PokemonDetail = () => {
  const { name, types, id } = useParams();
  const { pokemons } = useContext(PokemonContext);
  const pokemon = pokemons.find(
    (pokemon) => pokemon.name === name.toLowerCase()
  );

  if (!pokemon) {
    return <h1>Carregando...</h1>;
  }

  const statsTotal =
    pokemon &&
    pokemon.stats.reduce((total, stat) => {
      return total + stat.base_stat;
    }, 0);

  return (
    <>
      <Header />
      <DetailContainer>
        <SectionDetail types={types}>
          <PokemonImagesDiv>
            <DivImagePokemon>
              <ImagePokemon
                src={pokemon.sprites.front_shiny}
                alt={`${pokemon.name} de frente`}
              />
            </DivImagePokemon>
            <DivImagePokemon>
              <ImagePokemon
                src={pokemon.sprites.back_shiny}
                alt={`${pokemon.name} de costas`}
              />
            </DivImagePokemon>
          </PokemonImagesDiv>
          <BaseStatusContainter>
            <h2>Base Stats</h2>
            {pokemon.stats.map((stat) => {
              return (
                <BaseStatsDiv key={stat.stat.name}>
                  <StatsLines>
                    {stat.stat.name === "hp"
                      ? "HP"
                      : stat.stat.name === "special-attack"
                      ? "Sp. Atk"
                      : stat.stat.name === "special-defense"
                      ? "Sp. Def"
                      : stat.stat.name}
                  </StatsLines>
                  <StatsNumbers>{stat.base_stat}</StatsNumbers>
                  <ProgressionBar base={stat.base_stat}></ProgressionBar>
                </BaseStatsDiv>
              );
            })}
            <BaseStatsDiv>
              <StatsLines>Total</StatsLines>
              <StatsNumbers>
                <strong>{statsTotal}</strong>
              </StatsNumbers>
            </BaseStatsDiv>
          </BaseStatusContainter>
          <ContainerMovesAndMiniCard>
            <MiniCard>
              {id < 10 ? <h2>{`#0${id}`}</h2> : <h2>{`#${id}`}</h2>}
              <h3>{name}</h3>

              <div>
                <div>
                  {Object.values(pokemon.types).map((typeInfo) => {
                    return (
                      <img
                        key={typeInfo.type.name}
                        src={getTypeImageByType(typeInfo.type.name)}
                        alt="types do pokemon"
                      />
                    );
                  })}
                </div>
              </div>
            </MiniCard>
            <PokemonMoves>
              <ContainerMoves>
                <h3>Moves:</h3>
                <DetailMoves>
                  <Moves>
                    {pokemon.moves[0].move.name.charAt(0).toUpperCase() +
                      pokemon.moves[0].move.name.slice(1)}
                  </Moves>
                  <Moves>
                    {pokemon.moves[1].move.name.charAt(0).toUpperCase() +
                      pokemon.moves[1].move.name.slice(1)}
                  </Moves>
                  <Moves>
                    {pokemon.moves[2].move.name.charAt(0).toUpperCase() +
                      pokemon.moves[2].move.name.slice(1)}
                  </Moves>
                  <Moves>
                    {pokemon.moves[3].move.name.charAt(0).toUpperCase() +
                      pokemon.moves[3].move.name.slice(1)}
                  </Moves>
                </DetailMoves>
              </ContainerMoves>
            </PokemonMoves>
          </ContainerMovesAndMiniCard>

          <DivAvatarPokemon
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`${pokemon.name} Image`}
          />
        </SectionDetail>
      </DetailContainer>
    </>
  );
};

export default PokemonDetail;
