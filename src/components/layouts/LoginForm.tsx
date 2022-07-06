import React from "react";
import LoginButton from "../elements/Button/LoginButton";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 min-h-full">
        <div className="space-y-8 w-full max-w-md">
          <div>
            <img
              className="mx-auto w-auto h-12"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Login to your Wallet
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block relative focus:z-10 py-2 px-3 w-full sm:text-sm text-gray-900 placeholder:text-gray-500 rounded-none rounded-t-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 appearance-none"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block relative focus:z-10 py-2 px-3 w-full sm:text-sm text-gray-900 placeholder:text-gray-500 rounded-none rounded-b-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 appearance-none"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              {" "}
              <LoginButton />
              <div className="flex before:flex-1 after:flex-1 items-center my-4 before:mt-0.5 after:mt-0.5 before:border-t after:border-t before:border-gray-300 after:border-gray-300">
                <p className="mx-4 mb-0 font-semibold text-center">OR</p>
              </div>
              <LoginButton />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
