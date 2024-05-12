import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const insertUser = async (
  userName: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const res = await prisma.user.create({
    data: {
      userName,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
};
insertUser("aryan@gmail.com", "mypass", "aryan", "pachori");
