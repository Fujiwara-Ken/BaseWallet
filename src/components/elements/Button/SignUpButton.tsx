import { LockClosedIcon } from "@heroicons/react/solid";
import React from "react";

type SignUpButtonProps = {
  handleClick?: () => Promise<void>;
  isDisabled?: boolean;
  className?: string;
  width?: string;
};

const SignUpButton: React.FC<SignUpButtonProps> = ({ ...props }) => {
  const loginButtonStyling = `group flex relative justify-center py-2 px-4 w-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`;

  return (
    <div>
      <button type="submit" className={loginButtonStyling} onClick={props.handleClick}>
        <span className="flex absolute inset-y-0 left-0 items-center pl-3">
          <LockClosedIcon
            className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        SignUp
      </button>
    </div>
  );
};

export default SignUpButton;
