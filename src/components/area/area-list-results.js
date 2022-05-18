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

export const AreaListResults = ({ areas, ...rest }) => {
  const [selectedAreaIds, setSelectedAreaIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedAreaIds;

    if (event.target.checked) {
      newSelectedAreaIds = areas.map((area) => area.id);
    } else {
      newSelectedAreaIds = [];
    }

    setSelectedAreaIds(newSelectedAreaIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedAreaIds.indexOf(id);
    let newSelectedAreaIds = [];

    if (selectedIndex === -1) {
      newSelectedAreaIds = newSelectedAreaIds.concat(selectedAreaIds, id);
    } else if (selectedIndex === 0) {
      newSelectedAreaIds = newSelectedAreaIds.concat(selectedAreaIds.slice(1));
    } else if (selectedIndex === selectedAreaIds.length - 1) {
      newSelectedAreaIds = newSelectedAreaIds.concat(selectedAreaIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedAreaIds = newSelectedAreaIds.concat(
        selectedAreaIds.slice(0, selectedIndex),
        selectedAreaIds.slice(selectedIndex + 1)
      );
    }

    setSelectedAreaIds(newSelectedAreaIds);
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
                    checked={selectedAreaIds.length === areas.length}
                    color="primary"
                    indeterminate={
                      selectedAreaIds.length > 0
                      && selectedAreaIds.length < areas.length
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
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {areas.slice(0, limit).map((area) => (
                <TableRow
                  hover
                  key={area.id}
                  selected={selectedAreaIds.indexOf(area.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAreaIds.indexOf(area.id) !== -1}
                      onChange={(event) => handleSelectOne(event, area.id)}
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
                        src={area.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(area.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {area.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {area.email}
                  </TableCell>
                  <TableCell>
                    {`${area.address.city}, ${area.address.state}, ${area.address.country}`}
                  </TableCell>
                  <TableCell>
                    {area.phone}
                  </TableCell>
                  <TableCell>
                    {format(area.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={areas.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

AreaListResults.propTypes = {
  areas: PropTypes.array.isRequired
};
