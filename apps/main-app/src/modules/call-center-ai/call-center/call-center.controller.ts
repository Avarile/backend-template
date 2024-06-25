import { Body, Controller, Logger, Post } from '@nestjs/common';
import {
  CallCenterCallIdDTO,
  CallCenterGetCallAnalysisDTO,
  CallCenterSendCallDTO,
} from '../dto/call-center-send.dto';
import { CallCenterService } from './call-center.service';
import {
  CallCenterIntentionEnum,
  ICallCenterSendCall,
} from '../dto/call-center-send.interface';
import { sendCallTemplate } from './send-call.template';
import { confirmationTool } from '../custom-tool/create-tool.template';

@Controller('call-center-function')
export class CallCenterController {
  private readonly logger = new Logger(CallCenterController.name);
  constructor(private readonly callCenterService: CallCenterService) {}

  @Post('send-call')
  async initCallAction(@Body() body: CallCenterSendCallDTO): Promise<any> {
    this.logger.log('Initiating call');
    let payload: ICallCenterSendCall;

    switch (body.intention) {
      case CallCenterIntentionEnum.confirmation:
        payload = {
          ...sendCallTemplate.confirmation,
          phone_number: body.phone_number,
          first_sentence: `Hello Mr.${body.user_last_name}, this is a confirmation call from Aaron Sansoni Group, My name is Shuana, I am calling to confirm your position for next ${body.content.context} event, time of the event will be ${body.content.date}, May I confirm your attandence?.`,
          // user_last_name: Doe, content: {context: 'Deal Mastery', date: 'June 1st at 10:00 AM'}, intention: 'confirmation'
          tools: [confirmationTool],
        };
        break;

      default:
        break;
    }

    const response = await this.callCenterService.initCall(payload);

    this.logger.log('Call initiated');
    return response;
  }

  @Post('get-call-analysis')
  async getCallAnalysisAction(
    @Body() body: CallCenterGetCallAnalysisDTO,
  ): Promise<any> {
    this.logger.log('Getting call analysis');

    const response = await this.callCenterService.getCallAnalysis(body);

    this.logger.log('Call analysis retrieved');
    return response;
  }

  @Post('stop-call')
  async stopCallAction(@Body() body: { callId: string }): Promise<any> {
    this.logger.log('Stopping call');

    const response = await this.callCenterService.stopCall(body);

    this.logger.log('Call stopped');
    return response;
  }

  @Post('get-call-list')
  async getCallListAction(): Promise<any> {
    this.logger.log('Getting call list');

    const response = await this.callCenterService.getCallList();

    this.logger.log('Call list retrieved');
    return response;
  }

  @Post('get-call')
  async getCallAction(@Body() body: CallCenterCallIdDTO): Promise<any> {
    this.logger.log('Getting call');

    const response = await this.callCenterService.getCallDetailByID({
      callId: body.call_id,
    });

    this.logger.log('Call retrieved');
    return response;
  }

  @Post('get-call-transcript')
  async getCallTranscriptAction(
    @Body() body: CallCenterCallIdDTO,
  ): Promise<any> {
    this.logger.log('Getting call transcript');

    const response = await this.callCenterService.getCallTranscript({
      callId: body.call_id,
    });

    this.logger.log('Call transcript retrieved');
    return response;
  }

  @Post('get-call-recording')
  async getCallRecordingAction(
    @Body() body: CallCenterCallIdDTO,
  ): Promise<any> {
    this.logger.log('Getting call recording');

    const response = await this.callCenterService.getCallRecording({
      callId: body.call_id,
    });

    this.logger.log('Call recording retrieved');
    return response;
  }

  @Post('analyze-call')
  async analyzeByIdAction(
    @Body() body: CallCenterGetCallAnalysisDTO,
  ): Promise<any> {
    this.logger.log('Analyzing call by ID');

    const response = await this.callCenterService.getCallAnalysis({ ...body });

    return response;
  }
}
