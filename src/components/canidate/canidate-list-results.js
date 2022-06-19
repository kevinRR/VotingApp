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
// import { UserCircle as UserCircleIcon } from '../icons/user-circle';


export const CanidateListResults = ({ canidates, ...rest }) => {
  const [selectedCanidateIds, setSelectedCanidateIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCanidateIds;

    if (event.target.checked) {
      newSelectedCanidateIds = canidates.map((canidate) => canidate.id);
    } else {
      newSelectedCanidateIds = [];
    }

    setSelectedCanidateIds(newSelectedCanidateIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCanidateIds.indexOf(id);
    let newSelectedCanidateIds = [];

    if (selectedIndex === -1) {
      newSelectedCanidateIds = newSelectedCanidateIds.concat(selectedCanidateIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCanidateIds = newSelectedCanidateIds.concat(selectedCanidateIds.slice(1));
    } else if (selectedIndex === selectedCanidateIds.length - 1) {
      newSelectedCanidateIds = newSelectedCanidateIds.concat(selectedCanidateIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCanidateIds = newSelectedCanidateIds.concat(
        selectedCanidateIds.slice(0, selectedIndex),
        selectedCanidateIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCanidateIds(newSelectedCanidateIds);
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
                    checked={selectedCanidateIds.length === canidates.length}
                    color="primary"
                    indeterminate={
                      selectedCanidateIds.length > 0
                      && selectedCanidateIds.length < canidates.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                {/* <TableCell>
                  Email
                </TableCell> */}
                <TableCell>
                  Candidate Code
                </TableCell>
                <TableCell>
                Candidate Sign
                </TableCell>
              
              </TableRow>
            </TableHead>
            <TableBody>
              {canidates.slice(0, limit).map((canidate,key) => (
                <TableRow
                  hover
                  key={key}
                  selected={selectedCanidateIds.indexOf(canidate.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCanidateIds.indexOf(canidate.id) !== -1}
                      onChange={(event) => handleSelectOne(event, canidate.id)}
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
                        src={canidate.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(canidate.candidateName)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {canidate.candidateName}
                      </Typography>
                    </Box>
                  </TableCell>
                  {/* <TableCell>
                    {canidate.email}
                  </TableCell> */}
                  <TableCell>
                    {canidate.candidateCode}
                  </TableCell>
                  <TableCell>
                  <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        sx={{
                          height: 40,
                          width: 40,
                          ml: 1
                        }}
                        src={canidate.candidateSign}
                      >
                        {/* <UserCircleIcon fontSize="small" /> */}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {/* {canidate.candidateSign} */}
                      </Typography>
                    </Box>
                  </TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={canidates.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CanidateListResults.propTypes = {
  canidates: PropTypes.array.isRequired
};
