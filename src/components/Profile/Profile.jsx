import React from "react";
// import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
//       let mypostData = [
//     {id:'1', likeCount:11, message: 'How r u?'},
//     {id:'2', likeCount:22, message: 'its my first post here...'},
//     {id:'3', likeCount:33, message: 'yeap'},
//     {id:'1', likeCount:44, message: 'nice!'},
//   ];
    return (
        <div>
            <ProfileInfo />
            <MyPosts mypostData={props.mypostData}/>
        </div>
    )
}

export default Profile;
