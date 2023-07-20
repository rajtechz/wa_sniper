import * as React from 'react';
import { DataGrid, GridOverlay } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    renderCell: (params) => <Avatar>{params.row.firstName[0]}</Avatar>,
    width: 100,
    sortable: false,
  },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Email', headerName: 'Email', width: 130 },
  {
    field: 'FB Id',
    headerName: 'FB Id',
    width: 90,
  },
  {
    field: 'Package',
    headerName: 'Package',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'Status', headerName: 'Status', width: 160 },
  { field: 'Expiry', headerName: 'Expiry', width: 160 },
  { field: 'Action', headerName: 'Action', width: 160 },
  { field: 'Registered', headerName: 'Registered', width: 160 },
  { field: 'Last Login ', headerName: 'Last Login ', width: 90 },
  { field: 'Last ip', headerName: 'Last ip', width: 90 },
];

const rows = [
  {
    id: 1,
    avatar: 'A',
    firstName: 'John',
    lastName: 'Doe',
    Name: 'John Doe',
    Email: 'john.doe@example.com',
    'FB Id': 'johndoe123',
    Package: 'Free',
    Status: 'Active',
    Expiry: '2023-12-31',
    Action: 'Edit',
    Registered: '2023-07-01',
    'Last Login ': '2023-07-15',
    'Last ip': '192.168.0.1',
  },
  {
    id: 2,
    avatar: 'B',
    firstName: 'Jane',
    lastName: 'Smith',
    Name: 'Jane Smith',
    Email: 'jane.smith@example.com',
    'FB Id': 'janesmith456',
    Package: 'Premium',
    Status: 'Inactive',
    Expiry: '2023-08-31',
    Action: 'Delete',
    Registered: '2023-06-25',
    'Last Login ': '2023-07-10',
    'Last ip': '192.168.0.2',
  },
  {
    id: 3,
    avatar: 'C',
    firstName: 'Michael',
    lastName: 'Johnson',
    Name: 'Michael Johnson',
    Email: 'michael.johnson@example.com',
    'FB Id': 'michaeljohnson789',
    Package: 'Premium',
    Status: 'Active',
    Expiry: '2023-12-31',
    Action: 'Edit',
    Registered: '2023-07-01',
    'Last Login ': '2023-07-15',
    'Last ip': '192.168.0.3',
  },
];

const CustomNoRowsOverlay = () => (
  <GridOverlay>No data to display</GridOverlay>
);

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
