import React from 'react';
import ListItem from './list-item';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ListPage extends React.Component {

    static path = '/list';

    static propTypes = {
        list: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);

        bindAll(this, ['renderItems'])
    }

    renderItems(item, idx) {
        return (
            <ListItem
                key = {idx}
                id = { item.id }
                name = {item.name}
                youtube={item.youtube}
            />
        );
    }

    render(){

        const {items} = this.props.list;

        return(
            <div className='row'>
                <div className='col-xl-12'>
                    <h3> Список видео </h3>
                    {/*<ul>*/}
                        {/*{this.state.items.map(this.renderItems)}*/}
                    {/*</ul>*/}
                    <table className='table table-bordered table-hover'>
                        <thead>
                             <tr>
                                    <th>ID</th>
                                    <th>Название</th>
                                    <th>Действие</th>
                             </tr>
                        </thead>
                        <tbody>
                          { items.map(this.renderItems) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      list: state.list
    };
}

export default connect(mapStateToProps)(ListPage);