// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div className='node-container' style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='ytVideo' label='Youtube' />
                <DraggableNode type='timezone' label='Timezone' />
                <DraggableNode type='file' label='File' />
                <DraggableNode type='csv' label='CSV' />
                <DraggableNode type='movie' label='Movie' />
            </div>
        </div>
    );
};
