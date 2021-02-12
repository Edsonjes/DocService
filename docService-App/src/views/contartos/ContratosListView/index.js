import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  
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

const ContratosListView = () => {
  const classes = useStyles();
  const [contratos] = useState([]);

  return (
    <Page
      className={classes.root}
      title="Contratos"
    >
      
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results contratos={contratos} />
        </Box>
      </Container>
      
    </Page>
  );
};

export default ContratosListView;