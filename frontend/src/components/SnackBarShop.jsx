import React from 'react';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  success: {
    backgroundColor: green[600],
  },
}));



const SnackBarShop = (props) => {
  const { handleClose, message, open, anchor } = props;
  return (
    <Snackbar
      anchorOrigin={anchor || {
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={message}
    >
    </Snackbar>
  );
};

export default SnackBarShop;

