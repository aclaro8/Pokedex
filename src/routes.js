import Pokedex from "./components/views/Pokedex.jsx"
import PokemonList from "./components/views/PokemonList.jsx"

var routes = [
  {
    path: "/pokedex",
    name: "Pokédex",
    icon: "ni ni-mobile-button text-primary",
    component: Pokedex,
    layout: "/auth"
  },
  {
    path: "/pokemonList",
    name: "Pokemon List",
    icon: "ni ni-list-67 text-yellow",
    component: PokemonList,
    layout: "/auth"
  }
];
export default routes;
