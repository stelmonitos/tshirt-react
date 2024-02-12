import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const getPrice = () => {
    const size = props.sizes.find(size => size.name === currentSize);
    const additionalPrice = size ? size.additionalPrice : 0;
    return props.basePrice + additionalPrice;
  }

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);



  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm sizes={props.sizes} colors={props.colors} currentSize={currentSize} setCurrentSize={setCurrentSize} currentColor={currentColor} setCurrentColor={setCurrentColor} title={props.title} getPrice={getPrice} />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  currentColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};
export default Product;

