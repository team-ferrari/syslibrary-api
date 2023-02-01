import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  private prisma;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }
}
