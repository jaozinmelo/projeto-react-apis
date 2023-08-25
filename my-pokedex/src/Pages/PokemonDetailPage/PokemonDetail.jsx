import React from 'react'
import { BaseStatusDiv, DetailContainer, PokemonImagesDiv, SectionDetail } from './styles'

const PokemonDetail = ({pokemon}) => {
  return (
    <DetailContainer>
      <h1>Detalhes</h1>
      <SectionDetail>
        <PokemonImagesDiv>
          <div></div>
          <div></div>
        </PokemonImagesDiv>
        <BaseStatusDiv></BaseStatusDiv>
        <div></div>
        <div></div>
      </SectionDetail>
    </DetailContainer>
  )
}

export default PokemonDetail