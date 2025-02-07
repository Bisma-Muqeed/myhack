"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

let product: Iproducts[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$140",
    img_url: "/product1.png",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$120",
    img_url: "/product2.png",
    old_price: "$200",
  },
  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$120",
    img_url: "/product3.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$120",
    img_url: "/product4.png",
    old_price: "$200",
  },
];

let star = [
  <FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />,
];

export default function Products() {
  const [cart, setCart] = useState<Iproducts[]>([]);

  const addToCart = (product: Iproducts) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="w-full h-full mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>

      <div className="flex flex-wrap justify-center gap-6 px-8 mt-10">
        {product.map((data) => (
          <div key={data.id} className="w-[220px] md:w-[280px] bg-gray-100 rounded-lg p-4 shadow-md">
            <Link href={`/products/${data.id}`}>
              <div className="w-full h-[180px] flex justify-center items-center">
                <Image src={data.img_url} alt={data.title} width={150} height={150} className="rounded-lg" />
              </div>
            </Link>

            <p className="text-lg mt-2 font-bold">{data.title}</p>
            <div className="flex text-yellow-400">{star}</div>
            <p className="font-bold mt-1 text-lg">
              {data.price} {data.old_price && (
                <span className="text-gray-500 line-through text-sm ml-2">{data.old_price}</span>
              )}
            </p>

            <button
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => addToCart(data)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary (Moved Above Footer) */}
      <div className="mt-12 w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm">
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-blue-600 font-medium">{item.price}</p>
                </div>
                <Image src={item.img_url} alt={item.title} width={50} height={50} className="rounded-md" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Your Cart is Empty. Please Add Products</p>
        )}
        
        {/* Go to Cart Page Button */}
        <div className="mt-6 text-center">
          <Link href="/cart">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
