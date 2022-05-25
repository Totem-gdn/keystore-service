import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { RpcException } from '@nestjs/microservices';
import { RpcError } from '../errors/interfaces/rpc-error.interface';

export class RpcValidationPipe extends ValidationPipe {
  constructor(transform: boolean) {
    super({
      transform,
      exceptionFactory: (errors: ValidationError[]) => {
        const rpcErrors: RpcError = {
          status: HttpStatus.BAD_REQUEST,
          errors: {},
        };
        for (const propertyKey in errors) {
          const error = errors[propertyKey];
          const messages = [];
          for (const errorKey in error.constraints) {
            messages.push(error.constraints[errorKey]);
          }
          rpcErrors.errors[error.property] = messages;
        }
        return new RpcException(JSON.stringify(rpcErrors));
      },
    });
  }
}
