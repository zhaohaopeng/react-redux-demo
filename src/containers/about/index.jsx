import React, { Component } from 'react';
import Box from '../../component/box'

import { connect } from 'react-redux'
@connect((state) => state.homeReducer)
class About extends Component {

    state = {
        currentTime: Date.now()
    }

    handleClick() {
        this.setState({
            currentTime: Date.now()
        })
    }

    render() {
        return (
            <div>
                <div className="container mb-5 mt-5">
                    <h1>{this.props.homeName}</h1>

                </div>
                <button type="button" className="btn btn-primary" onClick={() => this.handleClick()}>修改 home Name</button>
                <div className="container mb-5 mt-5">
                    {this.state.currentTime}
                </div>
                <div>
                    <Box currentTime={this.state.currentTime}></Box>
                    <Box currentTime={this.state.currentTime}></Box>
                    <Box currentTime={this.state.currentTime}></Box>
                    <Box currentTime={this.state.currentTime}></Box>
                    <Box currentTime={this.state.currentTime}></Box>
                </div>
            </div>
        );
    }
}

export default About;