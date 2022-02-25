var CryptoJS = require('crypto-js');

class Wallet {
  constructor() {
    const keys = CryptoJS.generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicKeyEncoding: { type: "spki", format: "pem" },
      privateKeyEncoding: { type: "pkcs8", format: "pem" },
    });
    this.privateKey = keys.privateKey;
    this.publicKey = keys.publicKey;
  }
}

module.exports = Wallet;
