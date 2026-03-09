import { Link } from "react-router-dom";
import { ChevronRight, ShoppingCart } from "lucide-react";

export default function ProductCard({ product, onAddCart, onAddWishlist }) {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/5 overflow-hidden hover:border-gold-500/50 transition-all duration-500 flex flex-col group p-4">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <h3 className="text-lg font-bold text-white group-hover:text-gold-500 transition-colors mb-1">
        {product.name}
      </h3>
      <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
        {product.description}
      </p>

      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
        <div>
          <div className="text-gold-500 font-extrabold text-lg">₹{product.price}</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Rating: {product.rating} ★</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onAddCart(product)}
            className="p-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all active:scale-90"
            title="Add to Cart"
          >
            <ShoppingCart size={16} />
          </button>

          <Link
            to={`/product/${product.id}`}
            className="flex items-center gap-1 text-white hover:text-gold-500 text-xs font-bold transition-colors group/link"
          >
            Explore
            <ChevronRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
