export const createToolTemplate = {
  name: 'BookAppointment',
  description: 'Books an appointment for the customer',
  url: 'https://your-api.com/book-appointment',
  method: 'POST',
  headers: {
    Authorization: 'Bearer YOUR_API_KEY',
  },
  body: {
    date: '{{input.date}}',
    time: '{{input.time}}',
    service: '{{input.service}}',
  },
  input_schema: {
    example: {
      speech:
        'Got it - one second while I book your appointment for tomorrow at 10 AM.',
      date: '2024-04-20',
      time: '10:00 AM',
      service: 'Haircut',
    },
    type: 'object',
    properties: {
      speech: 'string',
      date: 'YYYY-MM-DD',
      time: 'HH:MM AM/PM',
      service: 'Haircut, Coloring, Trim, or Other',
    },
  },
  response: {
    succesfully_booked_slot: '$.success',
    stylist_name: '$.stylist_name',
  },
};

export const makeAppointmentTool = {
  name: 'MakeAppointment', // name of the tool
  description: 'Make an appointment for the customer', // description of the tool, this is visible to the AI agent, so make it meaningful
  url: 'https://demo.avarile.com/custom-function/create-user', // the api endpoint for the tool
  method: 'POST', // the method of the api call
  headers: {
    Authorization: 'Bearer YOUR_API_KEY', // the headers for the api call
  },
  // the body of the api call, this is the payload AI agent will send to the API
  body: {
    date: '{{input.date}}',
    time: '{{input.time}}',
    user_name: '{{input.user_name}}',
    user_email: '{{input.email}}',
  },
  // The input schema is critical. It defines the shape of the API request, the different inputs the request can take, and also includes an example (which helps our system when creating requests).
  // input_schema is converted into the variable "{{input}}" that you can use in the request body/query/headers
  input_schema: {
    // the example is a sample input that the AI agent can use to generate the request
    example: {
      speech:
        'Please give me a minute while I process your appointment with Aaron.',
      date: '2024-04-20',
      time: '10:00 AM',
      user_name: 'John Doe',
      user_email: 'example@gmail.com',
    },
    type: 'object',
    // the properties define the different inputs the request can take
    properties: {
      speech: 'string',
      date: 'YYYY-MM-DD',
      time: 'HH:MM AM/PM',
      user_name: 'string',
      user_email: 'email',
    },
  },
  // response from the API call, this is what the AI will use to generate the response to the user, the definition of the response should be easy to understand
  response: {
    succesfully_reschedule: '$.success', // this is a boolean value that will be used to determine if the reschedule was successful
    user_name: '$.user_name', // this is the name of the user that the appointment was rescheduled for, the AI agent can use it to personalize the response
  },
};

export const rescheduleTool = {
  name: 'rescheduleAppointment', // name of the tool
  description: 'Reschedules an appointment for the customer', // description of the tool, this is visible to the AI agent, so make it meaningful
  url: 'https://demo.avarile.com/custom-function/update-user', // the api endpoint for the tool
  method: 'POST', // the method of the api call
  headers: {
    Authorization: 'Bearer YOUR_API_KEY', // the headers for the api call
  },
  // the body of the api call, this is the payload AI agent will send to the API
  body: {
    date: '{{input.date}}',
    time: '{{input.time}}',
    user_name: '{{input.user_name}}',
    user_email: '{{input.email}}',
  },
  // The input schema is critical. It defines the shape of the API request, the different inputs the request can take, and also includes an example (which helps our system when creating requests).
  // input_schema is converted into the variable "{{input}}" that you can use in the request body/query/headers
  input_schema: {
    // the example is a sample input that the AI agent can use to generate the request
    example: {
      speech:
        'Got it - please give me one second while I reschedule your appointment with Aaron.',
      date: '2024-04-20',
      time: '10:00 AM',
      user_name: 'John Doe',
      user_email: 'example@gmail.com',
    },
    type: 'object',
    // the properties define the different inputs the request can take
    properties: {
      speech: 'string',
      date: 'YYYY-MM-DD',
      time: 'HH:MM AM/PM',
      user_name: 'string',
      user_email: 'email',
    },
  },
  // response from the API call, this is what the AI will use to generate the response to the user, the definition of the response should be easy to understand
  response: {
    succesfully_reschedule: '$.success', // this is a boolean value that will be used to determine if the reschedule was successful
    user_name: '$.user_name', // this is the name of the user that the appointment was rescheduled for, the AI agent can use it to personalize the response
  },
};

export const confirmationTool = {
  name: 'ConfirmAppointment', // name of the tool
  description: 'Confirm an appointment with a customer', // description of the tool, this is visible to the AI agent, so make it meaningful
  url: 'https://demo.avarile.com/custom-function/confirmation', // the api endpoint for the tool
  method: 'POST', // the method of the api call
  headers: {
    Authorization: 'Bearer YOUR_API_KEY', // the headers for the api call
  },
  // the body of the api call, this is the payload AI agent will send to the API
  body: {
    confirmation: '{{input.confirmation}}',
  },
  // The input schema is critical. It defines the shape of the API request, the different inputs the request can take, and also includes an example (which helps our system when creating requests).
  // input_schema is converted into the variable "{{input}}" that you can use in the request body/query/headers
  input_schema: {
    // the example is a sample input that the AI agent can use to generate the request
    example: {
      speech:
        'Got it - your position in our next Deal Mastery Event is secured.',
      confirmation: 'true',
    },
    type: 'object',
    // the properties define the different inputs the request can take
    properties: {
      confirmation: 'boolean',
    },
  },
  // response from the API call, this is what the AI will use to generate the response to the user, the definition of the response should be easy to understand
  response: {
    attendence_confirmed: '$.success', // this is a boolean value that will be used to determine if the reschedule was successful
    user_name: '$.user_name', // this is the name of the user that the appointment was rescheduled for, the AI agent can use it to personalize the response
    date: '$.date',
    time: '$.time',
  },
};
