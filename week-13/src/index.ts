import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});

/*
const createUser = async () => {
  await client.connect();
  const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
`);
  console.log(result);
};
createUser();






const createAddress = async () => {
  await client.connect();

  const res = await client.query(`
  CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
    `);
  console.log(res);
};
createAddress();
*/
const insertData = async(username : string , email : string , password : string)=>{
    await client.connect();

    const insertQuery = (`
    INSERT INTO users (username,email,password)
    VALUES($1,$2,$3)
    `)
    const values = [username,email,password];
    const res = await client.query(insertQuery,values);
    console.log(res);

}
insertData("aryan2","aryan2@gmail.com","aryan02");