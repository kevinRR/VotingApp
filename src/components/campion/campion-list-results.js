import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Router , {useRouter}  from 'next/router';

export const CampionListResults = ({ campions, ...rest }) => {
  const router = useRouter()
 
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
                <TableCell>
                  Canidates
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campions.slice(0, limit).map((campion) => (
                <TableRow
                  hover
                  key={campion.id}
                  selected={selectedCampionIds.indexOf(campion.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCampionIds.indexOf(campion.id) !== -1}
                      onChange={(event) => handleSelectOne(event, campion.id)}
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
                        src={campion.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(campion.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {campion.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {campion.code}
                  </TableCell>
                  {/* <TableCell>
                    {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                  </TableCell> */}
                 
                  <TableCell>
                    {new Date(campion.startDateTime).toLocaleDateString() }{new Date(campion.startDateTime).toLocaleTimeString()}
                  </TableCell>
                  <TableCell>
                  {new Date(campion.endDateTime).toLocaleDateString()} {new Date(campion.endDateTime).toLocaleTimeString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      endIcon={<ArrowRightIcon />}
                      size="small"
                      variant="text"
onClick={() => router.push(`/canidates/${campion?.code}`)}
                    >
                      View Canidates
                    </Button>
                    <Button
                      color="primary"
                      endIcon={<ArrowRightIcon />}
                      size="small"
                      variant="text"
onClick={() => router.push(`/areas/${campion?.code}`)}
                    >
                      View Areas
                    </Button>
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
