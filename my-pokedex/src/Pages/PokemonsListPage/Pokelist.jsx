import React, { useContext } from 'react'
import Header from '../../Components/Header/Header'
import Card from '../../Components/PokemonCard/Card'
import { PokemonContext } from '../../Contexts/PokemonContext'
import { Container } from './styles'

const Pokelist = () => {
  const {pokemons} = useContext(PokemonContext)
  // console.log(pokemons);
  return (
    <>
    <Header/>
    <Container>
    {pokemons.map((pokemon)=>{
     return <Card key={pokemon.id}
     pokemon={pokemon}/>
    })}
    </Container>
    </>
  )
}

export default Pokelist