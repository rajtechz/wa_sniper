import * as React from 'react';
import { DataGrid, GridOverlay } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', flex: 1 }, // Use flex for responsive behavior
  { field: 'LastSent', headerName: 'Last Sent', width: 150 },
  { field: 'Campaing', headerName: 'Campaign', flex: 1 }, // Use flex for responsive behavior
  { field: 'Action', headerName: 'Action', width: 120 },
];

const rows = [
  {
    id: 1,
    Name: 'John Doe',
    LastSent: '2023-07-19',
    Campaing: 'Summer Sale',
    Action: 'Edit',
  },
  {
    id: 2,
    Name: 'Jane Smith',
    LastSent: '2023-07-20',
    Campaing: 'Winter Promotion',
    Action: 'Delete',
  },
  // Add more rows as needed
];

const CustomNoRowsOverlay = () => <GridOverlay>No data to display</GridOverlay>;

export default function UserTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
      />
    </div>
  );
}
