import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import Avatar from './Avatar';
import ChangeUserName from './ChangeUserName';
import Metaverse from '../login/metaverse.jpg';

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="text-pink-500 bg-black shadow-sm border-b-2 border-yellow-700 sticky top-0 z-50 p-5">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-20 w-20 2xl:h-24 2xl:w-24 mx-auto hidden lg:inline-grid border-2 border-gray-400 rounded-full">
          <Image
            src={Metaverse}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="h-28 mb-3 w-28 2xl:h-48 2xl:w-48 relative lg:mx-auto border-yellow-500 p-1 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <div>
            <h1 className="text-xl 2xl:text-3xl ">Welcome to METAVERSE</h1>

            <h2 className="text-3xl 2xl:text-5xl font-bold truncate animate-pulse">
              {user.getUsername()}
            </h2>
          </div>

          <ChangeUserName />
        </div>
      </div>
    </div>
  );
};

export default Header;
