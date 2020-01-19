import React, { Component } from "react";
import SelectVenue from './selectVenue'

export default class extends Component {
    render() {
        return (
            <SelectVenue navigation={this.props.navigation} />
        )
    }
}