const Node = require("./Node")

class BinarySearchTree {
	constructor(data=null) {
		this.root = data;
	}

	addNode(data) {
		if(this.root) {
			this.root.addNode(data);
		} else {
			this.root = new Node(data);
		}
	}
}


module.exports = BinarySearchTree;