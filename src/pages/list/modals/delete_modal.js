import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindAll } from 'lodash';
import { close_modal } from '../../../components/modal/index';
import Input from '../../../components/ui/input/index';

class DeleteModal extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onSuccess: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);

        bindAll(this, ['cancel', 'remove'])
    }


    cancel(){
        this.props.dispatch(close_modal());
    }

    remove(){
        this.props.dispatch(this.props.onSuccess(this.props.id));
        this.cancel();
    }

    render(){
        return(
            <div >
                <div className='modal-body'>
                    <p><b>{this.props.id}</b> - {this.props.name} </p>

                </div>
                <div className='modal-footer'>
                    <button className='btn btn-default' onClick={this.cancel}> Отмена</button>
                    <button className='btn btn-danger' onClick={this.remove}> Удалить</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}
export default connect(mapStateToProps)(DeleteModal);