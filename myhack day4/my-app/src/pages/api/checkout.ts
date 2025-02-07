import { client } from "@/sanity/lib/client";
import { NextApiRequest, NextApiResponse } from "next";

// Make sure the type for the request body is properly defined
interface OrderRequestBody {
  customerName: string;
  email: string;
  address: string;
  paymentMethod: string;
  items: Array<{ productName: string; quantity: number; price: number }>;
  total: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Cast body to our custom type to ensure proper structure
    const { customerName, email, address, paymentMethod, items, total }: OrderRequestBody = req.body;

    try {
      const order = await client.create({
        _type: "order",
        customerName,
        email,
        address,
        paymentMethod,
        items,
        total,
      });

      // Return a successful response
      return res.status(200).json({ message: "Order successfully placed", order });
    } catch (error: unknown) {
      // TypeScript now knows that error could be an instance of Error
      if (error instanceof Error) {
        console.error("Error creating order:", error.message);
        return res.status(500).json({ message: "Failed to place order", error: error.message });
      } else {
        // Handle the case when the error is not an instance of Error
        console.error("Unknown error occurred:", error);
        return res.status(500).json({ message: "Failed to place order", error: "Unknown error occurred" });
      }
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
