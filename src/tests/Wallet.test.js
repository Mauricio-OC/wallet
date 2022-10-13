import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

beforeEach(() => {
  renderWithRouterAndRedux(<Wallet />);
});

test('Verificando os elemntos existentes na tela .', () => {
  const valor = screen.getByTestId('value-input');
  const descricao = screen.getByTestId('description-input');
  const botaoAdd = screen.getByRole('button', { name: /adicionar despesa/i });

  expect(valor).toBeInTheDocument();
  expect(descricao).toBeInTheDocument();
  expect(botaoAdd).toBeInTheDocument();
});

test('Verifica se limpa ao salvar as desp', () => {
  const value = screen.getByTestId('value-input');
  const description = screen.getByTestId('description-input');
  const buttonAdd = screen.getByRole('button', { name: /adicionar despesa/i });

  userEvent.type(value, '10');
  userEvent.type(description, 'despesa');
  userEvent.click(buttonAdd);

  expect(value).toHaveTextContent('');
  expect(description).toHaveTextContent('');
});
