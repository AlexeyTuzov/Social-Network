const SET_USERS = 'SetUsers';
const TOGGLE_FETCHING_STATUS = 'ToggleFetchingStatus';

export const SetUsers = (users) => {
    return {type: SET_USERS, users}
}
export const ToggleFetchingStatus = (toggle) => {
    return {type: TOGGLE_FETCHING_STATUS, toggle}
}

let initialState = {users: {}, firstName: '', lastName: '', photo: '', isFetching: false}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            debugger;
            return {...state, users: action.users}
        }
        case TOGGLE_FETCHING_STATUS: {
            return {...state, isFetching: action.toggle}
        }
        default:
            return state;
    }
}

export default usersReducer;