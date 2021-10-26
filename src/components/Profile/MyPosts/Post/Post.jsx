import React from "react";
import s from './Post.module.css';
const Post = (props) => {
    return (
    <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzo59bRJvrqMgM3pP891zAt3JEkbMNFMXEA&usqp=CAU' />
            {/* <img src='https://beatmaker.tv/activecontent/images/users/13236/beatmaker-small.jpg' /> */}
        {/* <img src='https://camo.envatousercontent.com/8c52d751817e29c33ba17013b7860a193ad3ff00/687474703a2f2f7468656d652e6372756d696e612e6e65742f70726f6d6f2f6f6c796d7075732d68746d6c2f6465762d7570646174652e706e67' /> */}
        { props.message };
        <div>
            <span>Like { props.likeCount }</span>
        </div>
    </div>
    
    )    
}

export default Post;
