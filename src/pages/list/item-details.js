import React from 'react';
import PropTypes from 'prop-types';
import { store } from '../../index';
import { bindAll } from 'lodash';
import './styles.less';

export default class ItemDetails extends React.Component {

    static propTypes = {
        params: PropTypes.any
    };

    constructor(props) {
        super(props);

        bindAll(this, ['getCurrentItemFromStore']);

        const item = this.getCurrentItemFromStore();

        this.state = {
            id: item.id,
            name: item.name,
            youtube: item.youtube
        };

    };

    getCurrentItemFromStore(){
     const actualStore = store.getState();
     const {items} = actualStore.list;
     const idx = items.findIndex(item=> item.id === Number(this.props.match.params.id));

        return {
            id: items[idx].id,
            name: items[idx].name,
            youtube: items[idx].youtube,
        };
    };

    render(){
        return(
            <div className='row b-list-detail'>
                <div className='col-xs-12'>
                    <div className='panel panel-primary'>
                        <div className='panel-heading'>
                            <b> {  this.state.id } </b>
                            {this.state.name}
                        </div>
                        <div className='panel-body'>
                            <iframe src={`https://www.youtube.com/embed/${ this.state.youtube }`}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
