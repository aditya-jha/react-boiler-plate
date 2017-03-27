"use strict";

import Actions from "./../actions/index";

let defaultState = {};

const REDUCER = () => (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default REDUCER;