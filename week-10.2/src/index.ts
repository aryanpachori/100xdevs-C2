import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*const createUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
};
createUser("aryan@gmail.com", "password", "aryan", "pachori");*/

async function getUser(email: string) {
    const user = await prisma.user.findFirst({
      where: {
          email
      }
    })
    console.log(user);
  }
  
  getUser("aryan@gmail.com");
