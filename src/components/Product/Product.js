import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {

  const addToCard = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=======================');
    console.log('Name:', props.title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Colours:', currentColor);
  }

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
    const size = props.sizes.find(size => size.name === currentSize);
    const additionalPrice = size ? size.additionalPrice : 0;
    return props.basePrice + additionalPrice;
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => (
                <li>
                  <button
                    type='button'
                    className={size.name === currentSize ? styles.active : ''}
                    onClick={() => setCurrentSize(size.name)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                      {props.colors.map(color => (
                      <li>
                        <button
                          type='button' 
                          className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} 
                          onClick={() => setCurrentColor(color) }
                        ></button>
                      </li>))}
                    </ul>
                  </div>
                  <form onClick={addToCard}>
                  <Button className={styles.button}>
                    <span  className="fa fa-shopping-cart" />
                  </Button>
                  </form>
                </form>
              </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  currentColor: PropTypes.string.isRequired,
};
export default Product;

