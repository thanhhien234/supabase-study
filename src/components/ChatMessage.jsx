/* eslint-disable react/prop-types */
import { MessageWrapper } from "../styles/chatMessage.styles";

const ChatMessage = ({ newMessage }) => {
  return (
    newMessage ? (
      <MessageWrapper $isSent={newMessage.is_sent}>
        {newMessage.content}
      </MessageWrapper>
    ) : null
  );
}

export default ChatMessage;
