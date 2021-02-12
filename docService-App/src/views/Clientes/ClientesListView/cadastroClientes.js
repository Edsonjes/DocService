import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    makeStyles,
    MenuItem
} from '@material-ui/core';




const useStyles = makeStyles(() => ({
    root: {}
}));

const CadastroClienteDetails = ({ className, ...rest }) => {

    const classes = useStyles();

    const [values, setValues] = useState({
        Nome: '',
        cnpj: '',
        email: '',
        telefone: '',
        nomeResponsavel: '',
        endereço: '',
        Cep: '',
        obs: ''
    });
    const submit = (event) => {

        console.log(`Campos formulari`);
    }


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form
            autoComplete="off"
            noValidate
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Card>
                <CardHeader

                    title="Cadstro de Contratos"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Nome"
                                name="Nome"
                                onChange={handleChange}
                                required
                                value={values.Nome}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Responsavel "
                                name="nomeResponsavel"
                                onChange={handleChange}
                                required
                                value={values.nomeResponsavel}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Email"
                                name="Email"
                                onChange={handleChange}
                                required
                                value={values.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Endereço"
                                name="Endereço"
                                onChange={handleChange}
                                required
                                value={values.endereço}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Telefone"
                                name="telefone"
                                onChange={handleChange}
                                type="number"
                                value={values.telefone}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Cep"
                                name="cep"
                                onChange={handleChange}
                                required
                                value={values.cep}
                                variant="outlined"
                            />
                        </Grid>

                    </Grid>
                </CardContent>
                <Divider />
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    p={2}
                >
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => submit()}
                        type="button"
                    >
                        Salvar
          </Button>
                </Box>
            </Card>
        </form>
    );
};

CadastroClienteDetails.propTypes = {
    className: PropTypes.string
};

export default  CadastroClienteDetails;
