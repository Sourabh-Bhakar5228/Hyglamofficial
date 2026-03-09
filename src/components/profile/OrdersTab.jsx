import React from "react";
import { Package, Clock, Truck, CheckCircle } from "lucide-react";

export default function OrdersTab() {
  // Mock data for orders
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-03-15",
      status: "Delivered",
      total: 12999,
      items: [
        { name: "Luxury Silk Saree", quantity: 1, price: 12999, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&auto=format&fit=crop&q=60" }
      ]
    },
    {
      id: "ORD-2024-002",
      date: "2024-02-28",
      status: "Processing",
      total: 5499,
      items: [
        { name: "Designer Handbag", quantity: 1, price: 5499, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&auto=format&fit=crop&q=60" }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered": return "text-green-600 bg-green-50 border-green-200";
      case "Processing": return "text-blue-600 bg-blue-50 border-blue-200";
      case "Cancelled": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered": return <CheckCircle size={16} />;
      case "Processing": return <Clock size={16} />;
      case "Shipped": return <Truck size={16} />;
      default: return <Package size={16} />;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      
      {orders.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
          <Package className="mx-auto text-gray-300 mb-4" size={48} />
          <p className="text-gray-500 font-medium">No orders yet</p>
          <button className="mt-4 text-[#cbb87f] font-semibold hover:underline">Start Shopping</button>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
              {/* Order Header */}
              <div className="bg-gray-50/50 p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <Package size={20} className="text-[#cbb87f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{order.id}</h3>
                    <p className="text-xs text-gray-500">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-2 ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  {order.status}
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-4 last:mb-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg border border-gray-100"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold mt-1">₹{item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm text-gray-500">Total Amount</span>
                <span className="font-bold text-lg">₹{order.total.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
