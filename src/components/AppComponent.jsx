"use strict";

import React, {PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Grid} from "react-flexbox-grid";

export default class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>AppComponent</div>
            </MuiThemeProvider>
        )
    }
}