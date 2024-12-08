import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data.slice(0, 20));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold text-fuchsia-600 ml-4">
        Update Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white"
          >
            <Link to={`/ProductDetails/${product.id}`}>
            
              {/* Product Image */}
              <div className="h-48 w-full overflow-hidden flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Product Info */}
              <h2 className="font-bold text-lg text-gray-800 line-clamp-2 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {product.description}
              </p>
              <p className="text-red-500 font-bold text-lg mb-4">
                Price: ${product.price}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
