import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Initialize Stripe with your secret key (no need to specify apiVersion)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;

      // Create a PaymentIntent with the specified amount
      const paymentIntent = await stripe.paymentIntents.create({
        amount, // Amount in the smallest currency unit (e.g., cents)
        currency: "usd", // Currency type
      });

      // Respond with the client secret to complete the payment on the frontend
      return res.status(200).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error: unknown) {
      // Cast error as an instance of Error
      if (error instanceof Error) {
        // Log and return error message if it's a valid Error object
        console.error("Error creating payment intent:", error.message);
        return res.status(500).json({
          message: "Failed to create payment intent",
          error: error.message,
        });
      } else {
        // If error is not an instance of Error, return a fallback message
        console.error("Unknown error:", error);
        return res.status(500).json({
          message: "Failed to create payment intent",
          error: "Unknown error occurred",
        });
      }
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
