import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, clientes, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>

                <TableCell>
                  Cliente
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              <TableRow

              >

                <TableCell>
                  <Box
                    alignItems="center"
                    display="flex"
                  >
                    <Typography
                      color="textPrimary"
                      variant="body1"
                    >
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>

                </TableCell>
                <TableCell>

                </TableCell>
                <TableCell>

                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  clientes: PropTypes.array.isRequired
};

export default Results;
