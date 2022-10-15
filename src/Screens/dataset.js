export const chatData = [
  {
    id: 1,
    username: 'Ali',
    type: 'receive',
    message: [
      {
        key: 1,
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, velit?',
      },
      {
        key: 2,
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, velit?',
      },
      {
        key: 3,
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, velit?',
      },
    ],
  },
  {
    id: 2,
    username: 'Imran',
    type: 'sender',
    message: [
      {
        key: 1,
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, velit?',
      },
    ],
  },
];

export const dummyMessages = [
  {
    messageStatus: 'RECEIVED',
    messageType: 'TEXT',
    senderName: 'Dummy user 1',
    message: 'Lorem ipsum laudantium cupiditate incidunt,',
  },
  {
    messageStatus: 'SENT',
    messageType: 'TEXT',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro idobcaecati, dolorem laudantium cupiditate incidunt,',
  },
  {
    messageStatus: 'RECEIVED',
    messageType: 'VOICE',
  },
  {
    messageStatus: 'SENT',
    messageType: 'VOICE',
  },
];
