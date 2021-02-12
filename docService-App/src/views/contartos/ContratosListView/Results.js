import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Button,
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

const Results = ({ className, contratos, ...rest }) => {
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
                                    Nº Contrato
                </TableCell>
                                <TableCell>
                                    CLiente
                </TableCell>
                                <TableCell>
                                    Data fim
                </TableCell>
                                <TableCell>
                                    Data do Vencimento
                </TableCell>
                                <TableCell>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                

                                <TableCell>
                                    <Button color="primary">Editar</Button>
                                    <Button color="secondary">Excluir</Button>
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
    contratos: PropTypes.array.isRequired
};

export default Results;
