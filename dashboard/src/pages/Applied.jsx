import React from 'react';
import Sidenav from '../Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'sno', label: 'S.NO.', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'profile', label: 'Profile', minWidth: 100 },
  { id: 'salary', label: 'Package(in LPA)',minWidth: 170},
  { id: 'date', label: 'Date',minWidth: 170},
  { id: 'status', label: 'Status', minWidth: 170},
];

function createData(sno, name, profile, salary, date, status) {
  return { sno, name, profile, salary, date, status };
}

const rows = [
  createData(1,'Google', 'Software Developer', 64, '16/7/2023' , 'Rejected' ),
  createData(2,'Microsoft', 'Backend Developer', 50, '20/7/2023' ,  'Rejected'),
  createData(3,'Amazon', 'Full Stack Developer', 44, '25/7/2023' ,  'Rejected'),
  createData(4,'Nagaro', 'Jr. Quality Analyst', 8, '31/7/2023' ,  'Rejected'),
  createData(5,'Wipro', 'Tableau', 8, '1/8/2023' ,  'Rejected'),
  createData(6,'TCS', 'Android Developer', 6, '11/8/2023' ,  'Rejected'),
  createData(7,'Airtel', 'Quality Analyst', 5.5, '21/8/2023' , 'Rejected'),
  createData(8,'Flipcart', 'Frontend Developer', 47, '14/9/2023' , 'Rejected'),
  createData(9,'Cloud Analogy', 'Application Support', 3, '5/10/2023' , 'Rejected'),
  createData(10,'Josh Technology', 'Game Developer', 4, '16/10/2023' , 'Rejected'),
  createData(11,'Dhani', 'Jr. Quality Analyst', 4.5, '21/10/2023' , 'Rejected'),
  createData(12,'HCL', 'IOS Developer', 10.5, '15/11/2023' , 'Rejected'),
  createData(13,'Argusoft', 'UI/UX Developer', 7.5, '20/11/2023' , 'Rejected'),
  createData(14,'ACT 21', 'Java Developer', 4, '30/11/2023' , 'Rejected'),
  createData(15,'Sopra Banking', 'Full Stack Developer', 8, '1/12/2023' , 'Rejected'),
];

const Applied = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Navbar/>
      <Box height={40}/>
      <Box sx={{ display: 'flex' }}>
        <Sidenav/>
        <Box component="main" sx={{ flexGrow: 1, p: 6 }}>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5,10,20]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default Applied;