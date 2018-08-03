import { createStore, applyMiddleware, compose } from 'redux';
import  rootReducer from './reducers';

function _applyMiddleware() {

    // массив доп инструментов
  const middleware = [

  ];

  return applyMiddleware(...middleware); // возврат развернутого массива
};



export  default function configureStore(initialState) {
    const store = compose(
        _applyMiddleware()
     )(createStore)(rootReducer, initialState);

    return store;
}