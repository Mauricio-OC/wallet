import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

test('Verificando os componentes da tela.', () => {
  renderWithRouterAndRedux(<App />);
  const testLo = screen.getByRole('button', {
    name: /entrar/i,
  });
  const email = screen.getByRole('textbox');
  const senha = screen.getByTestId('password-input');

  expect(testLo).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(senha).toBeInTheDocument();
});

test('Verifica se o botão login valida.', () => {
  const { history } = renderWithRouterAndRedux(<App />);
  const loginB = screen.getByRole('button', {
    name: /entrar/i,
  });
  const email = screen.getByRole('textbox');
  const senha = screen.getByTestId('password-input');

  expect(loginB).toBeDisabled();

  userEvent.type(email, 'user');
  userEvent.type(senha, '12345');
  expect(loginB).toBeDisabled();

  userEvent.type(email, 'user@gmail.com');
  userEvent.type(senha, '123456');
  expect(loginB).toBeEnabled();
  userEvent.click(loginB);
  const { pathname } = history.location;
  expect(pathname).toBe('/carteira');
});

test('Verifica rota.', () => {
  const { history } = renderWithRouterAndRedux(<App />);
  const { pathname } = history.location;

  expect(pathname).toBe('/');
});
