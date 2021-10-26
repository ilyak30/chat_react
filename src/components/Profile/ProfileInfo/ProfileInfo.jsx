import React from "react";
import s from './ProfileInfo.module.css';
// import MyPosts from './MyPosts/MyPosts';
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://beatmaker.tv/activecontent/images/users/13236/beatmaker-small.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
