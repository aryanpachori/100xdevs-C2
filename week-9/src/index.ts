import { Client } from "pg";

async function getUser(email: string) {
  const client = new Client({
    connectionString:
      "postgresql://aryanpachori03:v6dbrApZYiF1@ep-shiny-surf-63404482.ap-southeast-1.aws.neon.tech/Test?sslmode=require",
  });

  await client.connect();
  const query = "SELECT * FROM users WHERE email = $1";
  const values = [email];
  const result = await client.query(query, values);

  if (result.rows.length > 0) {
    console.log("User found:", result.rows[0]);
    return result.rows[0];
  } else {
    console.log("No user found with the given email.");
    return null;
  }
}



getUser("user5@example.com").catch(console.error);
