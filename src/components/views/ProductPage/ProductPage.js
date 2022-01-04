import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import clsx from 'clsx';

import { getById } from '../../../redux/productsRedux.js';
import { addToCart } from '../../../redux/cartRedux.js';
import { Button } from './../../common/Button/Button';
import { SingleProductQtyWidget } from './../../features/SingleProductQtyWidget/SingleProductQtyWidget';
import { NotFound } from '../NotFound/NotFound.js';

import styles from './ProductPage.module.scss';


const Component = ({className, product, _id, name, price, img1, addToCart, decoration, colours }) => {

  const [productQty, setProductQty] = React.useState(1);
  
  const history = useHistory();

  function redirectToHomePage() {
    history.push('/');
  }
  
  if (product.length === 0) {
    return (
      <NotFound />
    );
  } else {
    product = product[0];
    return (
      <div className={clsx(className, styles.root)}>
        <div className="container">
          <div className="row">
  
            <div className='col-5'>
              <div className={styles.photoContainer}>
                <img className={styles.photo} src={product.img1} alt='Main Product Photo here' />
              </div>
  
              <div className={'row ' + styles.sliderBox}>
                <div className={'col-2 ' + styles.photoContainerMini}>
                  <img className={styles.photoMini} src={product.img2} alt='' />
                </div>
                <div className={'col-2 ' + styles.photoContainerMini}>
                  <img className={styles.photoMini} src={product.img3} alt='' />
                </div>
                <div className={'col-2 ' + styles.photoContainerMini}>
                  <img className={styles.photoMini} src={product.img4} alt='' />
                </div>
                <div className={'col-2 ' + styles.photoContainerMini}>
                  <img className={styles.photoMini} src={product.img5} alt='' />
                </div>
              </div>
            </div>
  
            <div className={'col-7 ' + styles.pageColumnRight}>
              <div className={'container ' + styles.productInfoContainer}>
                <div className='row'>
                  <div className={'col-6 ' + styles.productIntro}>
                    <h4>{product.name}</h4>
                  </div>
                  <div className={'col ' + styles.productIntro}>
                    <p><strong>Price from</strong></p>
                    <p><strong>{`$${product.price}`}/each </strong></p>
                  </div>
                  <Link className={'col ' + styles.productIntro} to={`/underConstruction/`}>
                    <Button className={styles.addQuantity} variant='main-long'>
                      Check for price details
                    </Button>
                  </Link>
                </div>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <div className='row'>
                  <p><strong>Category:</strong> {product.category}</p>
                </div>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <p className={styles.overview}><strong>Description</strong></p>
                <p className={styles.description}>
                  {product.description}
                </p>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <p className={styles.overview}><strong>Dimentions: </strong></p>
                <p>{product.dimentions}</p>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <p className={styles.overview}><strong>Colours: </strong></p>
                <p>{product.colours}</p>
              </div>
  
              <div className={'container ' + styles.decoration}>
                <p className={styles.overview}><strong>Decoration method: </strong></p>
                <p>{product.decoration}</p>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <div className={'row ' + styles.addQuantity}>
                  <p><strong>Availability:</strong> {product.availability}</p>
                  <p><strong>Choose Quantity:</strong></p>

                  <SingleProductQtyWidget 
                    className={styles.addQuantity} 
                    qty={productQty} 
                    qtyUp={() => setProductQty(productQty + 1)} 
                    qtyDown={() => setProductQty(productQty > 1 ? productQty - 1 : 1)} 
                  />

                  <Button 
                    className={styles.addQuantityButton} 
                    variant='main-long' 
                    onClick={() => {
                      addToCart({...product, qty: productQty});
                      redirectToHomePage();
                    }}
                  >
                    Add to basket
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Component.propTypes = {
  className: PropTypes.string,
  product: PropTypes.array,
  addToCart: PropTypes.func,
  _id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  img1: PropTypes.string,
  decoration: PropTypes.string,
  colours: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  product: getById(state, props.match.params.productId),
});

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ProductPage,
  Component as ProductPageComponent,
};