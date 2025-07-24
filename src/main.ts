import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用 CORS
  app.enableCors();

  // 全局验证管道
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // 设置全局前缀
  app.setGlobalPrefix('api');

  // Swagger 文档配置
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('NestJS Backend API Documentation')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // 启动服务，监听端口 8000
  await app.listen(8000);
  console.log('🚀 NestJS Backend is running on http://localhost:8000');
  console.log('📖 API Documentation available at http://localhost:8000/api/docs');
}

bootstrap();
