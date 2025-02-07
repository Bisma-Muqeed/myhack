"use client"; 

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

// Product Interface
interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

// Sample Products
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

// Adding key prop in star array
let star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

export default function Products() {
  const [cart, setCart] = useState<Iproducts[]>([]);

  // Add Product to Cart
  const addToCart = (product: Iproducts) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10 space-y-6 md:space-y-0 md:space-x-6">
        {/* Map over products */}
        {product.map((data) => {
          return (
            <div
              key={data.id}
              className="w-[190px] h-[250px] md:w-[290px] md:h-[290px] bg-[#F0EEED] rounded-[20px] p-4 flex flex-col items-center space-y-2"
            >
              <Link href={`/products/${data.id}`}>
                <div className="w-full h-full bg-[#F0EEED] rounded-[20px]">
                  <Image
                    src={data.img_url}
                    alt={data.title}
                    className="w-full h-full rounded-[20px]"
                    width={100}
                    height={100}
                  />
                </div>
              </Link>

              <p className="text-lg mt-2 font-bold">{data.title}</p>
              <div className="flex text-yellow-400">
                {star.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
              <p className="font-bold mt-1">
                {data.price}{" "}
                {data.old_price && (
                  <span className="text-gray-400 font-bold line-through">
                    {" "}
                    {data.old_price}
                  </span>
                )}
              </p>

              {/* Add to Cart Button */}
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addToCart(data)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* Cart Summary */}
      <div className="mt-12 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm rounded-md p-2"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-600">{item.price}</p>
                </div>
                <Image
                  src={item.img_url}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">Your Cart is Empty. Please Add Products</p>
        )}
      </div>
    </div>
  );
}
