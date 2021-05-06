import React from 'react';
import {ReactComponent as Logo} from '../logo.svg';
import s from './Preloader.module.css';

const Preloader = () => {
    return (
        <div>
            <Logo className={s.Preloader}/>
            <span>Please wait!</span>
        </div>
    )
}

export default Preloader;