import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import {useState, useEffect} from "react"
import { motion } from 'framer-motion';
import withRouter from '@fuse/core/withRouter';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function OtnBroadcastMain(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);




  function handleChangePage(event, value) {
    setPage(value);
  }
  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }
  return (

    <>
      <div className="w-full flex flex-col min-h-full">
        <FuseScrollbars className="grow overflow-x-auto">
          <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">


            <TableBody>

              <TableRow
                className="h-72 cursor-pointer "
                hover
                tabIndex={-1}
                style={{ backgroundColor: 'rgb(238, 238, 238)' }}
              >
                <TableCell className="p-4 md:p-16" component="th" scope="row">
                  <Typography variant="body1  " fontWeight="bold" >

                    #
                  </Typography>
                </TableCell>

                <TableCell className="p-4 md:p-16" component="th" scope="row">
                  <Typography variant="body1 " fontWeight="bold" >

                    Name
                  </Typography>
                </TableCell>

                <TableCell className="p-4 md:p-16" component="th" scope="row">
                  <Typography variant="body1 " fontWeight="bold" >

                    Page name
                  </Typography>
                </TableCell>

                <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                  <Typography variant="body1 " fontWeight="bold" >

                    State
                  </Typography>                </TableCell>

                <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                  <Typography variant="body1 " fontWeight="bold" >

                    Action
                  </Typography>
                </TableCell>

                <TableCell className="p-4 md:p-16" component="th" scope="row">
                  <Typography variant="body1 " fontWeight="bold" >

                    Subscribe
                  </Typography>

                </TableCell>

                <TableCell className="p-4 md:p-16" component="th" scope="row">
                  <Typography variant="body1 " fontWeight="bold" >
                    Sent
                  </Typography>
                </TableCell>

                <TableCell className="p-4 md:p-16" component="th" scope="row">
                  <Typography variant="body1 " fontWeight="bold" >

                    Secheduled at
                  </Typography>
                </TableCell>
                <TableCell className="p-4 md:p-16" component="th" scope="row">
                  <Typography variant="body1 " fontWeight="bold" >

                    Created at
                  </Typography>
                </TableCell>
                <TableCell className="p-4 md:p-16" component="th" scope="row">
                  <Typography variant="body1 " fontWeight="bold" >

                    Labels
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </FuseScrollbars>
        <TablePagination
        className="shrink-0 border-t-1"
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    </>

  );
}

export default withRouter(OtnBroadcastMain);
