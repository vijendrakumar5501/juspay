// TopSellingProducts.jsx
import React from "react";

const products = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const TopSellingProducts = () => {
  return (
    <div className="bg-white p-6 rounded-lg  relative z-10">
      <h3 className="text-sm font-semibold mb-4">Top Selling Products</h3>
      <table className="w-full text-left">
        <thead className="text-gray-500 text-xs border-b">
          <tr>
            <th className="pb-2">Name</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Quantity</th>
            <th className="pb-2">Amount</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {products.map((p) => (
            <tr key={p.name} className="">
              <td className="py-2">{p.name}</td>
              <td className="py-2">{p.price}</td>
              <td className="py-2">{p.quantity}</td>
              <td className="py-2">{p.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
