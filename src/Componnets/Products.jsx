import React, { useState, useEffect } from 'react';
import Product from './Product';

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => { return res.json()})
      .then(data =>{ 
        setData(data)
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <div id="products" className="contiener">
        
        {data.map((product, i) => (
          [data.length>0? <Product key={crypto.randomUUID()} {...product} />: <p>no product</p>]
      ))}
      </div>
    </>
  ); 
}

export default Products;