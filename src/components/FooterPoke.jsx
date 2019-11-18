import React from "react";

// reactstrap components
import {Container, Row, Col } from "reactstrap";

class FooterPoke extends React.Component {
  render() {
    return (
      <>
        <footer className="py-5">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="6">
                <div className="copyright text-center text-xl-left text-muted">
                  © 2019{" "}
                  <a
                    className="font-weight-bold ml-1"
                    href="https://github.com/aclaro8/Pokedex"
                    target="_blank"
                  >
                    Creative by Andrea Claro
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default FooterPoke;
