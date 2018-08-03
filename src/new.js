require('./less');
import React from 'react';
import PropTypes from 'prop-types';



export default  class NewComponent extends React.Component {

    constructor(props){
        super(props);

    };

    render(){
        return(
            <div className = "NewComponent-t1">
                <h3> {this.props.h1Text} </h3>
            </div>

        );
    };
}

NewComponent.defaultProps = {
    h1Text: "NewComponent",
};

NewComponent.propTypes = {
    h1Text: PropTypes.string.isRequired,
};

