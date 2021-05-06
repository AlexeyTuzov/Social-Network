import React from 'react';
import s from "./Profile.module.css";
import Posts from "./Posts";
import Avatar from "../../../Data/Avatar.jpg";

const Profile = (props) => {

    let EachPost = props.Posts.map(item => {
        return <Posts Posts={item.text}/>
    })

    let onButtonClick = props.ButtonClick;

    let updateText = (item) => props.UpdateText(item.target.value);

    return (
        <div>
            <header className={s.Header}>This is Your profile!</header>
            <img className={s.Tig} src={Avatar} alt={'oops!'}/>
            <div><textarea className={s.Textarea} onChange={updateText}
                           value={props.currentTextArea}/>
            </div>
            <div>
                <button onClick={onButtonClick}>Add Post</button>
            </div>
            {EachPost}
        </div>

    );

}

export default Profile;