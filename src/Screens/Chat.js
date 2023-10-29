import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

function Chat() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello, mate.',
        createdAt: new Date("2023-10-28"),
        user: {
          _id: 2,
          name: 'Tester',
          avatar: 'https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blue.png',
        },
      },
      {
        _id: 2,
        text: 'How is your day?',
        createdAt: new Date("2023-10-29"),
        user: {
          _id: 2,
          name: 'Tester',
          avatar: 'https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blue.png',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default Chat