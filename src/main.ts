import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './common/config/env.config';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './common/config/swagger.config';



async function bootstrap() {
  const app = await NestFactory.create(AppModule,{logger: ['error','warn','debug','fatal']});
  app.useGlobalPipes(new ValidationPipe())
  const document = SwaggerModule.createDocument(app,swaggerConfig)
  SwaggerModule.setup('docs',app,document)

  await app.listen(env.PORT,()=> console.log('Listening on port ' + env.PORT));
}
bootstrap();
