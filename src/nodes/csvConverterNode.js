import AbstractNode from "../abstractNode";

export const CsvConverterNode = ({ id, data }) => {
    const handles = {
        left: [
            { type: 'target', id: 'csv-converter-input' },
        ],
        right: [
            { type: 'source', id: 'csv-converter-output' },
        ],
    };
    const content = (<div> <span>Upload a file to convert to csv</span> </div>);
    return (
        <AbstractNode title='CSV Converter' handles={handles} content={content} />
    );
}