// Note: All authentication cases are defined here...!

import {
}
    from "../constant/action-types";

const INIT_STATE = {
    authenticatedUser: null
}

const authReducer = (state = INIT_STATE, action) => {

    switch (action.type) {

        default:
            return state;
    }
}

export default authReducer;