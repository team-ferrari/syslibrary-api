import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
