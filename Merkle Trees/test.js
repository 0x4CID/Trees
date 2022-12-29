const Transaction = require("./Transaction")
const TransactionList = require("./TransactionList");
const Tree = require("./Tree");



let testTx1 = new Transaction("Adam", "Jack", 10);
let testTx2 = new Transaction("Tim", "Tom", 19);

let testList = new TransactionList();

testList.add(testTx1);
console.log("TEST1");
console.log(testTx1);
testList.add(testTx2);
console.log("TEST2");
console.log(testTx2)


const tree = new Tree();

tree.createTree(testList.list);


tree.verify(testTx1)

tree.verify(testTx2);
