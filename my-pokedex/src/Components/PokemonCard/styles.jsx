import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 27.5rem;
  background-color: gray;
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
