import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_action";
const _nullSession = {
    currentUser: null
}
const sessionReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {currentUser: action.currentUser})
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return state;
    }
}

export default sessionReducer;