import AbstractNode from "../abstractNode";

export const TimezoneNode = ({ id, data }) => {
    const handles = {
        left: [],
        right: [
            { type: 'source', id: 'some-id' },
        ],
    };
    const content = (<div> <span>Select a timezone</span> </div>);
    return (
        <AbstractNode title='Timezone' handles={handles} content={content} />
    )
}