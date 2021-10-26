import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let mypostData = [
    {id:'1', likeCount:11, message: 'How r u?'},
    {id:'2', likeCount:22, message: 'its my first post here...'},
    {id:'3', likeCount:33, message: 'yeap'},
    {id:'1', likeCount:44, message: 'nice!'},
  ];

    return (
        <div className={styles.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post message='Hi, ' likeCount='15' />
            <Post message={mypostData[1].message} likeCount={mypostData[1].likeCount} />
        </div>
    )
}

export default MyPosts;
