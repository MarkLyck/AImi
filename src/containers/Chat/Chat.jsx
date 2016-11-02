import React from 'react'
import Message from '../../components/chat/Message'
import './styles/chat.css'
import sendIcon from '../../../public/icons/paper_plane.svg'

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.sendMessage = this.sendMessage.bind(this)
    this.botRequest = this.botRequest.bind(this)

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
    this.botRequest(newMessage)
  }

  botRequest(message) {
    var headers = new Headers({
      "Content-Type": "application/json"
    })

    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(message),
   }

   fetch('http://127.0.0.1:3000/message', options)
   .then((response) => {
     response.json().then(result => {
       let message = JSON.stringify(result, null, 2)
       let newMessages = this.state.messages
       newMessages.push({
         sender: 'bot',
         body: message,
         timeStamp: new Date()
       })
       this.setState({ messages: newMessages })
       console.log(result)
     })
   })
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
