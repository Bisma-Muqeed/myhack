"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
    items: [
      { productName: "T-shirt", quantity: 2, price: 120 },
      { productName: "Jeans", quantity: 1, price: 200 },
    ],
    total: 440,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send form data to the custom API route
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Order successfully placed!");
        setFormData({
          customerName: "",
          email: "",
          address: "",
          paymentMethod: "credit-card",
          items: [],
          total: 0,
        });
      } else {
        alert(`⚠️ Failed to place order! ${data.message}`);
      }
    } catch (error) {
      console.error("❌ Error sending order:", error);
      alert("⚠️ Failed to place order!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout Page</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Shipping Address
            </label>
            <textarea
              id="address"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            ></textarea>
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
            >
              <option value="credit-card">💳 Credit Card</option>
              <option value="paypal">🅿️ PayPal</option>
              <option value="cod">💵 Cash on Delivery</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Processing..." : "Confirm Order"}
          </button>
        </form>
      </div>
    </div>
  );
}
