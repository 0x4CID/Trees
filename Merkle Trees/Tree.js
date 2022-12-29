const generateHash = require("./generateHash")

class Tree {
	constructor() {
		this.root = [];
	}

	createTree(transactionList) {

		this.root.unshift(transactionList);
		this.root.unshift(transactionList.map(t => t.hash));

		while(this.root[0].length > 1) {
			
			let temp = [];

			for(let i = 0; i < this.root[0].length; i += 2) {
				if(i < this.root[0].length -1 && i % 2 == 0) {
					temp.push(generateHash(this.root[0][i] + this.root[0][i + 1]));
				} else {
					temp.push(this.root[0][i]);
				}
			}
			//console.log(this.root[0]);
			//console.log(temp);
			this.root.unshift(temp)
		}

	}

	verify(transaction) {
		let pos  = this.root.slice(-1)[0].findIndex(t => t.hash == transaction.hash);
		if(pos >= 0) {
			let txHash = transaction.hash;
			//console.log(transaction);
			for(let i = this.root.length -2; i > 0; i--) {
				let neighbor;
				//console.log(pos % 2);
				if(pos % 2 == 0) {
					neighbor = this.root[i][pos+1];
					pos = Math.floor((pos) / 2);
					txHash = generateHash(txHash + neighbor);
					
				} else {
					neighbor = this.root[i][pos - 1];
					pos = Math.floor((pos - 1) / 2)
					txHash = generateHash(neighbor + txHash);
					
				}
			}
			//console.log("TxHash: ", txHash);
			//console.log("Root: ", this.root[0][0])
			if (txHash == this.root[0][0]) {
				console.log("Transaction is valid.");
			} else {
				console.log("Transaction not valid.");
			}
		} else {
			console.log("Data not found with id.");
		}
	
	}
}

module.exports = (
	Tree
)


