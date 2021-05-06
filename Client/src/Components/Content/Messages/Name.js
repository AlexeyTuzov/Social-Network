import React from 'react';
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Name = (props) => {

    return (
        <div className={s.Div}><NavLink className={s.Respondent} to={`/messages/${props.id}`}>
            {props.firstName} {props.lastName}
        </NavLink></div>

    );

}

export default Name;
