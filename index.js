var Block = require('./Block');
var BlockChain = require('./BlockChain');
var fs = require('fs');

const SinCoin = new BlockChain();
console.log('SinCoin mining in progress....');
for (let i = 0; i < 10; i++) {
  SinCoin.addBlock(new Block(i, Date.now().toString(), { amount: 1 }));
  console.log('mined', SinCoin.getLastBlock());
}
fs.writeFileSync('./SinCoin.txt', JSON.stringify(SinCoin.chain),  err => {
  if (err) {
    console.error(err)
    return;
  }
  console.log('write successfully')
})

