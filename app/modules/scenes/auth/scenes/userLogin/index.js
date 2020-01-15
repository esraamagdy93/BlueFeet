import React, { Component } from "react";
import UserLogin from './userLogin'

export default class extends Component {
    render() {
        return (
            <UserLogin navigation={this.props.navigation} />
        )
    }
}