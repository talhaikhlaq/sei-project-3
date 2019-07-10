import React from 'react'
import MessageList from './MessageList'




class MessageApp extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: DUMMY_DATA
    }
  }

  render() {
    return (
      <div className="app">
        <MessageList />

      </div>
    )
  }
}




const DUMMY_DATA = [
  {
    senderId: 'perborgen',
    text: 'who\'ll win?'
  },
  {
    senderId: 'janedoe',
    text: 'who\'ll win?'
  }
]



export default MessageApp
