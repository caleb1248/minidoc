import { publicEncrypt, privateDecrypt } from 'crypto';
import json from './thing.json' assert { type: 'json' };

const { publicKey, privateKey } = json;
console.log(json);

const encryptedData = publicEncrypt(publicKey, Buffer.from('hi mom'));

console.log(encryptedData.toString('hex'));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString('utf-8'));
