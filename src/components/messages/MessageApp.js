import React from 'react'
import Auth from '../../lib/Auth'
import axios from 'axios'

import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import Chatkit from '@pusher/chatkit-client'

const instanceLocator = process.env.CHATKIT_INSTANCE

const testToken = `https://us1.pusherplatform.io/services/chatkit_token_provider/v1/${process.env.CHATKIT_TEST_TOKEN}/token`

const userId = Auth.getPayload().sub


class MessageApp extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      currentChatroom: '24849940'
    }

    this.chatrooms = {
      pets: ''
    }


    this.sendMessage = this.sendMessage.bind(this)
    this.registerChatkitUser = this.registerChatkitUser.bind(this)
    this.startChatkit = this.startChatkit.bind(this)
  }

  componentDidMount() {
    this.startChatkit()
  }

  startChatkit() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: userId,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    })


    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.currentUser.subscribeToRoom({
          roomId: this.state.currentChatroom,
          hooks: {
            onMessage: message => {
              this.setState({
                registered: true,
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
      .catch(err => {
        console.log(err)
        if (err.info.error_description === 'The requested user does not exist') {
          console.log('User does not exit')
          this.setState({ registered: false })
        }
      })
  }

  registerChatkitUser() {
    axios.get(`/api/chatkit/${Auth.getPayload().sub}`, {
      headers: { Authorization: `${Auth.getToken()}` }
    })
      .then(() => this.startChatkit())
      .catch(err => console.log(err))
  }

  setChatroom(e) {
    console.log(e.target.value)
    // use e.target.value to set state of currentChatroom
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.currentChatroom
    })
  }

  render() {
    return (
      <div>
        {!this.state.registered &&
          <div>
            <h3>User not registered</h3>
            <h3>User not registered</h3>
            <h3>User not registered</h3>
            <h3>User not registered</h3>
            <button onClick={this.registerChatkitUser}>Register for chatrooms</button>
          </div>
        }
        {this.state.registered && this.state.currentChatroom &&
          <div>
            <button value="24849940" onClick={this.setChatroom}>Pets</button>
            <div className="app">
              <Title />
              <MessageList
                roomId={this.state.roomId}
                messages={this.state.messages} />
              <SendMessageForm
                sendMessage={this.sendMessage} />
            </div>
          </div>
        }

      </div>

    )
  }
}


function Title() {
  return <p className="msgtitle">My awesome chat app</p>
}

export default MessageApp
