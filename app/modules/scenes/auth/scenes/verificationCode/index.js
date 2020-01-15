import React, { Component } from "react";
import VerificationCode from './verificationCode'

export default class extends Component {
    render() {
        return (
            <VerificationCode navigation={this.props.navigation} />
        )
    }
}