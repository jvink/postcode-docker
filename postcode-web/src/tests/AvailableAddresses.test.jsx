import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AvailableAddresses from "../components/AvailableAddresses";

test(`loads available addresses and displays "3322AA 142"`, () => {
  const allAddresses = [
    {
      huisnummer: 142,
      plaats: "Papendrecht",
      postcode: "3322AA",
      straat: "Kerkstraat",
      toevoeging: null
    }
  ];
  const { getByText } = render(
    <AvailableAddresses
      loading={false}
      error={undefined}
      allAddresses={allAddresses}
    />
  );

  expect(getByText(/3322AA 142/)).toBeInTheDocument();
});

test(`gets error and displays "Er is een fout opgetreden."`, () => {
  const { getByText } = render(
    <AvailableAddresses loading={false} error={true} allAddresses={undefined} />
  );

  expect(getByText(/Er is een fout opgetreden./)).toBeInTheDocument();
});

test(`loads and displays "Loading..."`, () => {
  const { getByText } = render(
    <AvailableAddresses
      loading={true}
      error={undefined}
      allAddresses={undefined}
    />
  );

  expect(getByText(/Loading.../)).toBeInTheDocument();
});
