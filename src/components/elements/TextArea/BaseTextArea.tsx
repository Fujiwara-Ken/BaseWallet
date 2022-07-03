import React from 'react';

type BaseTextAreaProps = {
  label: string;
  isDisabled?: boolean;
  className?: string;
  width?: string;
};

const BaseTextArea: React.FC<BaseTextAreaProps> = ({ ...props }) => {
  const wrapperStyling = `pt-3 mb-6 bg-gray-200 rounded`;
  const labelStyling = `block mb-2 ml-3 text-sm font-bold text-gray-700`;
  const textAreaStyling = `w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:border-purple-600 focus:outline-none`;

  return (
    <div className={wrapperStyling}>
      <label className={labelStyling} htmlFor="password">
        {props.label}
      </label>
      <input type="text" className={textAreaStyling} />
    </div>
  );
};

export default BaseTextArea;
