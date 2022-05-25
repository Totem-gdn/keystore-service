import { ArgumentsHost, Catch, HttpException, HttpStatus, RpcExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable, throwError } from 'rxjs';
import { RpcError } from '../errors/interfaces/rpc-error.interface';

@Catch()
export class UnhandledExceptionFilter implements RpcExceptionFilter {
  catch(exception: any, _host: ArgumentsHost): Observable<RpcException> {
    if (exception instanceof RpcException) {
      return throwError(() => exception);
    }
    if (exception instanceof HttpException) {
      return throwError(
        () =>
          new RpcException(
            JSON.stringify({
              status: exception.getStatus(),
              errors: {
                [exception.name]: exception.getResponse(),
              },
            } as RpcError),
          ),
      );
    }
    if (exception instanceof Error) {
      return throwError(
        () =>
          new RpcException(
            JSON.stringify({
              status: HttpStatus.INTERNAL_SERVER_ERROR,
              errors: {
                [exception.name]: exception.message,
              },
            } as RpcError),
          ),
      );
    }

    return throwError(
      () =>
        new RpcException(
          JSON.stringify({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            errors: {
              unknownError: exception,
            },
          } as RpcError),
        ),
    );
  }
}
