class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	addNode(data) {
		if(this.data === data) {
			throw new Error("Data is equal to current node");
		} else if (this.data > data) {
			if(this.left) {
				this.left.addNode(data);
			} else {
				this.left = new Node(data);
			}
		} else if (this.data < data) {
			if(this.right) {
				this.right.addNode(data);
			} else {
				this.right = new Node(data);
			}
		}
	}
}

module.exports = Node;