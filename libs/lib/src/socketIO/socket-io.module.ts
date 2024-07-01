import { type DynamicModule } from '@nestjs/common';
import { SocketIOGateWay } from './socket-io.gateway';
import { SocketIOProvider } from './socket-io.provider';

export class SocketIOModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      module: SocketIOModule,
      imports: [],
      providers: [SocketIOGateWay, SocketIOProvider], // along with services setting
      exports: [SocketIOGateWay, SocketIOProvider], // along with services setting
    };
  }
}
