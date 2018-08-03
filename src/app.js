import React from 'react';

export default class App extends React.Component {

    // для хранения роута компонента. здесь индексный роут
    static path = '/';
/*    constructor(props){
      super(props);
      this.path = '/';
    };
*/


    render(){
        return(
            <h1>Hello world</h1>
        );
    }
}
