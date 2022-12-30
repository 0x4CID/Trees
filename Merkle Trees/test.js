const Transaction = require("./Transaction")
const TransactionList = require("./TransactionList");
const Tree = require("./Tree");



let testTx1 = new Transaction("Adam", "Jack", 10);
let testTx2 = new Transaction("Tim", "Tom", 19);
let testTx3 = new Transaction("Jane", "Bob", 19);
let testTx4 = new Transaction("Larry", "Rachel", 50);
let testTx5 = new Transaction("Oliver", "James", 100);


let testList = new TransactionList();


//console.log("TEST1");
testList.add(testTx1);
//console.log(testTx1);

//console.log("TEST2");
testList.add(testTx2);
//console.log(testTx2);

//console.log("TEST3");
testList.add(testTx3);
//console.log(testTx3);


//console.log("TEST4");
testList.add(testTx4);
//console.log(testTx4);

//console.log("TEST5");
testList.add(testTx5);
//console.log(testTx5);


const tree = new Tree();

tree.createTree(testList.list);


tree.verify(testTx1)
tree.verify(testTx2);
tree.verify(testTx3);
tree.verify(testTx4);
tree.verify(testTx5);



testTx1.to = "Rich";

//console.log(testTx1);

tree.verify(testTx1);
