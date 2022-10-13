// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_CONV':
    return { ...state,
      expenses: [...state.expenses, {
        id: action.payload.id,
        value: action.payload.value,
        description: action.payload.description,
        currency: action.payload.currency,
        method: action.payload.method,
        tag: action.payload.tag,
        exchangeRates: action.payload.exchangeRates,

      }] };
  case 'FETCH_CURRENCY':
    return { ...state, currencies: action.payload };

  case 'REMOVER_DESPESAS':
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
}

export default wallet;
