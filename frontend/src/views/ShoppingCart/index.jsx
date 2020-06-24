import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const formatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 16,
    padding: '40px 120px 40px',
  },
  card: {    
    borderRadius: 16,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    justifyContent: 'space-between',
  },
  cardContent: {
      padding: 0,
  },
  cardHeader: {
    backgroundRepeat: 'no-repeat',
    height: '140px',
    padding: '11px 20px 0',
    color: 'white',
  },
  cardList: {
    padding: 15,
    fontSize: '16px',
    letterSpacing: '0px',
    lineheight: 1,
  },
  addToCartButton: {
    width: 37,
    minWidth: 0,
  },
  itemText: {
    fontWeight: 700,
  },
  divOrder: {
    //margin: theme.spacing(1),
    //minWidth: 120,
    //float: 'right',
    display: 'flex',
    justifyContent: 'space-between',
    margin :0 
  },
}));

const CleanCart = (cart) => {
    const cartClean = {};
    cart.forEach((element) => {
      if (cartClean.hasOwnProperty(element.product_id)) {
        cartClean[element.product_id] = {
          ...cartClean[element.product_id],
          number: cartClean[element.product_id].number + 1,
        };
      } else {
        cartClean[element.product_id] = {
          id: element.product_id,
          name: element.product_name,
          number: 1,
          price: element.price,
        };
      }
    });
    return Object.values(cartClean);
  };

  const handleDeleteItem = (id) => {
    console.log(id)
  };

  const getSubtotal = (cart) => formatter.format(
    cart.reduce(
      (previousValue, currentValue) => (
        (currentValue.price * currentValue.number) + previousValue
      ), 0,
    ),
  );

const ShoppingCart = (props) => {
  const classes = useStyles();
  const { cart, loading } = props;

  const cartClean = CleanCart(cart);

  useEffect(() => {
   // Here,I can load localStore with data cart to persistent order
  }, []);

  return (
    <>
    <Box className={classes.root}>
      <div className={classes.divOrder}>
        <Button variant="contained" color="primary">
          Check Out
          <ShoppingCartIcon />
        </Button>
      </div>
      <Card className={classes.card}>
        <CardContent>
          <List dense disablePadding>
            { cartClean.map((item) => (
              <ListItem
                key={item.id}
                divider
                dense
                disableGutters
              >
                <ListItemText
                  // className={{ primary: classes.itemText }}
                  primary={`${item.name} x ${item.number}`}
                  secondary={`${formatter.format(item.price)} x ${item.number}`}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
            <ListItem
              key="cartMenu-popover-subtotal"
              disableGutters
            >
              <ListItemText
                primary="Subtotal"
                secondary={getSubtotal(cartClean)}
              />
            </ListItem>
          </List>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button variant="contained" color="primary">
                Check Out
            <ShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
      <Link to="/">
        <span>Continue shopping</span>
      </Link>
    </Box>
    </>
  );
};


const mapStateToProps = ({ productlist }) => ({
    cart: productlist.cart,
    items: productlist.cart.length  
  });

export default connect(mapStateToProps, null)(ShoppingCart);
