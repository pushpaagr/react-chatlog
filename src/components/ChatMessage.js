import React from 'react';
import './ChatMessage.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types'

const ChatMessage = (props) => {


// const element = "";
// if props.sender == "Estragon" {
//   element = "remote"
// } else {
//   element = "local"
// }


const element = props.sender === "Estragon" ? "chat-entry remote" : "chat-entry local"


  return (
    <section className={element} >
        <div className="entry-name">{props.sender}</div>
        <div className="entry-bubble">
          <div className="entry-body">{props.body}</div>
          <div className="entry-time"><Timestamp time={props.timeStamp}/></div>
      </div>
    </section>
  )
};

ChatMessage.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,

};


export default ChatMessage;
