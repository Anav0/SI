const QueenSolver = require('./QueenSolver');
const solver = new QueenSolver();

console.log("Zadanie 2");
console.log();
const validPermutations = solver.getAllValidPermutations();
console.log();
solver.printPermutationOnBoard(validPermutations[0]);
console.log();
solver.printPermutationOnBoard(validPermutations[1]);
console.log();

console.log("Zadanie 3");
console.log();
const permutation = solver.getAllValidPermutationsDFS();
console.log(permutation)
solver.printPermutationOnBoard(permutation);
console.log();