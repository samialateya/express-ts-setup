import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express Typescript API',
      version: '1.0.0',
      description: 'API documentations',
    },
    servers: [
      {
        url: process.env.SERVER_URL ?? 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./spec/swagger/paths/*.yaml'],
};

export const swaggerDocumentations = swaggerJsdoc(swaggerOptions);
