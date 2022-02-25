var CryptoJS = require('crypto-js');

class Block {
  constructor(index, timestamp = Date.now(), data, prevHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.computeHash();
    this.prevHash = prevHash;
    this.nonce = 0;
  }

  computeHash() {
    return CryptoJS.SHA256(`${this.index}${this.prevHash}${this.timestamp}${JSON.stringify(this.data)}${this.nonce}`).toString();
  }

  toString() {
    return JSON.stringify(this);
  }

  mine(difficult) {
    while (this.hash.substring(0, difficult) !== Array(difficult + 1).join('0')) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

module.exports = Block;

