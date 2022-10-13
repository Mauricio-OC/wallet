import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail, savePassword, ENDPOINT2 } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, this.updateIsDisabled);
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { history, dispatch } = this.props;
    dispatch(saveEmail(email));
    dispatch(savePassword(password));
    dispatch(ENDPOINT2());
    history.push('/carteira');
  };

  updateIsDisabled = () => {
    const { email, password } = this.state;
    const minSeisLetras = 6;
    const passwordMin = password.length < minSeisLetras;
    const emailIsEmail = email.match(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    );
    this.setState({
      isDisabled: !(emailIsEmail && !passwordMin),
    });
  };

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <form>
        <h1>Trybewallet</h1>
        <p>
          Email
        </p>
        <input
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ email }
          name="email"
        />
        <p>
          Senha
        </p>
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
          name="password"
        />
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Login);
