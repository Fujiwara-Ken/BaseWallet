import React from "react";
import LoginButton from "../elements/Button/LoginButton";
import SignUpButton from "../elements/Button/SignUpButton";
import BaseLink from "../elements/Link/BaseLink";
import BaseTextArea from "../elements/TextArea/BaseTextArea";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 min-h-full">
        <div className="space-y-8 w-full max-w-md">
          <div>
            <img
              src={"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"}
              alt={"Workflow"}
              className="mx-auto w-auto h-12"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Login to your Wallet
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <BaseTextArea label="Email" />
                <BaseTextArea label="Password" />
              </div>
            </div>
            <BaseLink linkLabel="Forgot your password?" />
            <div>
              {" "}
              <LoginButton />
              <div className="flex before:flex-1 after:flex-1 items-center my-4 before:mt-0.5 after:mt-0.5 before:border-t after:border-t before:border-gray-300 after:border-gray-300">
                <p className="mx-4 mb-0 font-semibold text-center">OR</p>
              </div>
              <SignUpButton />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
