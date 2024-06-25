import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';
// import { createReadStream } from 'fs';
import config from '../../utils/config/configurations';

@Injectable()
export class OpenAIService {
  private readonly logger = new Logger(OpenAIService.name);
  private openai: OpenAI;
  constructor() {
    this.openai = new OpenAI({ apiKey: config().OPENAI_KEYS.OPENAI_API_KEY_1 });
    this.logger.warn('OpenAI service initialized');
  }

  // util function to call openai api
  async streamResponses(role: string, prompt: string) {
    const stream = await this.openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'system', content: prompt }],
      stream: true,
    });

    for await (const chunk of stream) {
      return chunk.choices[0]?.delta?.content || '';
    }
  }

  // voice recognition related
  async voiceToText(audio: File) {
    // const stream = await this.openai.audio.transcriptions.create({
    //   file: createReadStream(audio),
    //   model: 'whisper-1',
    //   response_format: 'text',
    // });
    // for await (const chunk of stream) {
    //   return chunk.text || '';
    // }
  }

  // async textToVoice(text: string) { }
}
