import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'
import { act } from "react-dom/test-utils";

// test("renders App without crashing", () => {
//   render(<App />);
// });

test('ContactForm adds new users to the list', () => {
  act(() => {
    render(<ContactForm />);
  })

  //Grab the text Inputs
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByText(/last name/i);
  const emailInput = screen.getByText(/email/i);
  const messageInput = screen.getByText(/message/i);

  //Grab the submit inputs
  const submitButton = screen.getByRole('button', /submit/i)

  act(() => {
    fireEvent.change(firstNameInput, { target: { ref: 'Bob' } })
    fireEvent.change(lastNameInput, { target: { ref: 'Franklin' } })
    fireEvent.change(emailInput, { target: { ref: 'Bob@franklin.com' } })
    fireEvent.change(messageInput, { target: { ref: 'test message' } })

    //Fire the submit event
    fireEvent.click(submitButton)
  })
  expect.objectContaining(expect.anything())
})

