import { Injectable, Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { SocketIOProvider } from './socket-io.provider';
import {
  OnGatewayConnection,
  // OnGatewayDisconnect,
  // SubscribeMessage,
  // WebSocketGateway,
  // WebSocketServer,
} from '@nestjs/websockets';

@Injectable()
export class SocketIOGateWay implements OnGatewayConnection {
  private readonly logger = new Logger(SocketIOGateWay.name);

  constructor(private readonly socketIOProvider: SocketIOProvider) {}

  handleConnection(client: Socket) {
    this.socketIOProvider.handleConnection(client);
  }
}
