import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "your_project_id", // ✅ Apna Sanity Project ID dalain
  dataset: "production", // ✅ Apna dataset (production ya development)
  useCdn: false, // ✅ False rakhain taake latest data mile
  apiVersion: "2023-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // ✅ Token use karna zaroori hai
});
