import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("Renders Checkout Form component without crashing", () => {
  render(<CheckoutForm />);
});

test("All form fields working and success message shows up.", async () => {
  render(<CheckoutForm />);

  const firstName = screen.getByTestId(/firstName/i);
  fireEvent.change(firstName, { target: { value: "Test" } });
  expect(firstName).toHaveValue("Test");

  const lastName = screen.getByTestId(/lastName/i);
  fireEvent.change(lastName, { target: { value: "Test" } });
  expect(lastName).toHaveValue("Test");

  const address = screen.getByTestId(/address/i);
  fireEvent.change(address, { target: { value: "Test" } });
  expect(address).toHaveValue("Test");

  const city = screen.getByTestId(/city/i);
  fireEvent.change(city, { target: { value: "Test" } });
  expect(city).toHaveValue("Test");

  const state = screen.getByTestId(/state/i);
  fireEvent.change(state, { target: { value: "Test" } });
  expect(state).toHaveValue("Test");

  const zip = screen.getByTestId(/zip/i);
  fireEvent.change(zip, { target: { value: "12345" } });
  expect(zip).toHaveValue("12345");

  const button = screen.getByTestId(/button/i);
  fireEvent.click(button);

  const message = screen.getByTestId(/successMessage/i);
  expect(message).toBeInTheDocument();
});
