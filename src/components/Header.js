import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  somar = () => {
    const { expenses } = this.props;
    const desp = expenses;
    let cal = 0;
    desp.forEach((coin) => {
      const { value } = coin;
      const currencies = coin.currency;
      const { ask } = coin.exchangeRates[currencies];
      cal += Number(value * ask);
    });
    return Number(cal).toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          {
            this.somar()
          }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default connect(mapStateToProps)(Header);
