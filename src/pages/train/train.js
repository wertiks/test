import React from 'react';
import {connect} from "react-redux";
import trainTest from './actions';


class TrainPage extends React.Component {

    static path = '/train';

    render(){
        return(
            <div className='alert alert-danger'>
                <h3> для теста разных функций </h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
    };
}

export default connect(mapStateToProps)(TrainPage); //  соединяем со store
