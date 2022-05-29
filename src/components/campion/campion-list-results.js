import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const CampionListResults = ({ campions, ...rest }) => {
  const [selectedCampionIds, setSelectedCampionIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCampionIds;

    if (event.target.checked) {
      newSelectedCampionIds = campions.map((campion) => campion.id);
    } else {
      newSelectedCampionIds = [];
    }

    setSelectedCampionIds(newSelectedCampionIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCampionIds.indexOf(id);
    let newSelectedCampionIds = [];

    if (selectedIndex === -1) {
      newSelectedCampionIds = newSelectedCampionIds.concat(selectedCampionIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCampionIds = newSelectedCampionIds.concat(selectedCampionIds.slice(1));
    } else if (selectedIndex === selectedCampionIds.length - 1) {
      newSelectedCampionIds = newSelectedCampionIds.concat(selectedCampionIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCampionIds = newSelectedCampionIds.concat(
        selectedCampionIds.slice(0, selectedIndex),
        selectedCampionIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCampionIds(newSelectedCampionIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCampionIds.length === campions.length}
                    color="primary"
                    indeterminate={
                      selectedCampionIds.length > 0
                      && selectedCampionIds.length < campions.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Code
                </TableCell>
                <TableCell>
                  Start Date
                </TableCell>
                <TableCell>
                  End Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campions.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCampionIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCampionIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={customer.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.code}
                  </TableCell>
                  {/* <TableCell>
                    {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                  </TableCell> */}
                 
                  <TableCell>
                    {format(customer.startDate, 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell>
                    {format(customer.endDate, 'dd/MM/yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={campions.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CampionListResults.propTypes = {
  campions: PropTypes.array.isRequired
};
