import { FaStarHalfAlt } from "react-icons/fa";

const ProductDetails = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-white shadow-md rounded-md">
      <div className="flex-1 flex justify-center items-center border rounded-lg p-4">
        <img
          src="/images/jut.jpg"
          alt="product-image"
          className="max-h-64 w-full object-contain"
        />
      </div>

      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-semibold leading-tight bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
          Room slippers winter warm room slippers winter shoes house shoes for
          men / women
        </h1>

        <div className="flex items-center gap-4">
          {/* Star Ratings */}
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <FaStarHalfAlt key={index} />
            ))}
          </div>
          <div className="text-blue-600 text-sm">
            <span>1165 Ratings</span> | <span>176 Answered Questions</span>
          </div>
        </div>

        <div>
          <p className="text-gray-600 font-bold">Brand: No Brand</p>
          <div className="flex items-center space-x-4">
            <span className="text-red-500 text-3xl font-bold">৳ 80</span>
            <span className="line-through text-gray-500">৳ 220</span>
            <span className="text-green-600 text-lg font-bold">-64%</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p className="font-semibold text-gray-600">Quantity:</p>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 border border-gray-300 rounded-md bg-gray-100 text-gray-600">
              +
            </button>
            <span>0</span>
            <button className="px-2 py-1 border border-gray-300 rounded-md bg-gray-100 text-gray-600">
              -
            </button>
            <span className="text-red-500 font-semibold">Out of stock</span>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-red-600 transition">
            Buy Now
          </button>
          <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex-1 text-gray-700 space-y-2">
        <h3 className="text-lg font-medium text-gray-800">Delivery</h3>
        <p>Fast and reliable delivery services across the country.</p>
        <p>
          <span className="font-semibold">Shipping Fee:</span> ৳ 40
        </p>
        <p>
          <span className="font-semibold">Estimated Delivery:</span> 3-5
          Business Days
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
