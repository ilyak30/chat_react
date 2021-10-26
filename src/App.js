import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import Profile from 'components/Profile/Profile';
import Dialogs from 'components/Dialogs/Dialogs';
import News from 'components/News/News';
import Music from 'components/Music/Music';
import Settings from 'components/Settings/Settings';
import { BrowserRouter , Route } from 'react-router-dom';

// function App() {
const App = (props) => {
  return (
    <BrowserRouter>
    {/* const extData = (props) => (); */}
    {/* let dialData = [
    { 'id': '1', 'name': 'Dima' },
    { 'id': '2', 'name': 'Kolya' },
    { 'id': '3', 'name': 'John' },
    { 'id': '4', 'name': 'Mark' },
    { 'id': '5', 'name': 'Mike' }
  ]; */}
  


    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wraper-content'>
        {/* <Route path='/dialogs' component={ Dialogs } /> */}
        <Route path='/dialogs' render={ ()=> <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/> } />
        {/* <Route path='/profile' component={ Profile } /> */}
        <Route path='/profile' render={ ()=> <Profile mypostData={props.mypostData}/> } />

        <Route path='/news' component={ News } />
        <Route path='/music' component={ Music } />
        <Route path='/settings' component={ Settings } />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
