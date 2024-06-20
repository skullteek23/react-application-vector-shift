import React from 'react';

export const DialogTemplate = ({ data }) => {
    return (
        <span className='dialog-template'>
            <span className='text-container'>
                <span className='value'>{data.num_nodes}</span>
                <span className='label'>Nodes</span>
            </span>
            <span className='text-container'>
                <span className='value'>{data.num_edges}</span>
                <span className='label'>Edges</span>
            </span>
            <span className='text-container'>
                <span className='value'>{data.is_dag ? 'Yes' : 'No'}</span>
                <span className='label'>Is Pipeline DAG?</span>
            </span>
        </span>
    )
}
