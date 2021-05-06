const EDIT_EMAIL = 'EditEmail';
const EDIT_FIRST_NAME = 'EditFirstName';
const EDIT_LAST_NAME = 'EditLastName';
const EDIT_PASSWORD = 'EditPassword';
const ERASE_CREDENTIALS = 'EraseCredentials';
const TOGGLE_FETCHING_STATUS = 'ToggleFetchingStatus';

export const EditEmail = (text) => {
    return {type: EDIT_EMAIL, text}
}
export const EditFirstName = (text) => {
    return {type: EDIT_FIRST_NAME, text}
}
export const EditLastName = (text) => {
    return {type: EDIT_LAST_NAME, text}
}
export const EditPassword = (text) => {
    return {type: EDIT_PASSWORD, text}
}
export const EraseCredentials = () => {
    return {type: ERASE_CREDENTIALS}
}
export const ToggleFetchingStatus = (toggle) => {
    return {type: TOGGLE_FETCHING_STATUS, toggle}
}

let initialState = {emailInput: '', firstNameInput: '', lastNameInput: '', passwordInput: '', isFetching: false}

let settingsReducer = (state = initialState, action) => {
    switch (action.type) {

        case EDIT_EMAIL:
            return {...state, emailInput: action.text};

        case EDIT_FIRST_NAME:
            return {...state, firstNameInput: action.text};

        case EDIT_LAST_NAME:
            return {...state, lastNameInput: action.text};

        case EDIT_PASSWORD:
            return {...state, passwordInput: action.text};

        case ERASE_CREDENTIALS:
            return {...state, emailInput: '', passwordInput: '', firstNameInput: '', lastNameInput: ''};

        case TOGGLE_FETCHING_STATUS: {
            return {...state, isFetching: action.toggle};
        }

        default:
            return state;
    }
}

export default settingsReducer;