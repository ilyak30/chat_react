import React from "react";
import s from './Profile.module.css';
const Profile = () => {
    return <div className={s.content}>
    <div>
        <img src='https://beatmaker.tv/activecontent/images/users/13236/beatmaker-small.jpg' />
        {/* <img src='https://camo.envatousercontent.com/8c52d751817e29c33ba17013b7860a193ad3ff00/687474703a2f2f7468656d652e6372756d696e612e6e65742f70726f6d6f2f6f6c796d7075732d68746d6c2f6465762d7570646174652e706e67' /> */}
    </div>
    <div>
        ava + description
    </div>
    <div className='item'>
        my post
        <div className={s.item}>
            new post
        </div>
        <div className={s.item}>
            post1
        </div>
        <div className={s.item}>
            post2
        </div>
    </div>
    </div>
}

export default Profile;
