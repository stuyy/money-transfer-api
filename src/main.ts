import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 9001;
  try {
    await app.listen(PORT, () =>
      console.log(`Running Money Transfer API on Port ${PORT}`),
    );
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
