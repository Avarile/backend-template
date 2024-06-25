export const sendCallTemplate = {
  confirmation: {
    task: '',
    voice: '3a1e0243-ef27-4420-9b53-89f343eb49d4',
    // first_sentence:
    //   'Hi there, this is a confirmation call from Aaron Sansoni Group, My name is Shuana, I am calling to confirm your position  June 1st at 10:00 AM. Please press 1 to confirm, 2 to reschedule, or 3 to cancel.',
    wait_for_greeting: true,
    block_interruptions: true,
    interruption_threshold: 100,
    temperature: 0.7,
    keywords: [],
    pronunciation_guide: [{}],
    transfer_phone_number: '<string>',
    transfer_list: {},
    language: '<string>',
    calendly: {},
    timezone: '<string>',
    request_data: {},
    tools: [{}],
    // dynamic_data: [
    //   {
    //     'dynamic_data[i].response_data': [{}],
    //   },
    // ],
    start_time: '<string>',
    voicemail_message: '<string>',
    voicemail_action: {},
    retry: {},
    max_duration: 3,
    record: true,
    // from: '',
    webhook: '<string>',
    metadata: {},
    summary_prompt: '<string>',
    analysis_prompt: '<string>',
    analysis_schema: {},
    answered_by_enabled: true,
  },
};
