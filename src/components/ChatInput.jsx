/* eslint-disable react/prop-types */
import './ChatInput.css';
import sendIcon from '../assets/send-icon.png';

const ChatInput = ({ newMessage, setNewMessage, sendMessage }) => {

    return (
        <section className='chat-input-container'>
            <input 
                type="text"
                className="input-wrapper"
                value={newMessage}
                placeholder="메시지를 입력하세요."
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        sendMessage();
                    }}
                }
            />
            <img 
                src={sendIcon} 
                className="send-icon" 
                alt="" 
                onClick={sendMessage}
            />
        </section>
    )
}

export default ChatInput;