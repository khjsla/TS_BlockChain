"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//RUN WITH npm start.
const CyptoJs = require("crypto-js");
class Block {
    //IT CAN BE WITH [ STATIC ]
    //actually, it have to exist in outside
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
//Block 을 생성하지 않아도, 사용가능한 method 를 만들고 싶으면 ,,
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CyptoJs.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "202020202020202", "", "Hello", 123456);
let blockchain = [genesisBlock];
//[Block] = this mean == array of Block .
//and can make array *ONLY* with Block. 
//blockchain.push("dumbstuff"); 
// ㄴ It Can not be work because of String is NOT a BLOCK
// and this is the smart of the TS
console.log('blockchain: ', blockchain);
const getBlockchain = () => blockchain; //[Block] == Block[]
//this is return blockchain.
const getLatestBlock = () => blockchain[blockchain.length - 1]; //this is how to get latest
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock(); //get prev block
    const newIndex = previousBlock.index + 1; //new index. 
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data); //tis need index
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp); //this is NEW BLOCK.
    return newBlock;
};
console.log(createNewBlock("helo"), createNewBlock("byby"));
//# sourceMappingURL=index.js.map