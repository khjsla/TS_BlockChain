//RUN WITH npm start.

class Block {
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
     ){
          this.index = index;
          this.hash = hash;
          this.previousHash = previousHash;
          this.data = data;
          this.timestamp = timestamp;
     }
}

const genesisBlock:Block = new Block(0,"202020202020202","","Hello", 123456);

let blockchain: [Block] = [genesisBlock]; 
//[Block] = this mean == array of Block .
//and can make array *ONLY* with Block. 

//blockchain.push("dumbstuff"); 
// ㄴ It Can not be work because of String is NOT a BLOCK
// and this is the smart of the TS

console.log('blockchain: ', blockchain);



export { };