import React, { Component } from 'react';

import { connect } from 'react-redux'

@connect((state) => state.homeReducer)
class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                {
                    this.props.homeName
                }
            </div>
        );
    }
}

export default Home;