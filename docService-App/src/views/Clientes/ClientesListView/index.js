import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ClientesListView = () => {
  const classes = useStyles();
  const [clientes] = useState([]);

  return (
    <Page
      className={classes.root}
      title="clientes"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results clientes={clientes} />
        </Box>
      </Container>
    </Page>
  );
};

export default ClientesListView;
