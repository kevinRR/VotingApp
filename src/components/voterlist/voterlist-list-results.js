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
import { voterlists } from 'src/__mocks__/voterlists';

export const VoterListResults = ({ voterlists, ...rest }) => {
  const [selectedVoterIds, setSelectedVoterIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedVoterIds;

    if (event.target.checked) {
      newSelectedVoterIds = voterlists.map((voterlist) => voterlist.id);
    } else {
      newSelectedVoterIds = [];
    }

    setSelectedVoterIds(newSelectedVoterIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedVoterIds.indexOf(id);
    let newSelectedVoterIds = [];

    if (selectedIndex === -1) {
      newSelectedVoterIds = newSelectedVoterIds.concat(selectedVoterIds, id);
    } else if (selectedIndex === 0) {
      newSelectedVoterIds = newSelectedVoterIds.concat(selectedVoterIds.slice(1));
    } else if (selectedIndex === selectedVoterIds.length - 1) {
      newSelectedVoterIds = newSelectedVoterIds.concat(selectedVoterIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedVoterIds = newSelectedVoterIds.concat(
        selectedVoterIds.slice(0, selectedIndex),
        selectedVoterIds.slice(selectedIndex + 1)
      );
    }

    setSelectedVoterIds(newSelectedVoterIds);
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
                    checked={selectedVoterIds.length === voterlists.length}
                    color="primary"
                    indeterminate={
                      selectedVoterIds.length > 0
                      && selectedVoterIds.length < voterlists.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Code
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {voterlists.slice(0, limit).map((voterlist) => (
                <TableRow
                  hover
                  key={voterlist.id}
                  selected={selectedVoterIds.indexOf(voterlist.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedVoterIds.indexOf(voterlist.id) !== -1}
                      onChange={(event) => handleSelectOne(event, voterlist.id)}
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
                        src={voterlist.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(voterlist.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {voterlist.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {voterlist.email}
                  </TableCell>
                  <TableCell>
                    {`${voterlist.address.city}, ${voterlist.address.state}, ${voterlist.address.country}`}
                  </TableCell>
                  <TableCell>
                    {voterlist.phone}
                  </TableCell>
                  <TableCell>
                    {format(voterlist.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={voterlists.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

VoterListResults.propTypes = {
  voterlists: PropTypes.array.isRequired
};
