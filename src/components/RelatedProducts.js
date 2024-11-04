<<<<<<< HEAD
import React from 'react';

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) return null;
  
  return (
    <div className="my-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Recommended Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <a 
            key={index}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex flex-col bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4"
          >
            {product.image && product.image.childImageSharp && (
              <GatsbyImage 
                image={getImage(product.image)} 
                alt={product.name} 
                className="mb-2 rounded" 
              />
            )}
            <h4 className="font-bold text-lg mb-2">{product.name}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
            <p className="text-red-600 dark:text-red-400 font-bold mt-auto">${product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

=======
import React from 'react';

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) return null;
  
  return (
    <div className="my-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Recommended Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <a 
            key={index}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex flex-col bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4"
          >
            {product.image && product.image.childImageSharp && (
              <GatsbyImage 
                image={getImage(product.image)} 
                alt={product.name} 
                className="mb-2 rounded" 
              />
            )}
            <h4 className="font-bold text-lg mb-2">{product.name}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
            <p className="text-red-600 dark:text-red-400 font-bold mt-auto">${product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

>>>>>>> 1b1e9e5396a10c00e925cce370ac6724f53e72c3
export default RelatedProducts;