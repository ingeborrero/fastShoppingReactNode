import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SnackBarShop from '../../components/SnackBarShop';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    margin: 0,
    padding: '0 155px 0',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.colorHeader,
  },
  logo: {
    maxWidth: 100,
  },
}));

const Header = (props) => {
  const history = useHistory();
  const {
    cart, items,
  } = props;
  const theme = useTheme();
  const classes = useStyles();
  const [openSnack, setOpenSnack] = useState(false);

  const handleClicShopping = (e) => {  
    if(items <= 0) {
      setOpenSnack(true);
      return;
    }  
    history.push('/cart');
  };

  const handleCloseSnack= () => {
    setOpenSnack(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <img src={theme.logo} alt="logo" className={classes.logo} />
          </Link>
          <Box display="flex">
            <IconButton>
              <Badge
                color="primary"
                badgeContent={items}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <ShoppingCartIcon onClick={(e) => handleClicShopping()} />
              </Badge>
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton title="Developer: Jorge Borrero  | www.linkedin.com/in/jborrero">
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        message="Empty Cart. Please add products"
        />
    </>
  );
};


const mapStateToProps = ({ productlist }) => ({
  cart: productlist.cart,
  items: productlist.cart.length  
});

export default connect(mapStateToProps, null)(Header);

