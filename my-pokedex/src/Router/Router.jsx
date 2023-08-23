import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pokelist from "../Pages/PokemonsListPage/Pokelist";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetail from "../Pages/PokemonDetailPage/PokemonDetail";
import NotFoundPage from "../Pages/NotFoundPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokelist/>} />
        <Route path="/pokedex" element={<PokedexPage/>} />
        {/* <Route path="/pokemon-detail" element={<PokemonDetail/>} /> */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
