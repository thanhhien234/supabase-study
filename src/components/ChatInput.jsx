/* eslint-disable react/prop-types */
import { ChatInputContainer, InputWrapper, SendIcon } from '../styles/chatInput.styles';
import sendIcon from '../assets/send-icon.png';

const ChatInput = ({ newMessage, setNewMessage, sendMessage }) => {
    return (
      <ChatInputContainer>
        <InputWrapper 
          type="text"
          value={newMessage}
          placeholder="메시지를 입력하세요."
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <SendIcon 
          src={sendIcon} 
          alt=""
          onClick={sendMessage}
        />
      </ChatInputContainer>
    );
};
  
export default ChatInput;