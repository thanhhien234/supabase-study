import styled from 'styled-components';

export const MessageWrapper = styled.article<{  $isSent: boolean; }>`
  padding: 8px 15px;
  margin-bottom: 10px;
  max-width: 60%;
  border-radius: 15px;
  font-size: 16px;
  width: fit-content;
  word-break: break-all;
  background-color: ${props => (props.$isSent ? 'rgb(234, 231, 227)' : 'rgb(234, 187, 182)')};
  margin-left: ${props => (props.$isSent ? 'auto' : 'initial')};
  margin-right: ${props => (props.$isSent ? 'initial' : 'auto')};
`;