import { Prisma } from '@prisma/client';

export class Book implements Prisma.BookUncheckedCreateInput {
  name: string;
  releaseDate: string;
}
