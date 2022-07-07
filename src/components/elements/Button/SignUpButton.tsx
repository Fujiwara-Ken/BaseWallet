import React from "react";

type SignUpButtonProps = {
  handleClick?: () => Promise<void>;
  isDisabled?: boolean;
  className?: string;
  width?: string;
};

const SignUpButton: React.FC<SignUpButtonProps> = ({ ...props }) => {
  const SignUpButtonStyling = `group flex relative justify-center py-2 px-4 w-full text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`;

  return (
    <div>
      <button type="submit" className={SignUpButtonStyling} onClick={props.handleClick}>
        <span className="flex absolute inset-y-0 left-0 items-center pl-3"></span>
        SignUp
      </button>
    </div>
  );
};

export default SignUpButton;
