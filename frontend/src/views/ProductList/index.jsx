import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ProductCard from '../../components/Card';
import { getProductsAction } from '../../actions/productList.action';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '40px 120px 40px',
    overflowX: 'hidden',
  },
  paper: {
    padding: '28px 84px 28px',
    maxHeight: 600,
    height: 600,
  },  
  divOrder: {
    marginRight: theme.spacing(15),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    float: 'right',
  },
}));



const ProductList = (props) => {
  const classes = useStyles();
  const { products, loading, getProducts } = props;

  const [order, setValueOrder] = useState('A')
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleChange = (event) => {
    setValueOrder(event.target.value);
  };

  // console.log(products)
  //if (loading) return <Loading />;
  return (
    <>
      <div className={classes.divOrder}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={order}
            onChange={handleChange}
          >              
            <MenuItem value={'A'}>Alpha Order</MenuItem>
            <MenuItem value={'P'}>Lowest Price</MenuItem>
            <MenuItem value={'M'}>Most Recent</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={false} sm={1}/>
        <Grid item xs={12} sm={10}>
          <Grid container spacing={5}>  
          {  
          products && (
            products.map((itemProd) => (
              <Grid xs={12} sm={6} item>
                <ProductCard card={itemProd} />
              </Grid>
            ))
            )}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1}/>
      </Grid>
    </>
  );
};


const mapStateToProps = ({ productlist }) => ({
  loading: productlist.loading,
  products: productlist.products,
});

const mapDispatchToProps = {
  getProducts: getProductsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
