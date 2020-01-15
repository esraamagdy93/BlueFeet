import React, { Component } from "react";
import Players from './players'

export default class extends Component {
    render() {
        return (
            <Players navigation={this.props.navigation} />
        )
    }
}