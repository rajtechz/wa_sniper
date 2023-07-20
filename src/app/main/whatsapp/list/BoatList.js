import React from 'react';
import { Button } from '@material-ui/core';
import { WhatsApp } from '@material-ui/icons';

function Boatlist() {
  return (
    <>
      <p className='h3 font-weight-bold text-capitalize flex container justify-center items-start mt-4'>You have not connected yet</p>

      <div className='flex container justify-center items-start mt-4'>
        <div>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: '#25D366',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 20px',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background-color 0.3s'
              }}
              
              startIcon={<WhatsApp style={{ marginRight: '10px' }} />}
            >
              Connect with WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Boatlist;
