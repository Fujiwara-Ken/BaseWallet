import React from 'react';
import LoginButton from '../elements/loginButton';

const LoginForm: React.FC = () => {
  return (
    <>
      <main className="max-w-lg p-8 mx-auto my-10 bg-white rounded-lg shadow-2xl md:p-12">
        <section>
          <h3 className="text-2xl font-bold">Solana Wallet Application</h3>
          <p className="pt-2 text-gray-600">Login in to your account.</p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" method="POST" action="#">
            <div className="pt-3 mb-6 bg-gray-200 rounded">
              <label className="block mb-2 ml-3 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:border-purple-600 focus:outline-none"
              />
            </div>
            <div className="pt-3 mb-6 bg-gray-200 rounded">
              <label className="block mb-2 ml-3 text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:border-purple-600 focus:outline-none"
              />
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="mb-6 text-sm text-purple-600 hover:text-purple-700 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <LoginButton />
          </form>
        </section>
      </main>
    </>
  );
};

export default LoginForm;
