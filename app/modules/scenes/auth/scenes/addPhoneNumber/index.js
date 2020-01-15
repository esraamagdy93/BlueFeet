import React, { Component } from "react";
import AddPhoneNumber from './addPhoneNumber'

export default class extends Component {
    render() {
        return (
            <AddPhoneNumber navigation={this.props.navigation} />
        )
    }
}