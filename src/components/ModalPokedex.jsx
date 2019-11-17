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
    Pokemon: []
  };
  props = {
    description: "holaaaaaaaaaaa"
  }

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
    this.fetchPokemon();
  }
  fetchPokemon() {
    axios.request({
      url: 'https://pokeapi.co/api/v2/pokemon/25',
      method: 'get'
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          Pokemon: res.data
        });
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
              Pokédex
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
            {/* Contenido */}
            {/* {this.state.Pokemon.map(pokemon => {
                      return ( */}
                <div className="pl-lg-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src=""
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pt-0 pt-md-8">
                    <Col lg="12">
                      <FormGroup>
                        <label>Descripción</label>
                        <Input
                          className="form-control-Label"
                          placeholder="Descripción"
                          rows="4"
                          defaultValue="Pokemón que tiene......"
                          type="textarea"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label>Nombre</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Nombre"
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleInputChange}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label>Altura</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Altura"
                          type="text"
                          name="altura"
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label>Peso</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Peso"
                          type="text"
                          name="peso"
                          value={this.state.pinEntidad}
                          onChange={this.handleInputChange}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label>Tipo</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Password"
                          type="password"
                          name="password"
                          value="*************"
                          onChange={this.handleInputChange}
                          disabled
                        />
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
                                    <h2 className="mb-0">Puntos de Base</h2>
                                  </div>
                                </Row>
                              </CardHeader>
                              <CardBody>
                                {/* Chart */}
                                <div className="chart">
                                  <Bar
                                    data={chartExample2.data}
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