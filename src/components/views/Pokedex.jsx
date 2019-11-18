import React from "react";
import axios from 'axios';
import ReactDOM from "react-dom";

import {
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Modal,
    Button
} from "reactstrap";

import ModalPokedex from "../ModalPokedex.jsx"
import { toggleModal } from "../ModalPokedex.jsx"

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            idPokemon: "",
            nombrePokemon: "",
            Pokedex: [],
            PokemonBuscado: "",
            EnableModal: false
        };
    }

    componentDidMount() {

    }

    handleInputChange = (data) => {
        const { value, name } = data.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        console.log(this.state.EnableModal);
        this.state.EnableModal = !this.state.EnableModal;
        console.log(this.state.PokemonBuscado);
        console.log(this.state.EnableModal);
        //window.location.reload(true);
        this.forceUpdate();
    }
    render() {
        let modalPokedex;
        if (this.state.EnableModal) {
            modalPokedex = <ModalPokedex PokemonBuscado={this.state.PokemonBuscado} EnableModal={this.state.EnableModal} />
        }
        return (
            <>
                {modalPokedex}
                <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
                {/* Page content */}
                <Form role="form" onSubmit={this.onSubmit}>
                    <FormGroup className="mb-3">
                        <InputGroup className="input-group-prepend">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fas fa-search" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Nombre o número"
                                type="text"
                                name="PokemonBuscado"
                                value={this.state.PokemonBuscado}
                                onChange={this.handleInputChange}
                                required />
                        </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                        <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={this
                                .onSubmit
                                .bind(this)}>
                            Buscar
                  </Button>
                    </div>
                </Form>
            </>
        );
    }
}

export default Pokedex;
