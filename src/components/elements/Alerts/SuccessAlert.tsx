import React from "react";

type SuccessAlertProps = {
  alertLabel: string;
  alertTitle: string;
  className?: string;
};

const SuccessAlert: React.FC<SuccessAlertProps> = ({ ...props }) => {
  return (
    <div className="p-5 w-full sm:w-1/2 bg-green-100 rounded">
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="flex-none w-4 h-4 text-green-500 fill-current"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
          </svg>
          <div className="flex-1 text-sm font-medium leading-tight text-green-700">
            {props.alertLabel}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="flex-none w-3 h-3 text-green-600 fill-current"
        >
          <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
        </svg>
      </div>
    </div>
  );
};

export default SuccessAlert;
