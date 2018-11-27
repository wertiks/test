import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.less';
import { close_modal } from './action';

class Modal extends React.Component {

    static propTypes = {
        modal: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);

        this.close = this.close.bind(this);
    }

    close(){
        this.props.dispatch(close_modal());
    }

    render(){

        const { isOpen, title, content} = this.props.modal;

        if (!isOpen) return null;

        return(

            <div className='modal fade in' id='exampleModal' tabIndex='-1' role='dialog'
                 aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>{title}</h5>
                            <button type='button' className='close' onClick={ this.close }>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                            {content}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}
export default connect(mapStateToProps)(Modal);