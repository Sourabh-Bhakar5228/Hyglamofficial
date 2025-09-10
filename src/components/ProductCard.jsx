import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddCart, onAddWishlist }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="text-lg font-bold">₹{product.price}</div>
          <div className="text-sm text-gray-600">Rating: {product.rating}</div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Link
            to={`/product/${product.id}`}
            className="text-indigo-600 text-sm"
          >
            View
          </Link>
          <button
            onClick={() => onAddCart(product)}
            className="px-3 py-1 border rounded"
          >
            Add Cart
          </button>
          <button
            onClick={() => onAddWishlist(product)}
            className="px-3 py-1 border rounded"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
