// LoginForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './Loginform';

test('renders the login form', () => {
  render(<LoginForm />);
  const loginHeader = screen.getByText(/Login/i);
  expect(loginHeader).toBeInTheDocument();
});

test('handles form submission', () => {
  render(<LoginForm />);
  

  const passwordInput = screen.getByLabelText(/Password/i);
  const submitButton = screen.getByText(/Login/i);

  
  fireEvent.change(emailInput, { target: { value: 'ram@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

 
  fireEvent.click(submitButton);


  expect(console.log).toHaveBeenCalledWith('Login form submitted:', {
    email: 'ram@example.com',
    password: 'password123',
  });
});
