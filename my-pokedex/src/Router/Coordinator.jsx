export const goToPokelistPage = (navigate) => {
    navigate("/");
  };
  
  export const goToPokedexPage = (navigate) => {
    navigate("/pokedex");
  };
  
  export const goToDetailsPage = (navigate, name, types, id) => {
    navigate(`/detailPage/${name}/${types}/${id}`);
  };
