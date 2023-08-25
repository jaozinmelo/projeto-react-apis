import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CardFunctionsContext = createContext();

export const CardFunctionsProvider = ({ children }) => {
  const [pokemonCart, setPokemonCart] = useState([]);
  const [name, setName] = useState([]);
  const [pokemonAmount, setPokemonAmout] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  //PAGINAÇÃO
  const pokemonsPerPage = 10;
  const getCurrentPokemons = () => {
    const indexLastPokemon = currentPage * pokemonsPerPage;
    const indexFirstPokemon = indexLastPokemon - pokemonsPerPage;
    return pokemonCart.slice(indexFirstPokemon, indexLastPokemon);
  };
  const nextPage = () => {
    setCurrentPage((prevPage) => +1);
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => -1);
  };
  useEffect(() => {
    if (pokemonCart) {
      const amount = pokemonCart.reduce(
        (acumulator, currentItem) => acumulator + 1,
        0
      );
      setPokemonAmout(amount);
    }
  }, [pokemonCart]);

  //FUNÇÕES DO CARD
  const addToPokemon = (pokemon, name) => {
    const checkPokemon = pokemonCart.find((pokemon) => pokemon.name === name);
    //pokemoncart.filter((item) => item.id !== id)

    if (checkPokemon) {
      // toast.error("Esse pokemon já foi capturado !");
      // return;
      alert(`esse pokemon já foi adicionado`);
    } else {
      setPokemonCart([...pokemonCart, { ...pokemon, name, amount: 1 }]);
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
        pokemonAmount,
        searchByNamePokemon,
        addToPokemon,
        removePokemon,
        removeAllClearPokemon,
        pokemonsPerPage,
        getCurrentPokemons,
        nextPage,
        prevPage,
        name,
      }}
    >
      {children}
    </CardFunctionsContext.Provider>
  );
};

export default CardFunctionsProvider;
