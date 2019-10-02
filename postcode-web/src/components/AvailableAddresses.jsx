import React from "react";
import { Col, Spinner } from "react-bootstrap";

function AvailableAddresses({ loading, error, allAddresses }) {
  return (
    <Col xs={12} style={{ marginTop: "2em" }}>
      {loading &&
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      }
      {error &&
        <p>{error}</p>}
      {(!loading && allAddresses) &&
        <>
          <h5>Beschikbare adressen:</h5>
          <p>Omdat dit een schoolopdracht is, heb ik maar {allAddresses.length} adressen in de database staan.</p>
          <ul>
            {allAddresses && allAddresses.map(({ postcode, huisnummer, toevoeging }, key) =>
              <li key={key}>
                {`${postcode} ${huisnummer}${toevoeging ? toevoeging : ``}`}
              </li>
            )}
          </ul>
        </>
      }
    </Col>
  );
}

export default AvailableAddresses;
