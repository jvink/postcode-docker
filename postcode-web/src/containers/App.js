import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Container, Jumbotron, Row } from "react-bootstrap";

import { getAddress, getAllAddresses } from '../actions';
import AddressForm from '../components/AddressForm';
import AddressResult from '../components/AddressResult';
import AvailableAddresses from '../components/AvailableAddresses';

function App({ loadingFoundAddress, errorFoundAddress, foundAddress, loadingAllAddresses, errorAllAddresses, allAddresses, getAddress, getAllAddresses }) {
  useEffect(() => {
    getAllAddresses();
  }, [getAllAddresses]);

  return (
    <>
      <Jumbotron>
        <h1>Postcode API</h1>
        <p>
          Dit is een school opdracht. Met deze opdracht wil ik een multi-layered applicatie doormiddel van Docker laten draaien. Het uiteindelijke doel voor mij is om zowel de database als de back-end in NodeJS en de Front-End in ReactJS te kunnen opzetten en starten met 1 commando.
        </p>
        <p>IN PROGRESS: Key opvragen voor Postcode API requests.</p>
        <p>
          <Button variant="primary">API key ophalen</Button>
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <AddressForm getAddress={(zipcode, houseNumber, suffix) => getAddress(zipcode, houseNumber, suffix)} />
          <AddressResult {...foundAddress} loading={loadingFoundAddress} error={errorFoundAddress} />
        </Row>
        <AvailableAddresses loading={loadingAllAddresses} error={errorAllAddresses} allAddresses={allAddresses} />
      </Container>
    </>
  );
};

function mapStateToProps({ loadingFoundAddress, errorFoundAddress, foundAddress, loadingAllAddresses, errorAllAddresses, allAddresses, }) {
  return {
    loadingFoundAddress,
    errorFoundAddress,
    foundAddress,
    loadingAllAddresses,
    errorAllAddresses,
    allAddresses,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAddress,
    getAllAddresses,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);