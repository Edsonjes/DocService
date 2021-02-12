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

const clientes = [
    {
        value: '0',
        label: 'OAB'
    },
    {
        value: '1',
        label: 'Senar'
    },
    {
        value: '2',
        label: 'Regius'
    }
];

const servicos= [
    {
        value: '0',
        label: 'Desenvolvimento e Análise'
    },
    {
        value: '1',
        label: 'Implantação'
    },
    {
        value: '2',
        label: 'Treinamento'
    },
    {
        value: '2',
        label: 'Outros'
    },


]

const useStyles = makeStyles(() => ({
    root: {}
}));

const CadastroDetails = ({ className, ...rest }) => {
   
    const classes = useStyles();
    
    const [values, setValues] = useState({
        cliente: '',
        cnpj: '',
        email: '',
        telefone: '',
        nomeResponsavel: '',
        tipoDeServico: '',
        licenca: '',
        capp:'',
        cappQTD: '',
        cappValor: '',
        valorServico: '',
        cep: '',
        endereco: '',
        dataIncio: '',
        dataFim: '',
        obs: '',
        locacao:''

        
    });
    const submit = (event) =>{
       
        console.log(`Campos formulario: ${values}`);
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
                                label="Cliente"
                                name="cliente"
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={values.clientes}
                                variant="outlined"
                            >
                                {clientes.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
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
                                label="Cappservice "
                                name="capp"
                                onChange={handleChange}
                                required
                                value={values.capp}
                                variant="outlined"
                            >
                                
                            </TextField>
                        </Grid>
                      
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Licença de Uso "
                                name="licenca"
                                onChange={handleChange}
                                required
                                value={values.licenca}
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
                                label="Quantidade"
                                name="cappQTD"
                                onChange={handleChange}
                                required
                                value={values.cappQTD}
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
                                label="Valor"
                                name="cappValor"
                                onChange={handleChange}
                                required
                                value={values.cappValor}
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
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Locação"
                                name="locacao"
                                onChange={handleChange}
                                required
                                value={values.locacao}
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
                                label="Tipo de Serviço"
                                name="tipoDeServico"
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={values.tipoDeServico}
                                variant="outlined"
                            >
                                {servicos.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
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

CadastroDetails.propTypes = {
    className: PropTypes.string
};

export default CadastroDetails;
