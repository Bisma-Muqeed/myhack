'use client';

import React from "react";
import CheckoutForm from "./components/CheckoutForm"; // Import CheckoutForm for payment
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Products from "./products/page";
import Top_sell from "./products/sell";
import Fonts from "./components/fonts";
import Hero from "./components/Hero";
import CustomerCarousel from "./components/couresel";
import Dress from "./components/dress";

// Load Stripe outside of a component’s render to avoid recreating the `Stripe` object on every render.
const stripePromise = loadStripe('your-publishable-key-here'); // Use your actual Stripe publishable key

export default function Home() {
  const totalAmount = 150; // Example amount (you can update this dynamically)

  return (
    <div>
      {/* Other components */}
      <Hero />
      <Fonts />
      <Products />
      <Top_sell />
      <Dress />
      
      {/* Wrap CheckoutForm with the Stripe Elements provider */}
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={totalAmount} /> {/* Passing the totalAmount as a prop */}
      </Elements>

      <CustomerCarousel />
    </div>
  );
}
