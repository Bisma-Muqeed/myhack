export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      { name: "customerName", title: "Customer Name", type: "string" },
      { name: "email", title: "Email", type: "string" },
      { name: "address", title: "Address", type: "text" },
      {
        name: "paymentMethod",
        title: "Payment Method",
        type: "string",
        options: { list: ["credit-card", "paypal", "cod"] },
      },
      {
        name: "items",
        title: "Items",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "productName", title: "Product Name", type: "string" },
              { name: "quantity", title: "Quantity", type: "number" },
              { name: "price", title: "Price", type: "number" },
            ],
          },
        ],
      },
      { name: "total", title: "Total", type: "number" },
    ],
};
