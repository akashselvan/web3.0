import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Metaverse from '../login/metaverse.jpg';

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-8">
        <Image
          src="https://links.papareact.com/3pi"
          width={200}
          height={200}
          className="rounded-full object-cover"
        />

        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-bounce text-white"
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        <Image src="https://links.papareact.com/55n" 
        layout="fill"
         objectFit="cover" />
      </div>
    </div>
  );
};

export default Login;
