import React from 'react';
import { Header } from './components/index';
import { Modal } from './components/modal/index';
import {TopAlert} from './components/top-alert/index'
import { DevTools } from './utils/index';
import routes from './routes';

const Main = () => (
    <main>
        {routes}
    </main>
);

export default class App extends React.Component {
         render(){
         return(
             <div className= 'container-fluid'>
                 <Modal/>
                 <TopAlert/>
                 <Header/>
                 <Main/>
                 { !process.env.production ? <DevTools/> : null}
             </div>
         );
     }
};