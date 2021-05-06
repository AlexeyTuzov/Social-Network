import {
    Filter,
    AddMessageAction,
    EditMessageAction,
    GetNamesAction,
    SetUsersAction,
    ToggleFetchingStatus
} from "../../../Data/messages-reducer";
import {connect} from 'react-redux';
import Messages from './Messages';
import React from 'react';
import * as axios from 'axios';
import Preloader from '../../../Data/Common/Preloader';
import s from './Messages.module.css';

class MessagesContainer extends React.Component {

    componentDidMount = () => {
        this.props.ToggleFetchingStatus(true);
        axios.get('/api/user/get').then(res => {
                this.props.SetUsers(res.data);
                this.props.ToggleFetchingStatus(false);
            }
        );
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader className={s.Preloader} /> : null}
            <Messages Names={this.props.Names}
                      MessagesText={this.props.MessagesText}
                      currentTextArea={this.props.currentTextArea}
                      RespondentName={this.props.RespondentName}
                      UpdateMessage={this.props.UpdateMessage}
                      ButtonClick={this.props.ButtonClick}
                      showCurrentMessages={this.props.showCurrentMessages}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        RespondentName: state.messagesReducer.CurrentRespondentName,
        currentTextArea: state.messagesReducer.textArea,
        MessagesText: state.messagesReducer.CurrentDialog,
        Names: state.messagesReducer.NamesArray,
        isFetching: state.messagesReducer.isFetching
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        UpdateMessage: (text) => dispatch(EditMessageAction(text)),
        ButtonClick: () => dispatch(AddMessageAction()),
        showCurrentMessages: () => {
            dispatch(Filter());
            dispatch(GetNamesAction());
        },
        SetUsers: (user) => dispatch(SetUsersAction(user)),
        ToggleFetchingStatus: (toggle) => dispatch(ToggleFetchingStatus(toggle))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);