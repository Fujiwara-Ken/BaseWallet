import NodeRSA from 'node-rsa';

// 初期化
const key = new NodeRSA({ b: 512 });

// RSA公開鍵のPEMを生成
export const generatePublicKey = () => key.exportKey('pkcs1-public-pem');

// RSA秘密鍵のPEMを生成
export const generatePrivateKey = () => key.exportKey('pkcs1-private-pem');

// 秘密鍵からkeyオブジェクトを復元してtextを復号
export const decryptText = (rsaPrivateKey: string, encryptedText: string) => {
  const decryptKey = new NodeRSA(rsaPrivateKey, 'pkcs1-private-pem');
  const decryptedText = decrypt_key.decrypt(encryptedText, 'utf8');
  return decryptedText;
};
