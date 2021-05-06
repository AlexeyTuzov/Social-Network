const EDIT_POST = 'EditPost';
const ADD_POST = 'AddPost';

let initialState = {
    state4Posts: [],
    textArea: []
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_POST: {
            let stateCopy = {...state};
            stateCopy.textArea = [...state.textArea];
            stateCopy.textArea = action.text;
            return stateCopy;
        }

        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.textArea = [...state.textArea];
            let add = {text: stateCopy.textArea};
            stateCopy.state4Posts = [...state.state4Posts];
            stateCopy.state4Posts.push(add);
            stateCopy.textArea = '';
            return stateCopy;
        }

        default: return state;
    }
}

export const AddPostAction = () => {
    return {type: ADD_POST}
}

export const EditPostAction = (text) => {
    return {type: EDIT_POST, text: text}
}

export default profileReducer;