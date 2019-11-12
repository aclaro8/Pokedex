import React from "react";
import axios from 'axios';

import {
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Modal
} from "reactstrap";

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            idPokemon: "",
            nombrePokemon: "",
            Pokedex: [],
            Pokemon: ""
        };
    }

    componentDidMount() {
        this.fetchPokemon();
    }
    fetchPokemon() {
        axios.request({
            url: 'https://pokeapi.co/api/v2/pokemon/' + 2,
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

    handleInputChange = (user) => {
        const { value, name } = user.target;
        this.setState({
          [name]: value
        });
      }
    render() {
        return (
            <>
            
                <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
                {/* Page content */}
                <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <FormGroup className="mb-0">
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend" toggle={() => this.toggleModal("exampleModal")}>
                                <InputGroupText >
                                    <i className="fas fa-search" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Search"
                                type="text"
                                name="Pokemon"
                                value={this.state.Pokemon}
                                onChange={this.handleInputChange} />
                        </InputGroup>
                    </FormGroup>
                </Form>
            </>
        );
    }
}

export default Pokedex;
