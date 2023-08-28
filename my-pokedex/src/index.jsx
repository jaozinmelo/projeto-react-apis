import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./GlobalStyles.styled";
import { PokemonProvider } from "./Contexts/PokemonContext";
import CardFunctionsProvider from "./Contexts/CardFunctionsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CardFunctionsProvider>
    <PokemonProvider>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </PokemonProvider>
  </CardFunctionsProvider>
);
