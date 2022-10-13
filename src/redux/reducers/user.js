// Esse reducer será responsável por tratar as informações da pessoa usuária
import { PASSWORD, EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case EMAIL:
    return {
      ...state,
      email: payload,
    };
  case PASSWORD:
    return {
      ...state, password: payload,
    };
  default:
    return state;
  }
};

export default user;
