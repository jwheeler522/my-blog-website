<<<<<<< HEAD
import React from 'react';

const RelatedProducts = ({ products }) => {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4">Related Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <a 
            key={index}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4"
          >
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img src={product.image} alt={product.name} className="object-cover rounded" />
            </div>
            <h4 className="font-bold mb-2">{product.name}</h4>
            <p className="text-red-600 dark:text-red-400">${product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
=======
import React from 'react';

const RelatedProducts = ({ products }) => {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4">Related Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <a 
            key={index}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4"
          >
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img src={product.image} alt={product.name} className="object-cover rounded" />
            </div>
            <h4 className="font-bold mb-2">{product.name}</h4>
            <p className="text-red-600 dark:text-red-400">${product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
>>>>>>> 1b1e9e5396a10c00e925cce370ac6724f53e72c3
