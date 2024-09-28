import './App.css'
import ChatInput from "./components/ChatInput"
import ChatMessage from './components/ChatMessage'
import useChatting from './hooks/useChatting'

function App() {
  const { 
    messages,
    newMessage,
    setNewMessage,
    sendMessage
  } = useChatting()
  return (
    <main className='main'>
      <section className="chat-window-container">
        {messages.map((message, index) => (
          <ChatMessage key={index} newMessage={message} />
        ))}
      </section>
      <ChatInput 
        newMessage={newMessage} 
        setNewMessage={setNewMessage} 
        sendMessage={sendMessage} 
      />
    </main>
  )
}

export default App
