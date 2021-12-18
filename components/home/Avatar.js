import Image from 'next/image';
import { useMoralis } from 'react-moralis';

const Avatar = ({ username }) => {
  const { user } = useMoralis();

  return (
    <Image
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get('username')
      }.svg`}
      layout="fill"
      className="rounded-full bg-black cursor-pointer hover:opacity-75"
    />
  );
};

export default Avatar;
