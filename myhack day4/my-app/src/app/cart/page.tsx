"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ICartProduct {
  title: string;
  price: string;
  id: number;
  img_url: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<ICartProduct[]>([ 
    { title: "T-SHIRT WITH TAPE DETAILS", id: 1, price: "$140", img_url: "/product1.png" },
    { title: "SKINNY FIT JEANS", id: 2, price: "$120", img_url: "/product2.png" },
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-blue-600 font-medium">{item.price}</p>
              </div>
              <Image src={item.img_url} alt={item.title} width={60} height={60} className="rounded-md" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">Your Cart is Empty. Please Add Products</p>
      )}

      {/* Checkout Button */}
      {cart.length > 0 && (
        <div className="mt-6 text-center">
          <Link href="/checkout">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 text-lg">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
