"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "202020202020202", "", "Hello", 123456);
let blockchain = [genesisBlock];
//[Block] = this mean == array of Block .
//and can make array *ONLY* with Block. 
//blockchain.push("dumbstuff"); 
// ㄴ It Can not be work because of String is NOT a BLOCK
// and this is the smart of the TS
console.log('blockchain: ', blockchain);
//# sourceMappingURL=index.js.map