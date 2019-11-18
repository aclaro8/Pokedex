import React from "react";
import axios from 'axios';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
  Container
} from "reactstrap";
import { Line, Bar } from "react-chartjs-2";
import Chart from "chart.js";
import {
  chartOptions,
  parseOptions,
  chartExample2
} from "./charts.jsx";
class Modalpokedex extends React.Component {
  state = {
    exampleModal: true,
    chartExample1Data: "data1",
    img: "",
    name: "",
    number: "",
    description: "",
    category: "",
    type: "",
    height: "",
    weight: "",
    data: {}
  };
  props = {
    PokemonBuscado: "",
    EnableModal: false
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  };

  componentDidMount() {
    this.state.exampleModal=this.props.EnableModal;
    this.fetchPokemon();
    this.fetchDescription();
  }

  fetchPokemon() {
    axios.request({
      url: 'https://pokeapi.co/api/v2/pokemon/' + this.props.PokemonBuscado,
      method: 'get'
    })
      .then(res => {
        //console.log(res.data.stats[5].base_stat);
        this.setState({
          Pokemon: res.data,
          img: res.data.sprites.front_default,
          name: res.data.name,
          number: res.data.id,
          type: res.data.types[0].type.name,
          height: res.data.height,
          weight: res.data.weight,
          data: {
            labels: ["PS", "Ataque", "Defensa", "Ataque Especial", "Defensa Especial", "Velocidad"],
            datasets: [
              {
                label: "Puntos Base",
                data: [res.data.stats[5].base_stat,
                res.data.stats[4].base_stat,
                res.data.stats[3].base_stat,
                res.data.stats[2].base_stat,
                res.data.stats[1].base_stat,
                res.data.stats[0].base_stat]
              }
            ]
          }
        });
      })
      .catch(err => {
        console.log("Error: " + err);
      })
  }

  fetchDescription() {
    axios.request({
      url: 'https://pokeapi.co/api/v2/pokemon-species/' + this.props.PokemonBuscado,
      method: 'get'
    })
      .then(res => {
        //console.log(res.data.flavor_text_entries[3].language.name);
        if (res.data.flavor_text_entries[3].language.name == "es") {
          this.setState({
            description: res.data.flavor_text_entries[3].flavor_text,
          });
        } else {
          this.setState({
            description: res.data.flavor_text_entries[4].flavor_text,
          });
        }
        if (res.data.genera[3].language.name == "es") {
          this.setState({
            category: res.data.genera[3].genus
          });
        } else {
          this.setState({
            category: res.data.genera[4].genus
          });
        }
      })
      .catch(err => {
        console.log("Error: " + err);
      })
  }
  render() {
    return (
      <>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered modal-danger modal-lg"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-header">
            <h1 className="modal-title" id="exampleModalLabel">
              <Col>
                <img
                  alt="..."
                  className="img-fluid"
                  width="304" height="236"
                  src={require("../assets/img/pokedex-brand.png")}
                />
              </Col>
            </h1>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <h1>{this.state.name} No. {this.state.number}</h1>
                    <div>{this.state.description}</div>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <div className="card-profile-image">
                      <a href="" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={this.state.img}
                        />
                      </a>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              {/* Contenido */}
              {/* {this.state.Pokemon.map(pokemon => {
                      return ( */}
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <h1>Categoría</h1>
                    <div>{this.state.category}</div>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <h1>Tipo</h1>
                    <div>{this.state.type}</div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <h1>Altura</h1>
                    <label>0,{this.state.height} m</label>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <h1>Peso</h1>
                    <label>{this.state.weight} kg</label>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Container className="mt--10" fluid>
                    <Row>
                      <Col xl="12">
                        <Card className="shadow">
                          <CardHeader className="bg-transparent">
                            <Row className="align-items-center">
                              <div className="col">
                                <h2 className="mb-0">Puntos Base</h2>
                              </div>
                            </Row>
                          </CardHeader>
                          <CardBody>
                            {/* Chart */}
                            <div className="chart">
                              <Bar
                                data={this.state.data}
                                options={chartExample2.options}
                              />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </div>
            {/* )
            })} */}
            {/* Fin de contenido */}
          </div>

          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              Close
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default Modalpokedex;