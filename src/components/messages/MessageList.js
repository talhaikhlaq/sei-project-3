import React from 'react'


class MessageList extends React.Component {

  render() {
    console.log(this.props.messages)
    return (
      <ul className="message-list">
        {this.props.messages.map(message => {
          return (
            <li  key={message.id} className="message">
              <div>{message.senderId}</div>

              <div>{message.text}</div>
            </li>
          )
        })}
      </ul>
    )
  }
}


export default MessageList


//
// <ul className="message-list">
//   {this.props.messages.map(message => {
//     return (
//       <li key={message.id}>
//         <div>
//           {message.senderId}
//         </div>
//         <div>
//           {message.text}
//         </div>
//       </li>
//     )
//   })}
// </ul>
