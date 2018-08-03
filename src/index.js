import React from 'react';
import ReactDom from 'react-dom';
import { Provider }  from 'react-redux'; // позволяет связывать сторе со всеми элементами
import { Router,  browserHistory } from 'react-router';
import { syncHistoryWithStore }  from 'react-router-redux';
import PropTypes from 'prop-types';
import configureStore from "./store";
import routes from './routes';
import { createHashHistory } from 'history';

const store = configureStore(); // создание стора
// const history = syncHistoryWithStore( browserHistory, store ); // синхронизируется стор с историей и находить по навигации
const history = createHashHistory(store);


ReactDom.render((
    <Provider store={ store }>
       <Router history={ history }>
            { routes }
        </Router>
    </Provider>
    ),
    document.querySelector('#app')
);
