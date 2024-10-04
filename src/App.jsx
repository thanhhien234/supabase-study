import './App.css'
import ChatInput from "./components/ChatInput"
import ChatMessage from './components/ChatMessage'
import FileItem from './components/FileItem'
import useChatting from './hooks/useChatting'
import useFileDrop from './hooks/useFileDrop'

function App() {
  const { 
    items,
    newMessage,
    setNewMessage,
    sendMessage
  } = useChatting()

  const { handleFileDrop } = useFileDrop()
  return (
    <main className='main'>
      <section className="chat-window-container">
        {items.map((item) => (
          <div key={item.created_at}>
            {item.type === 'message' ? (
              <ChatMessage newMessage={item} />
            ) : (
              <FileItem file={item} />
            )}
          </div>
        ))}
      </section>
      <ChatInput 
        newMessage={newMessage} 
        setNewMessage={setNewMessage} 
        sendMessage={sendMessage} 
        handleFileDrop={handleFileDrop}
      />
    </main>
  )
}

export default App
