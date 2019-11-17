import React from "react";
import axios from 'axios';

import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";


//import HeaderPoke from "../HeaderIndex.jsx";

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      idPokemon: "",
      nombrePokemon: "",
      Pokedex: []
    };
  }

  componentDidMount() {
    this.fetchPokemon();
  }
  fetchPokemon() {
    axios.request({
      url: 'https://pokeapi.co/api/v2/pokedex/2',
      method: 'get'
    })
      .then(res => {
        console.log(res.data.pokemon_entries);
        this.setState({
          Pokedex: res.data.pokemon_entries
        });
      })
      .catch(err => {
        console.log("Error: " + err);
      })
  }
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Número</th>
                      <th scope="col">Nombre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.Pokedex.map(pokemon => {
                      return (
                        <tr key={pokemon.entry_number}>
                          <td>{pokemon.entry_number}</td>
                          <td>{pokemon.pokemon_species.name}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default PokemonList;
