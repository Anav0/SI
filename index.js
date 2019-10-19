const QueenSolver = require('./QueenSolver');
const solver = new QueenSolver();
const validPermutations = solver.getAllValidPermutations();
console.log(validPermutations);
solver.printPermutationOnBoard(validPermutations[0]);
console.log();
solver.printPermutationOnBoard(validPermutations[1]);