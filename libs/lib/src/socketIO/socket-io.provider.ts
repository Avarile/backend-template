import { Injectable, Logger } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class SocketIOProvider {
  private readonly logger = new Logger(SocketIOProvider.name);
  private readonly connectedClients: Map<string, Socket> = new Map();

  constructor() {
    this.logger.log('SocketIOProvider initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    this.connectedClients.set(client.id, client);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    this.connectedClients.delete(client.id);
  }
}
