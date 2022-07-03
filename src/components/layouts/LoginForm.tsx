import React from 'react';
import LoginButton from '../elements/Button/LoginButton';
import BaseLink from '../elements/Link/BaseLink';
import BaseTextArea from '../elements/TextArea/BaseTextArea';

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
            <BaseTextArea label="Email" />
            <BaseTextArea label="Password" />
            <BaseLink />
            <LoginButton />
          </form>
        </section>
        <p>アカウント作ってない場合のサインアップリンクを作る</p>
      </main>
    </>
  );
};

export default LoginForm;
