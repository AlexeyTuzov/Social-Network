import {AddPostAction, EditPostAction} from "../../../Data/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        currentTextArea: state.profileReducer.textArea,
        Posts: state.profileReducer.state4Posts,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        UpdateText: (text) => dispatch(EditPostAction(text)),
        ButtonClick: () => dispatch(AddPostAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);