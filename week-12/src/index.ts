interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}
type userPfp = Pick<User, "name" | "age" | "email">;

function sumOfAge(user: userPfp) {
  
}

