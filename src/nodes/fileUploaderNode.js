import AbstractNode from "../abstractNode";

export const FileUploaderNode = ({ id, data }) => {
    const handles = {
        left: [],
        right: [
            { type: 'source', id: 'file-uploader' },
        ],
    };
    const content = (<div> <span>Upload a file</span> </div>);
    return (
        <AbstractNode title='File' handles={handles} content={content} />
    )
}