import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

  let mypostData = [
    {id:'1', likeCount:11, message: 'How r u?'},
    {id:'2', likeCount:22, message: 'its my first post here...'},
    {id:'3', likeCount:33, message: 'yeap'},
    {id:'1', likeCount:44, message: 'nice!'}
  ];

  let dialogsData = [
    { 'id': '1', 'name': 'Dima' },
    { 'id': '2', 'name': 'Kolya' },
    { 'id': '3', 'name': 'John' },
    { 'id': '4', 'name': 'Mark' },
    { 'id': '5', 'name': 'Mike' }
  ];

  let messagesData = [
    { id: '1', message: 'Hi' },
    { id: '2', message: 'its a nice day' },
    { id: '3', message: 'lets hit the road' },
    { id: '1', message: 'do you mind?' }
  ];

ReactDOM.render(
  <React.StrictMode>
  <App mypostData={mypostData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
