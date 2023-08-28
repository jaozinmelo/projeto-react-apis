import { createContext, useEffect, useState } from "react";

export const CardFunctionsContext = createContext();

export const CardFunctionsProvider = ({ children }) => {
  const [pokemonCart, setPokemonCart] = useState([]);
  const [name, setName] = useState([]);

  //FUNÇÕES DO CARD

  const addToPokemon = (pokemon, name) => {
    const checkPokemon = pokemonCart.find((pokemon) => pokemon.name === name);
    //pokemoncart.filter((item) => item.id !== id)

    if (checkPokemon) {
      // toast.error("Esse pokemon já foi capturado !");
      // return;
      alert(`esse pokemon já foi adicionado`);
    } else {
      setPokemonCart([...pokemonCart, { ...pokemon, name }]);

      alert(`O Pokemon ${name} foi adicionado à sua pokedex!`);
    }
  };

  const removePokemon = (id) => {
    const pokemon = pokemonCart.filter((pokemon) => pokemon.id !== id);
    setPokemonCart(pokemon);
  };

  const removeAllClearPokemon = () => {
    setPokemonCart([]);
  };

  const searchByNamePokemon = (name) => {
    const pokemonName = pokemonCart.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    setName(pokemonName);
  };

  //FUNÇÕES POKEDEX
  useEffect(() => {
    const pokeball = localStorage.getItem("pokemon");
    if (pokeball) {
      setPokemonCart(JSON.parse(pokeball));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pokemon", JSON.stringify(pokemonCart));
  }, [pokemonCart]);

  return (
    <CardFunctionsContext.Provider
      value={{
        pokemonCart,
        searchByNamePokemon,
        addToPokemon,
        removePokemon,
        removeAllClearPokemon,
        name,
      }}
    >
      {children}
    </CardFunctionsContext.Provider>
  );
};

export default CardFunctionsProvider;
