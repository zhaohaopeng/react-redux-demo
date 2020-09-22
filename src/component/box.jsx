import React, { Component } from 'react';

import { connect } from 'react-redux'
@connect((state) => state.homeReducer)
class Box extends Component {
    state = {}
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{this.props.homeName}</h1>
                    <p className="lead">{this.props.currentTime}</p>
                </div>
            </div>
        );
    }
}

export default Box;