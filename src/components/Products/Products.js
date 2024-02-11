import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);
  const [currentColor, setCurrentColor] = useState('');
  console.log(products[0].sizes[0].name)
  return (
    <section>
      <Product {...products[0]} title={products[0].title} basePrice={products[0].basePrice} currentColor={products[0].colors[0]} currentSize={products[0].sizes[0].name}/>
      <Product {...products[1]} title={products[1].title} basePrice={products[1].basePrice} currentColor={products[1].colors[0]} currentSize={products[1].sizes[0].name}/>
    </section>
  );
};

export default Products;