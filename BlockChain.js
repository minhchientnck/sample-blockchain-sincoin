var Block = require('./Block');

class BlockChain {
  constructor() {
    this.chain = [this.initFirstBlock()];
    this.difficult = 6;
  }

  initFirstBlock() {
    return new Block(0, Date.now().toString(), 'init-block', '0');
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block = new Block()) {
    block.prevHash = this.getLastBlock().hash;
    block.mine(this.difficult);
    this.chain.push(Object.freeze(block));
  }

  isValid(blockchain = this) {
    for (let i = 1; i < blockchain.chain.length; i++) {
      const currentBlock = blockchain.chain[i];
      const prevBlock = blockchain.chain[i - 1];
      if (currentBlock.hash !== currentBlock.computeHash() ||
        prevBlock.hash !== prevBlock.computeHash()) {
        return false;
      }
    }
    return true;
  }
}

module.exports = BlockChain;
