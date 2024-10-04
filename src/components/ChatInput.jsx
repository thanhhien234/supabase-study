/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ChatInputContainer, TextInput, InputWrapper, SendIcon, FileIcon } from '../styles/chatInput.styles';
import sendIcon from '../assets/send-icon.png';
import fileIcon from '../assets/file-icon.png';

const ChatInput = ({ newMessage, setNewMessage, sendMessage, handleFileDrop }) => {
  const [fileName, setFileName] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const droppedFile = files[0];
      setFileName(droppedFile.name);
      handleFileDrop([droppedFile]);
    }
  }; 
  return (
      <ChatInputContainer
        onDragOver={(e) => e.preventDefault()}
        onDrop = {handleDrop}
      > 
        {fileName && (
          <section style={{ display: 'flex', flexDirection: 'column'}}>
            <FileIcon
              src={fileIcon}
              alt=""
            />
            <span>{fileName}</span>
          </section>

        )}
        <TextInput>
          <InputWrapper 
            type="text"
            value={newMessage}
            placeholder="메시지를 입력하세요."
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
                setFileName("");
              }
            }}
          />
          <SendIcon 
            src={sendIcon} 
            alt=""
            onClick={() => {
              sendMessage();
              setFileName(""); 
            }}
          />
        </TextInput>
      </ChatInputContainer>
    );
};
  
export default ChatInput;