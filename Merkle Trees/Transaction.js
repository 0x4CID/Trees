const generateHash = require("./generateHash")
const crypto = require("crypto");

class Transaction {
	constructor(to, from, amount) {
		this.to = to;
		this.from = from;
		this.amount = amount;
		this.txUuid = crypto.randomUUID();
		this.hash = generateHash(this.to + this.from + this.amount + this.txUuid);
	}

}

module.exports = (
	Transaction
);