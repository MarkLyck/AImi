import React from 'react'
import Message from '../../components/chat/Message'
import './styles/chat.css'
import sendIcon from '../../../public/icons/paper_plane.svg'

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.sendMessage = this.sendMessage.bind(this)

    this.state = {
      user: {
        firstName: 'Mark'
      },
      messages: [
        {
          body: 'Hello Mark',
          sender: 'bot',
          timestamp: new Date()
        }
    ] }
  }

  renderMessages() {
    return this.state.messages.map((message, i) => {
      return <Message message={message} key={i} />
    })
  }

  sendMessage(e) {
    e.preventDefault()
    let messages = this.state.messages

    const newMessage = {
      sender: this.state.user.firstName,
      body: this.refs.messageField.value,
      timeStamp: new Date()
    }

    messages.push(newMessage)
    this.refs.messageField.value = ''

    this.setState({ messages: messages })

    console.log(newMessage.body)

  }

  render() {
    return (
      <main className="chat-view">
        <ul className="messages">
          {this.renderMessages()}
        </ul>
        <form className="message-form" onSubmit={this.sendMessage}>
          <input className="message-field" type="text" placeholder="Message" ref="messageField" />
          <button className="send-btn" type="submit"><img src={sendIcon} alt="send"/></button>
        </form>
      </main>
    )
  }
}

export default Chat
