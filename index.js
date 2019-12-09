const QueenSolver = require('./QueenSolver');
const solver = new QueenSolver();
const permutation = solver.getAllValidPermutationsDFS();
console.log(permutation)
solver.printPermutationOnBoard(permutation);
// const validPermutations = solver.getAllValidPermutations();
// console.log(validPermutations);
// solver.printPermutationOnBoard(validPermutations[0]);
// console.log();
// solver.printPermutationOnBoard(validPermutations[1]);