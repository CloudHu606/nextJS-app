import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  nav: 'home',
};

export const actionTypes = {
  SETNAV: 'SETNAV',
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SETNAV:
      return Object.assign({}, state, { nav: action.payload });

    default:
      return state;
  }
};

export const setNav = payload => dispatch =>
  dispatch({ type: actionTypes.SETNAV, payload });

export function initializeStore(initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
