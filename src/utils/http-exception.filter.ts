import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

type ExceptionResponse = {
  statusCode: number;
  message: string[];
  error: string;
};

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const statusCode = exception.getStatus();
    const message = (exception.getResponse() as ExceptionResponse).message;
    const error = (exception.getResponse() as ExceptionResponse).error;

    response.status(statusCode).json({
      statusCode,
      message: Array.isArray(message) ? message[0] : message,
      error,
    });
  }
}
