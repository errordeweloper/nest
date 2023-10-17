import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('POST.COM')
  .setDescription('The API to post by users')
  .setVersion('1.0')
  .addTag('Endpoints')
  .build();
