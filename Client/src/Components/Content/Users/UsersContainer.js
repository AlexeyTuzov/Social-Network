import { SetUsers } from '../../../Data/users-reducer';
import {connect} from 'react-redux';
import React from 'react';
import Users from './Users';
import * as axios from 'axios';


class UsersContainer extends React.Component {
    componentDidMount = () => {
        axios.get('/api/user/get').then(res => {
            this.props.SetUsers(res.data);
        })
    }

    render = () => {
        return <Users/>
    }

}

const mapStateToProps = (state) => {
    return {}
}


export default connect(mapStateToProps, {SetUsers})(UsersContainer);