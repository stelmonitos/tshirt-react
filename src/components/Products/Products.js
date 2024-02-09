import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      <Product {...products[0]} title={products[0].title} basePrice={products[0].basePrice}/>
      <Product {...products[1]} title={products[1].title} basePrice={products[1].basePrice}/>
    </section>
  );
};

export default Products;