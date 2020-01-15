import React, { Component } from "react";
import ProfileScreen from './profileScreen'

export default class extends Component {
    render() {
        return (
            <ProfileScreen navigation={this.props.navigation} />
        )
    }
}