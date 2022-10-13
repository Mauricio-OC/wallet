import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removerDespesa } from '../redux/actions';

class Table extends Component {
  handleRemove = (id) => {
    const { remover, expenses } = this.props;
    const filtrando = expenses.filter((coin) => coin.id !== id);
    remover(filtrando);
  };

  render() {
    const { expenses } = this.props;
    return (

      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((cashout) => {
            const { currency, id, method,
              tag, exchangeRates, value, description } = cashout;
            const exchangeValue = Number(exchangeRates[currency].ask);
            const currencyName = (exchangeRates[currency].name);
            const cambio = exchangeValue * value;
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ Number(value).toFixed(2) }</td>
                <td>{ currencyName }</td>
                <td>{ exchangeValue.toFixed(2) }</td>
                <td>{ cambio.toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleRemove(id) }
                  >
                    Excluir
                  </button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    );
  }
}

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remover: (expense) => dispatch(removerDespesa(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
