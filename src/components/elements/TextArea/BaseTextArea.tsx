/* eslint-disable @typescript-eslint/ban-types */
import React from "react";

export type BaseTextAreaProps = {
  formName: string;
  isError: unknown;
  isSingleLine: boolean;
  label: string;
  placeholder: string;
  register: unknown;
  validation?: Object;
};

const BaseTextArea: React.FC<BaseTextAreaProps> = ({ ...props }) => {
  const wrapperStyling = `mb-6`;
  const labelStyling = `block mb-2 ml-3 text-sm font-bold text-gray-700`;
  const textAreaStyling = `w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:border-purple-600 focus:outline-none`;

  return (
    <div className={wrapperStyling}>
      <label className={labelStyling} htmlFor="password">
        {props.label}
      </label>
      <input
        {...props.register(props.formName, { ...props.validation })}
        className={textAreaStyling}
        type="text"
      />
    </div>
  );
};

export default BaseTextArea;
