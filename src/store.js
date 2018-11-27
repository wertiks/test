import { createStore, applyMiddleware, compose } from 'redux';
import  rootReducer from './reducers';
import  { DevTools } from './utils/index';
import thunk from 'redux-thunk';

function _getMiddleware() {

    // массив доп инструментов
  const middleware = [
    thunk
  ];

  return applyMiddleware(...middleware); // возврат развернутого массива
};



export  default function configureStore(initialState) {
    const store = compose(
        _getMiddleware(),
        DevTools.instrument()
     )(createStore)(rootReducer, initialState);

    return store;
}