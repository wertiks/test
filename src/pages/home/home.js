import React from 'react';
import './styles.less';
import  { bindAll }  from 'lodash';
import Input from "../../components/ui/input";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    addTodo,
    likeTodo,
    deleteTodo,
    getTodos,
} from './actions';
import classNames from 'classnames';
import {LS} from '../../utils/index';
import {delay} from '../../utils/index';
import Loader from '../../components/ui/loader';

class HomePage extends React.Component {

    static path = '/home';
    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);

        this.state = {
            todoName: '',
        };

        bindAll(this, ['renderTodos', 'inputOnChange', 'addTodo', 'inputOnChange2' ]);
        this.props.dispatch(getTodos());
    }

    componentWillMount(){
    }

    inputOnChange(event){
        const todoName = event.target.value;
        this.setState({ todoName });
    }

     inputOnChange2(value){
         this.setState({ todoName: value });
     }

    likeTodo(todo){
        this.props.dispatch(likeTodo(todo));
    }

    deleteTodo(todo){
        this.props.dispatch(deleteTodo(todo));
    }


    addTodo(){
        this.props.dispatch(addTodo(this.props.home.todos, this.state.todoName)); // вся логика теперь делается в action creator
        this.setState({todoName: ''});
    }

    renderTodos(item,idx){

        const todoClasses = classNames(
            'b-home-todo',
           {'is-liked': item.liked}
        );

        const btnClasses = classNames (
            'btn',
            {'active': item.liked}
        );

         return(
             <li key={idx}>
                 <span className={todoClasses}> {item.name} </span>
                 <button className = 'btn' onClick={this.deleteTodo.bind(this,item)}> <i className='glyphicon glyphicon-remove'/> </button>
                 <button className = {btnClasses} onClick={this.likeTodo.bind(this,item)}> <i className='glyphicon glyphicon-heart'/> </button>
             </li>
         );
    }


    render(){

        const {todoName} = this.state;
        const {todos, error, isLoading} = this.props.home;

        LS.set('todos',todos);
        return(
            <div className='row-fluid b-home'>
                <div className='col-lg-12'>
                    <ul>
                         {
                             // todos.length === 0 ? <Loader/> :
                             // todos.map(this.renderTodos)
                             isLoading
                                 ? <Loader/>
                                 : todos.length !== 0
                                    ? todos.map(this.renderTodos)
                                    : 'элементов нет'
                         }
                    </ul>
                </div>
                <div className='col-lg-4'>
                    {/* <input type='text' className='form-control' value={todoName} onChange={this.inputOnChange}/> */}
                    <Input
                        value={ todoName }
                        onChange={ this.inputOnChange2 }
                        error={error}
                    />
                    <button className='btn btn-primary b-home-submit' onClick={this.addTodo}> Добавить</button>
                </div>
            </div>
        );
    }

    // componentWillUnmount(){
    //     this.props.dispatch(saveTodos(this.props.home.todos));
    //    //  LS.set('todos',this.props.home.todos);
    // }
}

function mapStateToProps(state) {
    return{
      home: state.home
    };
}

export default connect(mapStateToProps)(HomePage); // homepage соединяем со store