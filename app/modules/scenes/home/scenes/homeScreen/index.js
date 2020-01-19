import React, { Component } from "react";
import HomeScreen from './homeScreen'

export default class extends Component {
    render() {
        return (
            <HomeScreen navigation={this.props.navigation} />
        )
    }
}