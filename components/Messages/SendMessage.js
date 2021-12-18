import { useState } from 'react';
import { useMoralis } from 'react-moralis';

const SendMessage = ({ endOfMessagesRef }) => {
  const [message, setMessage] = useState('');
  const { user, Moralis } = useMoralis();

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    setMessage('');
  };

  return (
    <div className="flex w-11/12 fixed bottom-5 2xl:bottom-10 bg-black opacity-80 px-6 py-4 mx-w-2xl border-4 border-blue-400 rounded-full shadow-xl">
      <input
        type="text"
        className="outline-none pr-5 flex-grow bg-transparent text-white placeholder:text-gray-500"
        placeholder={`Enter a Message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" onClick={sendMessage}>
     <h3 className="text-white">Send</h3>
      </button>
    </div>
  );
};

export default SendMessage;
