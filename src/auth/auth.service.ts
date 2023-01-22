import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
  signup() {
    return { msg: "I am signed up" };
  }

  constructor(private prisma: PrismaService) {
  }

  signin() {
    return { msg: "I am signed in" };
  }
}
