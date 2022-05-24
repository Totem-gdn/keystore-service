import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HealthCheckRequest, HealthCheckResponse, ServingStatus } from './interfaces/health.interface';

@Controller()
export class HealthController {
  @GrpcMethod('Health', 'Check')
  check(_data: HealthCheckRequest, _metadata: any): HealthCheckResponse {
    return { status: ServingStatus.SERVING };
  }
}
