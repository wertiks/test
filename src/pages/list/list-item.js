import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { open_modal} from '../../components/modal/index';
import EditModal from './modals/edit_modal';
import DeleteModal from './modals/delete_modal';
import {editItem, deleteItem} from './actions';

class ListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
    }

    edit(){
        const {id, name, youtube} = this.props;
        this.props.dispatch(open_modal({
            content: < EditModal id = {id} name={name} youtube={youtube} onSave = {editItem}/>,
            title: 'Редактировать',
            btnText: 'Сохранить'
        }));
    }

    remove(){
        const {id, name} = this.props;
        this.props.dispatch(open_modal({
            content: < DeleteModal id = {id} name={name}  onSuccess = {deleteItem}/>,
            title: 'Удалить элемент',
        }));
    }

    render(){
        return(
               <tr>
                   <td>{this.props.id}</td>
                   <td>
                       <Link to ={`/list/${this.props.id}`}>
                           { this.props.name }
                      </Link>
                   </td>
                   <td>
                       <button className='btn btn-success' onClick={this.edit}>
                           <i className='glyphicon glyphicon-pencil'></i>
                       </button>
                       <button className='btn btn-danger' onClick={this.remove}>
                           <i className='glyphicon glyphicon-remove'></i>
                       </button>
                   </td>
               </tr>

        );
    }
}

function mapStateToProps(state) {
    return {};
}
export default connect(mapStateToProps)(ListItem);
