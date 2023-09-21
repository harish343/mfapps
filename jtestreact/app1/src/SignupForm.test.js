// SignupForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from './SignupForm';

test('renders the signup form', () => {
  render(<SignupForm />);
  const signupHeader = screen.getByText(/Sign Up/i);
  expect(signupHeader).toBeInTheDocument();
});

test('handles form submission', () => {
  render(<SignupForm />);
  
  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const passwordInput = screen.getByLabelText(/Password/i);
  const submitButton = screen.getByText(/Sign Up/i);

  // Simulate user input
  fireEvent.change(firstNameInput, { target: { value: 'Ram' } });
  fireEvent.change(lastNameInput, { target: { value: 'Rajput' } });
  fireEvent.change(emailInput, { target: { value: 'ram@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Simulate form submission
  fireEvent.click(submitButton);

  // Assert that the form data is logged
  expect(console.log).toHaveBeenCalledWith('Signup form submitted:', {
    firstName: 'ram',
    lastName: 'rajput',
    email: 'ram@example.com',
    password: 'password123',
  });
});
