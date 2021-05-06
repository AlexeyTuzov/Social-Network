import React from 'react';
import s from "./Posts.module.css";
import Ava from '../../../Data/Avatar.jpg';
import Like from '../../../Data/Like.jpg';
const Posts = (props) =>
      {
          return(
       <div className={s.Post}>
           <img className={s.Avatar} src={Ava} alt="Ooops!"/> <p> {props.Posts} </p>
           <span><a className={s.A}>
                    <img className={s.Like} src={Like} alt="likes"/></a> Like</span>
       </div>
      );}

export default Posts;
