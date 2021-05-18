//RUN WITH npm start.
import * as CyptoJs from 'crypto-js';


class Block {
     //Block 을 생성하지 않아도, 사용가능한 method 를 만들고 싶으면 ,,
     static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => CyptoJs.SHA256(index + previousHash + timestamp + data).toString();
     //IT CAN BE WITH [ STATIC ]
     //actually, it have to exist in outside

     static validateSturcture = (aBlock: Block): boolean => 
     typeof aBlock.index === "number" && 
     typeof aBlock.hash === "string" && 
     typeof aBlock.previousHash === "string" && 
     typeof aBlock.timestamp === "number" && 
     typeof aBlock.data == "string"; //; must

     //after static is better !
     public index: number;
     public hash: string;
     public previousHash: string;
     public data: string;
     public timestamp: number;

     constructor(
          index: number,
          hash: string,
          previousHash: string,
          data: string,
          timestamp: number,
     ) {
          this.index = index;
          this.hash = hash;
          this.previousHash = previousHash;
          this.data = data;
          this.timestamp = timestamp;
     }
}

const genesisBlock: Block = new Block(0, "202020202020202", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];
//[Block] = this mean == array of Block .
//and can make array *ONLY* with Block. 

//blockchain.push("dumbstuff"); 
// ㄴ It Can not be work because of String is NOT a BLOCK
// and this is the smart of the TS

console.log('blockchain: ', blockchain);

const getBlockchain = (): Block[] => blockchain; //[Block] == Block[]
//this is return blockchain.

const getLatestBlock = (): Block => blockchain[blockchain.length - 1]; //this is how to get latest

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => { //have to have data argu , and this is return Block
     const previousBlock: Block = getLatestBlock(); //get prev block
     const newIndex: number = previousBlock.index + 1; //new index. 
     const newTimestamp: number = getNewTimeStamp();
     const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data); //tis need index
     const newBlock: Block = new Block(
          newIndex, 
          newHash, 
          previousBlock.hash, 
          data, 
          newTimestamp
     ); //this is NEW BLOCK.

     //block 이 추가되면, 블록체인에 추가 할거임
     addBlock(newBlock); **

     return newBlock;
};

const getHashforBlock = (aBlock: Block):string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data)

//IS structure valid?
// - validating structure
const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
     if (!Block.validateSturcture(candidateBlock)){
          return false;
     } else if(previousBlock.index +1 !== candidateBlock.index){
          return false
     } else if(previousBlock.hash !== candidateBlock.previousHash){
          return false;
     } else if(getHashforBlock(candidateBlock) !== candidateBlock.hash){ 
          return false;
     } else{
          return true;
     } //get the hash from block
}; //구조검증 //hash검증.

//블록에 블록체인 추가하면 됨
const addBlock = (candidateBlock: Block): void =>{
     if(isBlockValid(candidateBlock, getLatestBlock())){
          blockchain.push(candidateBlock);
     }
}

createNewBlock("seconde block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

console.log(createNewBlock("helo"), createNewBlock("byby"))

export { };