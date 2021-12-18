import { useMoralis } from 'react-moralis';
import Swal from 'sweetalert2';

const ChangeUserName = () => {
  const { setUserData, isUserUpdating, user, logout } = useMoralis();

  const setUserName = async () => {
    const { value: username } = await Swal.fire({
      title: 'CHANGE USERNAME',
      input: 'text',
      inputLabel: `your current username is "${user.getUsername()}"`,
      inputPlaceholder: 'Enter new username',
    });

    if (username) {
      Swal.fire(`new username: ${username}`);
    }

    if (!username) return;

    setUserData({
      username: username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        onClick={setUserName}
        disabled={isUserUpdating}
        className="hover:text-pink-800 hover:bg-gray-900 hover:border-gray-900 border-2 bg-gray-800 border-gray-800 px-3 py-1 rounded-md uppercase font-semibold"
      >
        change username
      </button>

      <span
        onClick={logout}
        className="block my-3 hover:text-gray-200 hover:bg-gray-900 hover:border-gray-900 border-2 text-gray-300 cursor-pointer bg-gray-800 border-gray-800 px-3 py-1 rounded-md uppercase font-semibold"
      >
        logout
      </span>
    </div>
  );
};

export default ChangeUserName;
