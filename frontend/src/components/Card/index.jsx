import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addToCartAction } from '../../actions/productList.action';

const formatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: 220,
  },
  media: {
    height: 140,
  },
  cover: {
    maxWidth: 180,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardactions: {
    display: 'inline',
  },
  boxPrice: {
    float: 'right',
  },
});

const ProductCard = (props) => {
  const classes = useStyles();
  const { 
    product_name, 
    product_info, 
    product_image_url, 
    category_name, 
    price, 
    card, 
    addToCart,
  } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        component="img"
        alt="Image product"
        height="130"
        image={card.product_image_url}
        title="Fast Shopping by Jorge Borrero"
        />
      <CardContent>
      <div className={classes.details}>
        <Typography gutterBottom variant="h6" component="h4">
          {card.product_name}
        </Typography>
        <Typography variant="subtitle1" >
          {card.category_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {card.product_info}
        </Typography>
      </div>
    <CardActions className={classes.cardactions}>
      <Button 
       variant="contained" 
       size="small" 
       color="primary"
       onClick={() => addToCart(card)}
      >
        Add to Cart
      </Button>
      <Typography inline variant="BUTTON TEXT" className={classes.boxPrice}>
          <span>{` ${formatter.format(card.price)}`}</span>
      </Typography>
    </CardActions>
    </CardContent>
  </Card>
  )
}


const mapDispatchToProps = {
  addToCart: addToCartAction,
};

export default connect(null, mapDispatchToProps)(ProductCard);