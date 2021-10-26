import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


// {DialogItem}

const Dialogs = (/** @type {{ dialogsData: any[]; messagesData: any[]; }} */ props) => {

  // let dialogsData = [
  //   { id: '1', name: 'Dima' },
  //   { id: '2', name: 'Kolya' },
  //   { id: '3', name: 'John' },
  //   { id: '4', name: 'Mark' },
  //   { id: '5', name: 'Mike' }
  // ];

  let dialogsElements =props.dialogsData.map((/** @type {{ name: any; id: any; }} */ d) => (<DialogItem name={d.name} id={d.id} />) );


  // let dialogsElements1stApproach = [
  //   // <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
  //   <DialogItem name={props.dialogsData[1].name} id={props.dialogsData[1].id} />,
  //   <DialogItem name={props.dialogsData[2].name} id={props.dialogsData[2].id} />,
  //   <DialogItem name={props.dialogsData[3].name} id={props.dialogsData[3].id} />,
  //   <DialogItem name={props.dialogsData[4].name} id={props.dialogsData[4].id} />
  // ];

  // let messagesData = [
  //   { id: '1', message: 'Hi' },
  //   { id: '2', message: 'its a nice day' },
  //   { id: '3', message: 'lets hit the road' },
  //   { id: '1', message: 'do you mind?' },
  // ];

  let messageElements = props.messagesData.map((/** @type {{ message: any; id: any; }} */ m) => (<Message message={m.message} id={m.id} />));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {/* // that's first apptoach. that's how it was */}
        <div className={styles.dialog + ' ' + styles.active}>
          <NavLink to='/dialogs/1'>Ilya 1st</NavLink>
        </div>
        {/* // that's second apptoach */}
        <DialogItem name='Mike 2nd' id='2' />
        {/* // that's third apptoach */}        
        {/* <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
        <DialogItem name={props.dialogsData[1].name} id={props.dialogsData[1].id} />
        {/* // that's forth apptoach */}

        {/* {dialogsElements1stApproach} */}

        {dialogsElements}

      </div>
      <div className={styles.messages}>

        <div className={styles.dialog}>Hi</div>

        <Message message='how r u' />
        <Message id={props.messagesData[1].id} message={props.messagesData[1].message} />
        <Message id={props.messagesData[1].id} message={props.messagesData[1].message} />

        {messageElements}

      </div>

    </div>
  )
}

export default Dialogs;
