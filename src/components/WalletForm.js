import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ENDPOINT } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { btn } = this.props;
    btn(this.state);
    this.setState((e) => ({
      id: e.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <form>
        <input
          name="value"
          value={ value }
          data-testid="value-input"
          onChange={ this.handleChange }
          type="number"
          placeholder="Valor"
        />
        <input
          name="description"
          value={ description }
          data-testid="description-input"
          type="text"
          placeholder="Descrição"
          onChange={ this.handleChange }
        />
        <select
          data-testid="currency-input"
          name="currency"
          value={ currency }
          id="currency"
          onChange={ this.handleChange }
        >
          {currencies.map((coin) => (
            <option name="moedas" key={ coin } value={ coin }>{ coin }</option>
          ))}
        </select>
        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option name="pagamento" value="Dinheiro">Dinheiro</option>
          <option name="pagamento" value="Cartão de crédito">Cartão de crédito</option>
          <option name="pagamento" value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option name="entreterimento" value="Alimentação">Alimentação</option>
          <option name="entreterimento" value="Lazer">Lazer</option>
          <option name="entreterimento" value="Trabalho">Trabalho</option>
          <option name="entreterimento" value="Transporte">Transporte</option>
          <option name="entreterimento" value="Saúde">Saúde</option>
        </select>
        <button
          data-testid="submit-btn"
          type="button"
          onClick={ this.handleClick }

        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  btn: (payload) => dispatch(ENDPOINT(payload)),
});

WalletForm.propTypes = {
  btn: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
