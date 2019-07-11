import React from 'react'
import Auth from '../../lib/Auth'

import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import Chatkit from '@pusher/chatkit-client'

console.log('test', process.env.CHATKIT_TEST_TOKEN)

const instanceLocator = process.env.CHATKIT_INSTANCE

const testToken = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8a39e96d-aa83-484a-b425-a7abc05dfa51/token'

const userId = Auth.getPayload().sub

const roomId = '24849940'



class MessageApp extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: userId,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    })

    chatManager.connect()
      .then(currentUser => {
        console.log('doing something 1')
        this.currentUser = currentUser
        this.currentUser.subscribeToRoom({
          roomId: roomId,
          hooks: {
            onMessage: message => {
              console.log('doing something 2')
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: roomId
    })
  }

  render() {
    return (
      <div className="app">
        <Title />
        <MessageList
          roomId={this.state.roomId}
          messages={this.state.messages} />
        <SendMessageForm
          sendMessage={this.sendMessage} />
      </div>
    )
  }
}


function Title() {
  return <p className="msgtitle">My awesome chat app</p>
}

export default MessageApp
