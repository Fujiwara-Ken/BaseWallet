import React from 'react';

type BaseButtonProps = {
  handleClick?: () => void | Promise<void>;
  isDisabled?: boolean;
  label: string;
  className?: string;
  width?: string;
};

const baseButtonStyling = `flex space-x-3 font-semibold bg-gradient-to-r from-indigo-600 to-pink-500
text-gray-100 rounded-sm ring-2 ring-purple-400 px-6 py-2 
hover:bg-white  hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-indigo-300/50`;

const BaseButton: React.FC<BaseButtonProps> = ({ ...props }) => {
  return (
    <div className="grid grid-cols-1 place-items-center">
      <button type="submit" className={baseButtonStyling} onClick={props.handleClick}>
        <p>{props.label}</p>
      </button>
    </div>
  );
};

export default BaseButton;
