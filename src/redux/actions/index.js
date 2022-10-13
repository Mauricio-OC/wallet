// Coloque aqui suas actions
const INITIAL_FECTH = 'INITIAL_FECTH';
const startFetch = () => ({ type: INITIAL_FECTH });
const FETCH_CURRENCY = 'FETCH_CURRENCY';

export const EMAIL = 'EMAIL';
export const saveEmail = (email) => ({
  type: EMAIL,
  payload: email,
});

export const CASH = 'CASH';
export const saveCash = (cash) => ({
  type: CASH,
  payload: cash,
});
export const responseAPI = (payload) => ({
  type: FETCH_CURRENCY,
  payload,
});

export const PASSWORD = 'PASSWORD';
export const savePassword = (password) => ({
  type: PASSWORD,
  payload: password,
});
export const ADD_CONV = 'ADD_CONV';
export const adDadosConv = (payload) => ({ type: ADD_CONV, payload });
export const ENDPOINT = (state) => async (dispatch) => {
  const resquest = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await resquest.json();
  const data2 = { ...state, exchangeRates: data };
  dispatch(adDadosConv(data2));
};
export const ENDPOINT2 = () => async (dispatch) => {
  dispatch(startFetch());
  const resquest = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await resquest.json();
  console.log(data);
  const key = 'USDT';
  delete data[key];
  dispatch(responseAPI(Object.keys(data)));
};
export const REMOVER_DESPESAS = 'REMOVER_DESPESAS';
export const removerDespesa = (payloads) => ({
  type: REMOVER_DESPESAS,
  payload: payloads,
});
