import React from 'react';
import './ChatCollection.css';
import ChatMessage from './ChatMessage';

const ChatCollection = (props) => {
  const messages = props.data

  const messageEvents = messages.map((event, i) => {
    return (
      <ChatMessage key={i} sender={event.sender} body={event.body} timeStamp={event.timeStamp} />
    );
  });
  return (
    <section>
      {messageEvents}
    </section>
  );
};

export default ChatCollection;
