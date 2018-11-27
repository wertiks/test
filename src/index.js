import React from 'react';
import ReactDom from 'react-dom';
import { Provider }  from 'react-redux'; // позволяет связывать сторе со всеми элементами
import { Router,  browserHistory } from 'react-router';
import configureStore from "./store";
import { createHashHistory } from 'history';
import App from "./app";

export const store = configureStore(); // создание стора
// const history = syncHistoryWithStore( browserHistory, store ); // синхронизируется стор с историей и находить по навигации
const history = createHashHistory(store);

ReactDom.render((
    <Provider store={ store }>
       <Router history={ history }>
              <App/>
        </Router>
    </Provider>
    ),
    document.querySelector('#app')
);
