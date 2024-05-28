import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const primsa = new PrismaClient();


export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await primsa.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  console.log(user.id);
  return NextResponse.json({ message: "Signed up" });
}
