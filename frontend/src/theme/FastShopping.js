import { createMuiTheme } from '@material-ui/core/styles';
import background from '../assets/img/Logo.png';
import logo from '../assets/img/Logo.png';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#64D67E',
    },
    secondary: {
      main: '#FF6F00',
    },
  },
  logo,
  colorHeader: '#FFFFFF',  
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      label: {
        fontWeight: 'bold',
      },
    },
    // MuiCssBaseline: {
    //   '@global': {
    //     body: {
    //       backgroundImage: `url(${background})`,
    //     },
    //   },
    // },
  },
});
