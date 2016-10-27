import React from 'react'
import './styles/message.css'

const Message = ({ message }) => {
  return (
    <li className={message.sender === 'bot' ? 'message bot' : 'message'}>
      <p>{message.body}</p>
    </li>
  )
}

export default Message
