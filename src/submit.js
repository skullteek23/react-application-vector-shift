// submit.js

import { useState } from 'react';

import { ResultDialog } from './dialog/resultDialog';
import { useStore } from './store';
import { apiClient } from './api';

export const SubmitButton = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [data, setResponseData] = useState();

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleResponse = (data) => {
        setResponseData(data);
    };

    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const savePipeline = async () => {
        if (!nodes?.length) {
            return;
        }
        const pipeline = { nodes, edges };

        try {
            const response = await apiClient.post('/pipeline/parse', pipeline);
            handleResponse(response.data);
            handleOpenDialog();
        } catch (error) {
            console.error('Error submitting pipeline:', error);
        }
    };

    return (
        <>
            <div className="button-container">
                <button className="primary-button" type="submit" disabled={!nodes.length} onClick={savePipeline}>Submit</button>
            </div>
            <ResultDialog open={dialogOpen} onClose={handleCloseDialog} data={data} />
        </>
    );
}
