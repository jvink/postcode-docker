import React from "react";
import { Container, Col, Row, Spinner } from "react-bootstrap";

function AddressResult({ huisnummer, plaats, postcode, straat, toevoeging, loading, error }) {
  return (
    <Col xs={12} sm={6}>
      {loading &&
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>}
      {error &&
        <p>Er is een fout opgetreden.</p>}
      {(!loading && straat) &&
        <>
          <Container>
            <Row>
              <Col xs={12}>
                <h4>Resultaat</h4>
              </Col>
            </Row>
          </Container>
          <Container
            style={{
              backgroundColor: "#eff0f1",
              fontFamily:
                "Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,sans-serif",
              fontSize: "13px",
              padding: "12px"
            }}
          >
            <Row>
              <Col xs={6}>
                <p>
                  <b>Huisnummer:</b>
                </p>
              </Col>
              <Col xs={6}>
                <p>
                  {huisnummer} {toevoeging}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <p>
                  <b>Postcode:</b>
                </p>
              </Col>
              <Col xs={6}>
                <p>{postcode}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <p>
                  <b>Straat:</b>
                </p>
              </Col>
              <Col xs={6}>
                <p>{straat}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <p>
                  <b>Plaats:</b>
                </p>
              </Col>
              <Col xs={6}>
                <p>{plaats}</p>
              </Col>
            </Row>
          </Container>
        </>
      }
    </Col>
  );
}

export default AddressResult;
