import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddressResult from "../components/AddressResult";

test(`loads available addresses and displays "Kerkstraat"`, () => {
  const { getByText } = render(
    <AddressResult
      loading={false}
      error={undefined}
      huisnummer={142}
      plaats={"Papendrecht"}
      postcode={"3322AA"}
      straat={"Kerkstraat"}
      toevoeging={null}
    />
  );

  expect(getByText(/Kerkstraat/)).toBeInTheDocument();
});

test(`gets error and displays "Er is een fout opgetreden."`, () => {
  const { getByText } = render(
    <AddressResult loading={false} error={true} allAddresses={undefined} />
  );

  expect(getByText(/Er is een fout opgetreden./)).toBeInTheDocument();
});

test(`loads and displays "Loading..."`, () => {
  const { getByText } = render(
    <AddressResult
      loading={true}
      error={undefined}
    />
  );

  expect(getByText(/Loading.../)).toBeInTheDocument();
});
