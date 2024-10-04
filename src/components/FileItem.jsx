/* eslint-disable react/prop-types */
import { FileItemWrapper } from "../styles/fileItem.styles";
import fileIc from "../assets/file.png";

const FileItem = ({ file }) => {
    return (
        <FileItemWrapper $isSent={file.is_sent}>
            <img src={fileIc} alt="file" />
            {file.file_name}
        </FileItemWrapper>
    )
};
export default FileItem;