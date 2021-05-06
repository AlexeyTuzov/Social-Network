import React from 'react';
import {Route} from 'react-router-dom';
import s from './Content.module.css';
import Music from "./Music/Music";
import SettingsContainer from "./Settings/SettingsContainer";
import News from "./News/News";
import MessagesContainer from "./Messages/MessagesContainer";
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';

const Content = () => {

    return (
        <div className={s.Content}>
            <Route path='/Profile' component={ProfileContainer} />
            <Route path='/Users' component={UsersContainer} />
            <Route path='/Music' component={Music}/>
            <Route path='/Messages' component={MessagesContainer}/>
            <Route path='/Settings' component={SettingsContainer}/>
            <Route path='/Newsfeed' component={News}/>
        </div>
    )

}

export default Content;