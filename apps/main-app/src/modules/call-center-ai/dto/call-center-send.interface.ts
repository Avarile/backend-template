export enum CallCenterIntentionEnum {
  reschedule = 'reschedule',
  make_appointment = 'make_appointment',
  confirmation = 'confirmation',
}

export interface ICallCenterSendCall {
  phone_number: string;
  task: string;
  pathway_id?: string;
  start_node_id?: string;
  voice?: string;
  first_sentence?: string;
  wait_for_greeting?: boolean;
  block_interruptions?: boolean;
  interruption_threshold?: number;
  model?: string;
  temperature?: number;
  keywords?: Array<string>;
  pronunciation_guide?: Array<object>;
  transfer_phone_number?: string;
  transfer_list?: object;
  language?: string;
  calendly?: object;
  timezone?: string;
  request_data?: object;
  tools: [object];
  dynamic_data?: [{ 'dynamic_data[i].response_data': [object] }];
  start_time: string;
  voicemail_message?: string;
  voicemail_action?: object;
  retry?: object;
  max_duration: number;
  record: boolean;
  from?: string;
  webhook?: string;
  metadata?: object;
  summary_prompt?: string;
  analysis_prompt?: string;
  analysis_schema?: object;
  answered_by_enabled?: boolean;
}

export interface ICallResponse {
  status: 'error' | 'success';
  message: string;
  call_id: string;
  batch_id: null;
}

export interface ICallAnalysisResponse {
  status: 'success' | 'error';
  message: string;
  answers: Array<string>;
}

export interface ICallStopResponse {
  status: 'success' | 'error';
  message: string;
}

// --------------- List related interfaces starts
export class ICallCenterSendCallDTO {
  call_id: string;
  created_at: Date;
  call_length: number; // minutes
  to: string;
  from: string;
  completed: boolean;
  queue_status: string;
  error_message: string | null;
  answered_by: string;
  batch_id: string;
}
export interface ICallListResponse {
  count: number;
  calls: Array<ICallCenterSendCallDTO>;
}

// --------------- Customized Tools related interfaces starts
export interface ICustomizedToolsDTO {
  query: object;
  name: string; // tool name (unique) example: 'save_preference', 'access_long_term_memory', 'get_user_background'
  description: 'Speak' | 'Press Buttons' | 'Wait' | 'Finish';
  speech: string; // example: "processing your request, just one minute"
  request: {
    url: string; // example: 'https://api.example.com/v1/quote/draft' . it has to begin with 'https://'
    headers: object; // example { 'Authorization': 'Bearer  {{api_key}}' }, the top level keys can be defined in the send call request and used by {{key_name}}
    body: {
      input_schema: {
        example: {
          name: 'John Doe';
          email: 'johndoe@gmail.com';
        };
      };
      body: {
        name: '{{input.name}}';
        email: '{{input.email}}';
      };
    };
  };
  method: string; //
  input_schema: object;
  response: object;
  timeout: number;
}

// --------------- Vector Store related interfaces starts
export interface IVectorStoreDTO {
  name: string; // The name of the vector store. Make this a clear name that describes the contents of the store.
  description: string; //A description of the vector store. This can be a longer description of the contents of the store, or what terms to use to search for vectors in the store. This is visible to the AI, so making it descriptive can help the AI understand when to use it or not.
  text: string; // full text document to be stored and vectorized
}
