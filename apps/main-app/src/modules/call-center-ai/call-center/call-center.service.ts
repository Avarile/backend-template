import { Injectable, Logger } from '@nestjs/common';
import config from '../../../utils/config/configurations';
import axios, { Axios } from 'axios';
import {
  ICallCenterSendCall,
  ICallListResponse,
  ICustomizedToolsDTO,
  IVectorStoreDTO,
} from '../dto/call-center-send.interface';

@Injectable()
export class CallCenterService {
  private readonly logger = new Logger(CallCenterService.name);
  private callCenterAPIconfig = {
    method: 'POST',
    headers: {
      authorization: config().OPENAI_KEYS.BLAND_AI_API_KEY,
      'Content-Type': 'application/json',
    },
  };
  private axiosInstance: Axios;

  constructor() {
    this.logger.warn('OpenAI service initialized');

    // init axios instance
    this.axiosInstance = axios.create({
      baseURL: 'https://api.bland.ai/v1/',
      timeout: 100000,
      headers: this.callCenterAPIconfig.headers,
      method: this.callCenterAPIconfig.method,
      data: {},
    });
  }

  async initCall(payload: ICallCenterSendCall) {
    console.log('payload', payload);
    const response = await this.axiosInstance.post('calls', payload);

    return response.data;
  }

  async getCallAnalysis(payload: {
    callId: string;
    goal: string[];
    questions: string[];
  }) {
    const data = {
      goal: payload.goal,
      questions: payload.questions,
    };

    // below is an example of what the payload should look like, or provide a idea of what the payload should look like :)
    // ["Who answered the call?", "human or voicemail"],     => "human"
    // ["Positive feedback about the product: ", "string"],  => "Customer found the product sturdy and reliable"
    // ["Negative feedback about the product: ", "string"],  => "A bit heavy"
    // ["Customer confirmed they were satisfied", "boolean"] => true

    const response = await this.axiosInstance.post(
      `calls/${payload.callId}/analysis`,
      data,
    );

    return response.data;
  }

  async stopCall(payload: { callId: string }) {
    const response = await this.axiosInstance.post(
      `calls/${payload.callId}/stop`,
    );

    return response.data;
  }

  async getCallList(): Promise<ICallListResponse> {
    const response = await this.axiosInstance.get('calls');

    return response.data;
  }

  async getCallDetailByID(payload: { callId: string }) {
    const response = await this.axiosInstance.get(`calls/${payload.callId}`);

    return response.data;
  }

  async getCallRecording(payload: { callId: string }) {
    const response = await this.axiosInstance.get(
      `calls/${payload.callId}/recording`,
    );

    return response.data;
  }

  async getCallTranscript(payload: { callId: string }) {
    const response = await this.axiosInstance.get(
      `calls/${payload.callId}/correct`,
    );
    return response.data;
  }

  // --------------- Voice related functions starts
  async ListVoices() {
    const response = await this.axiosInstance.get('voices');

    return response.data;
  }

  async getVoiceDetail(payload: { voiceId: string }) {
    const response = await this.axiosInstance.get(`voices/${payload.voiceId}`);

    return response.data;
  }

  // --------------- Customization related functions starts
  async createCustomTool(payload: { tool: ICustomizedToolsDTO }) {
    const response = await this.axiosInstance.post('tools', payload.tool);

    return response.data;
  }

  async updateCustomTool(payload: {
    tool_id: string;
    tool: ICustomizedToolsDTO;
  }) {
    const response = await this.axiosInstance.post(
      `tools/${payload.tool_id}`,
      payload.tool,
    );

    return response;
  }

  async listCustomTools() {
    const response = await this.axiosInstance.get('tools');

    return response;
  }

  async getCustomToolDetailByID(payload: { id: string }) {
    const response = await this.axiosInstance.get(`tools/${payload.id}`);

    return response;
  }

  // --------------- Vector store related functions starts
  async createVectorStore(payload: { store: IVectorStoreDTO }) {
    const vector_id: string = await this.axiosInstance.post(
      'vectors',
      payload.store,
    );

    return vector_id;
  }

  async deleteVectorStore(payload: { id: string }) {
    const response = await this.axiosInstance.delete(
      `vectors/${payload.id}/delete`,
    );

    return response;
  }

  async updateVectorStore(payload: { id: string }) {
    const response = await this.axiosInstance.post(`vectors/${payload.id}`);

    return response;
  }

  async getAllVectorStores() {
    const response = await this.axiosInstance.get('vectors');

    return response;
  }

  async getVectorStoreDetailByID(payload: { id: string }) {
    const response = await this.axiosInstance.get(`vectors/${payload.id}`);

    return response;
  }
}
