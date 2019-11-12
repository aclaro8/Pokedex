import Pokedex from "./components/views/Pokedex.jsx"
import PokemonList from "./components/views/PokemonList.jsx"

var routes = [
  {
    path: "/pokedex",
    name: "Pokédex",
    icon: "ni ni-spaceship text-primary",
    component: Pokedex,
    layout: "/auth"
  },
  {
    path: "/pokemonList",
    name: "Pokemon List",
    icon: "ni ni-calendar-grid-58 text-yellow",
    component: PokemonList,
    layout: "/auth"
  }
];
export default routes;
