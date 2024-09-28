/* eslint-disable react/prop-types */
import './ChatMessage.css';

const ChatMessage = ({ newMessage }) => {
    return (
        newMessage ? (
            <article className={`chat-message ${newMessage.is_sent ? 'sent' : 'received'}`}>
                {newMessage.content}
            </article>
        ) : null
    );
}

export default ChatMessage;
