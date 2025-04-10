import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RootModule } from './root.module';

async function bootstrap() {
    const app = await NestFactory.create(RootModule);

    app.enableCors();

    // Swagger configuration
    const config = new DocumentBuilder()
        .setTitle('API Documentation')
        .setDescription('API description')
        .setVersion('1.0')
        .addTag('api')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);


    await app.listen(3000);
}

bootstrap();