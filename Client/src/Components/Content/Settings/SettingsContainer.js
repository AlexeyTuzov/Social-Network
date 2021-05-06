import React from 'react';
import {connect} from 'react-redux';
import {
    EditEmail,
    EditFirstName,
    EditLastName,
    EditPassword,
    EraseCredentials,
    ToggleFetchingStatus
} from '../../../Data/settings-reducer';
import Settings from "./Settings";
import * as axios from 'axios';
import Preloader from "../../../Data/Common/Preloader";

class SettingsContainer extends React.Component {

    sendCredentials = () => {
        this.props.ToggleFetchingStatus(true);
        axios.post('/api/user/register', {
            email: this.props.email,
            lastName: this.props.lastName,
            firstName: this.props.firstName,
            password: this.props.password
        })
            .then(res => {
                this.props.EraseCredentials();
                console.log('THEN RESPONSE:', res);
            })
            .catch(err => {
                this.props.EraseCredentials();
                console.log('CATCH ERROR:', err.message);
            })
            .finally(() => {
                this.props.ToggleFetchingStatus(false)
            });
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Settings SendCredentials={this.sendCredentials}
                      EditEmail={this.props.EditEmail} EditFirstName={this.props.EditFirstName}
                      EditLastName={this.props.EditLastName} EditPassword={this.props.EditPassword}
                      email={this.props.email} lastName={this.props.lastName} firstName={this.props.firstName}
                      password={this.props.password}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        email: state.settingsReducer.emailInput,
        firstName: state.settingsReducer.firstNameInput,
        lastName: state.settingsReducer.lastNameInput,
        password: state.settingsReducer.passwordInput,
        isFetching: state.settingsReducer.isFetching
    }
};

export default connect(mapStateToProps, {
    EditEmail, EditFirstName,
    EditLastName, EditPassword, EraseCredentials, ToggleFetchingStatus
})(SettingsContainer);
