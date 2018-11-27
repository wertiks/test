import React from 'react';
import Input from '../../components/ui/input/index';
import  { bindAll }  from 'lodash';
import is from 'is_js';
import './styles.less';
import {connect} from "react-redux";
import {submitForm} from './actions';
import PropTypes from "prop-types";

class ContactPage extends React.Component {

    static path = '/contact';

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);

        this.state ={
          name:'',
          email:'',
          errorName: '',
          errorEmail:''
        };


    bindAll(this,['submit', 'changeEmail', 'changeName', '_isFormValid', '_isNameValid', '_isEmailValid']);
    }

    changeName(name){
      this.setState({name});
    }

    changeEmail(email){
        this.setState({email});
    }

    submit(event){
       event.preventDefault();

       if (!this._isFormValid()) return;

       this.props.dispatch(submitForm(this.state.name, this.state.email));
        this.setState({
            name: '',
            email: ''
        });
    }

    _isNameValid(name){
        let isValid = true;
        let errorName = '';

        if (name === '') {
            errorName = 'Поле не может быть пустым';
            isValid = false;
        } else {
            if (name.length < 3){
                errorName = 'Длина поля должна быть более 2 символов';
                isValid = false;
            }
        }

         this.setState({errorName});
        return isValid;
    }

    _isEmailValid(email){
    let isValid = true;
    let errorEmail = '';


    if (!is.email(email)){
            errorEmail = 'Поле должно быть email';
            isValid = false;
        }

    if (email.length < 3){
        errorEmail = 'Длина поля должна быть более 2 символов';
        isValid = false;
    }

        if (email === '') {
            errorEmail = 'Поле не может быть пустым';
            isValid = false;
        }


    this.setState({errorEmail: errorEmail});
    return isValid;
    }

    _isFormValid(){
        return (this._isNameValid(this.state.name) && this._isEmailValid(this.state.email));
    }



    render(){
        return(
            <div className='row'>
                <div className='col-xs-6'>
                    <form className='b-contact'>
                        <div className='alert alert-danger'> Контакты </div>
                        <h4>Имя: </h4>
                        <Input
                            onChange={this.changeName}
                            value={this.state.name}
                            error = {this.state.errorName}
                        />
                        <h4>Email: </h4>
                        <Input
                            onChange={this.changeEmail}
                            value={this.state.email}
                            error = {this.state.errorEmail}
                        />
                        <button type='submit' className='btn btn-primary' onClick={this.submit}> Сохранить</button>
                    </form>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
    };
}

export default connect(mapStateToProps)(ContactPage); // homepage соединяем со store
