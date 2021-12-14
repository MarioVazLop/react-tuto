import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/counter/Counter';
import useStyles from './products-satyle';

const Products = () => {
  const navigate = useNavigate();
  const classes = useStyles();


  const onClickButton = () => {
    navigate('details');
  };

  return (
    <div className={classes.container}>
      <Typography>Soy la página de productos</Typography>
      <Button onClick={onClickButton}>Ve a la página de detalles</Button>
      <Counter />
    </div>
  );
};

export default Products;
