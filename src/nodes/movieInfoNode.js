import AbstractNode from "../abstractNode";

export const MovieInfoNode = ({ id, data }) => {
    const handles = {
        left: [
        ],
        right: [
            { type: 'source', id: 'movie-info' },
        ],
    };
    const content = (<div> <span>Search for a movie, and get info from IMDB</span> </div>);
    return (
        <AbstractNode title='Movie Info' handles={handles} content={content} />
    )
}