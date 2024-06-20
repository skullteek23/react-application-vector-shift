import AbstractNode from "../abstractNode";

export const YoutubeLoaderNode = ({ id, data }) => {
    const handles = {
        left: [
        ],
        right: [
            { type: 'source', id: 'some-id' },
        ],
    };
    const content = (<div> <span>Enter YT Video link to download video. </span> </div>);
    return (
        <AbstractNode title='Youtube Video' handles={handles} content={content} />
    )
}