import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

type LoginButtonProps = {
  handleClick?: () => Promise<void>;
  isDisabled?: boolean;
  className?: string;
  width?: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({ ...props }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const loginButtonStyling = `flex space-x-3 font-semibold bg-gradient-to-r from-indigo-600 to-pink-500
  text-gray-100 rounded-sm ring-2 ring-purple-400 px-40 py-2 
  hover:bg-white  hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-indigo-300/50`;

  return isAuthenticated ? null : (
    <div>
      <button className={loginButtonStyling} onClick={props.handleClick}>
        Login
      </button>
    </div>
  );
};

export default LoginButton;
