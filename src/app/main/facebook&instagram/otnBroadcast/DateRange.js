import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';

import EventIcon from '@material-ui/icons/Event';

export default function DateRange() {
    const [openModal, setOpenModal] = useState(false);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    

    const handleOpenModal = () => {
        setOpenModal(true);
      };
      
      const handleCloseModal = () => {
        setOpenModal(false);
      };
      

    const handleStartDateChange = date => {
        setStartDate(date);
        console.log(date)
      };
      
      const handleEndDateChange = date => {
        setEndDate(date);
        console.log(date)
      };
      
  return (
    <>
    
    <div>
    <Button onClick={handleOpenModal} startIcon={<EventIcon />}>
      Select Date Range
    </Button>
    <Dialog open={openModal} onClose={handleCloseModal}>
      <DialogTitle>Select Date Range</DialogTitle>
      <DialogContent>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change start date',
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="End Date"
            value={endDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change end date',
            }}
          />
        </MuiPickersUtilsProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCloseModal} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  </div>

    </>
  )
}
