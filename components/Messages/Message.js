import { useMoralis } from 'react-moralis';
import Avatar from '../Home/Avatar';
import TimeAgo from 'timeago-react';

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div
        className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}
        title={message.get('username')}
      >
        <Avatar username={message.get('username')} />
      </div>

      <div
        className={`flex space-x-4 p-3 rounded-lg font-semibold ${
          isUserMessage
            ? 'rounded-br-none bg-pink-300'
            : 'rounded-bl-none bg-blue-400'
        }`}
      >
        <h1>{message.get('message')}</h1>
      </div>

      <TimeAgo
        className={`text-[10px] text-gray-400 italic  ${
          isUserMessage && 'order-first pr-1'
        }`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? 'text-pink-300' : 'text-blue-400'
        }`}
      >
        {message.get('username')}
      </p>
    </div>
  );
};

export default Message;
