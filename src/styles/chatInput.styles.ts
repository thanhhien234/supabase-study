import styled from 'styled-components';

export const ChatInputContainer = styled.main`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 20px;
  border-radius: 20px;
  width: 80%;
`;

export const TextInput = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const InputWrapper = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const SendIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const FileIcon = styled.img`
  width: 120px;
  height: 120px;
`;

