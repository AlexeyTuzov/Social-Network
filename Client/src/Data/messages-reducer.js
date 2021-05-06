const FILTER = 'FILTER';
const EDIT_MESSAGE = 'EditMessage';
const ADD_MESSAGE = 'AddMessage';
const GET_RESPONDENT_NAME = 'GetRespondentName';
const SET_USERS = 'SetUsers';
const TOGGLE_FETCHING_STATUS = 'ToggleFetchingStatus';

export const ToggleFetchingStatus = (toggle) => {
    return {type: TOGGLE_FETCHING_STATUS, toggle}
}

export const Filter = () => {
    return {type: FILTER}
}

export const SetUsersAction = (user) => {
    return {type: SET_USERS, user}
}

export const AddMessageAction = () => {
    return {type: ADD_MESSAGE}
}

export const EditMessageAction = (text) => {
    return {type: EDIT_MESSAGE, text: text}
}

export const GetNamesAction = () => {
    return {type: GET_RESPONDENT_NAME}
}

let initialState = {
    MessagesArray: [
        {id: 1, message: 'Hell yeah!'},
        {id: 2, message: 'These are arrays!'},
        {id: 3, message: 'See them displaying well?'},
        {id: 1, message: 'This is JavaScript\'s magic'},
        {id: 1, message: 'We\'re still training'}
    ],
    NamesArray: [],
    CurrentDialog: [],
    CurrentRespondentName: '',
    textArea: '',
    isFetching: false

};

const messagesReducer = (state = initialState, action) => {

    const UpdateCurrentDialog = () => {
        let dialogUrl = document.location.pathname;
        let stateCopy = {...state};
        stateCopy.MessagesArray = [...state.MessagesArray];
        stateCopy.CurrentDialog = [...state.CurrentDialog];
        stateCopy.CurrentDialog = stateCopy.MessagesArray.filter(item => (`/messages/${item.id}`) === dialogUrl);
        return stateCopy;
    }
    const GetCurrentId = () => {
        let dialogUrl = document.location.pathname;
        let id;
        for (let i = 0; i < 100; i++) {
            if (dialogUrl === `/messages/${i}`) id = i;
        }
        return id;
    }
    const GetRespondentName = () => {
        let id = GetCurrentId();
        let stateCopy = {...state};
        stateCopy.NamesArray = [...state.NamesArray];
        let Name = stateCopy.NamesArray.find(item => item.id === id);
        if (typeof Name === "undefined") {
            Name = '';
        }
        return Name.name;
    }


    switch (action.type) {
        case FILTER: {
            return UpdateCurrentDialog();
        }
        case EDIT_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.textArea = action.text;
            return stateCopy;
        }
        case ADD_MESSAGE: {
            let id = GetCurrentId();
            let add = {id: id, message: state.textArea};
            let stateCopy = {...state};
            stateCopy.MessagesArray = [...state.MessagesArray];
            stateCopy.MessagesArray.push(add);
            stateCopy.textArea = '';
            return stateCopy;

        }
        case GET_RESPONDENT_NAME: {
            let stateCopy = {...state};
            stateCopy.CurrentRespondentName = GetRespondentName();
            return stateCopy;
        }
        case SET_USERS: {
            let stateCopy = {...state};
            stateCopy.NamesArray = [];
            let add = action.user;
            add.forEach( (item) => {stateCopy.NamesArray.push(item)});
            return stateCopy;
        }
        case TOGGLE_FETCHING_STATUS: {
            let stateCopy = {...state};
            stateCopy.isFetching = action.toggle;
            return stateCopy;
        }

        default:
            return state;
    }
}
export default messagesReducer;