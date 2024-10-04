import styled from "styled-components";
import { MessageWrapper } from "./chatMessage.styles";

export const FileItemWrapper = styled(MessageWrapper)`
    border: 1px solid black;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
    &:hover {
        background-color: #ddd;
    }
`;