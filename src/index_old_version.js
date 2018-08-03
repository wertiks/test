// пример кода с jquery. подключение стилей.
// var $ = require('jquery');
// var str = require('./constants');
// require('./less');
//
// var App_test = function() {
//     console.log(str + 'test');
//     $('body').html(str + '<div class="b-test"> <h3 class="b-test__heading"> HELLO WORLD <div> </div>  </h3></div>  ');
// };
//
// var app = new App_test();

require('./less');
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import NewComponent from './new';


class App_test extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text: ''
        };
    };

    btnClick(event){
        console.log('Нажали кнопку', event);
    };

    inputOnchange(event){
        const text = event.target.value;
        this.setState ({text});
    };

    render(){
        return(
            <div>
                <h1 className = "b-test"> {this.props.h1Text} </h1>
                <h3> {this.props.h3Text}</h3>
                <button style={ {backgroundColor: 'blue'}} onClick={this.btnClick}>{ this.props.btnText }</button>
                <input type="TEXT" value={this.state.text} onChange={ this.inputOnchange.bind(this)}></input>
                <NewComponent h1Text= "Text_NewComp"/>
            </div>

        );
    };
}

App_test.defaultProps = {
    btnText: "textBtn",
    h3Text: 'text3',
    h1Text: 'text1'
};

App_test.propTypes = {
    btnText: PropTypes.string.isRequired,
    h3Text: PropTypes.string.isRequired,
    h1Text: PropTypes.string.isRequired
};


ReactDom.render(
    <App_test btnText = "click on me!" h3Text = "текст для h3"/>,
    document.getElementById('app')
);
