import { createClient } from 'next-sanity';

// Setup the client with an API token that has 'create' permission
export const client = createClient({
  projectId: "ki9jdqh4",
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN, // This token should have write permissions
  useCdn: false, // Optional: false to ensure you're always working with the latest data
});
