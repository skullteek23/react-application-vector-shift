import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogTemplate } from "./dialogTemplate";

export const ResultDialog = ({ open, onClose, data }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} className='mui-dialog-custom'>
            <DialogContent>
                <DialogContentText>
                    <DialogTemplate data={data} />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <div className="button-container">
                    <button onClick={handleClose} className='primary-button'>Close</button>
                </div>
            </DialogActions>
        </Dialog>
    );
};