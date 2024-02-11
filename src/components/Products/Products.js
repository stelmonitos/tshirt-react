import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => 
        <Product key={product.id}{...product} 
          currentColor={product.colors[0]} 
          currentSize={product.sizes[0].name}
        />
      )}
    </section>
  );
};

export default Products;