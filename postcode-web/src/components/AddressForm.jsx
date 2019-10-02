import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

function AddressForm({ getAddress }) {
  const [zipcode, setZipcode] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [suffix, setSuffix] = useState("");

  return (
    <Col xs={12} sm={6}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          getAddress(zipcode, houseNumber, suffix);
        }}
      >
        <Form.Group controlId="zipcode">
          <Form.Label>Postcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Verplicht"
            value={zipcode}
            onChange={e => setZipcode(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="houseNumber">
          <Form.Label>Huisnummer</Form.Label>
          <Form.Control
            type="number"
            placeholder="Verplicht"
            value={houseNumber}
            onChange={e => setHouseNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="suffix">
          <Form.Label>Toevoeging</Form.Label>
          <Form.Control
            type="text"
            placeholder="Optioneel"
            value={suffix}
            onChange={e => setSuffix(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Check!
      </Button>
      </Form>
    </Col>
  );
}

export default AddressForm;
