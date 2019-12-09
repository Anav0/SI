module.exports = class QueenSolver {
  constructor(boardSize = 8) {
    this.boardSize = boardSize;
  }

  getAllValidPermutations() {
    let validPermutations = [];
    const permutations = generatePermutationsForBoard(this.boardSize);
    console.log(
      `Generated: ${permutations.length} permutations for ${this.boardSize}x${this.boardSize} board`
    );
    for (let permutation of permutations) {
      if (this.isPermutationValid(permutation))
        validPermutations.push(permutation);
    }
    console.log(`Found ${validPermutations.length} valid permutations`);
    console.log(
      `Found ${permutations.length -
        validPermutations.length} invalid permutations`
    );
    return validPermutations;
  }

  getAllValidPermutationsDFS(column = 0, row = 0, permutation = []) {
    //for each row try to place hetman in right column
    for (row; row < this.boardSize; row++) {
      for (column; column < this.boardSize; column++) {
        if (!this.isPositionBlocked(row, column, permutation)) {
          permutation[row] = column;
          column = 0;
          break;
        } else if (column === this.boardSize - 1) {
          do {
            column = permutation[row - 1];
            permutation.splice(row - 1, 1);
            row--;
          } while (column >= this.boardSize - 1);
          //permutation = this.getAllValidPermutationsDFS(column, row, permutation);
        }
      }
    }
    return permutation;
  }

  isPositionBlocked(row, column, permutation) {
    //Cannot be occupied
    if (permutation[row] === column) return true;
    //Cannot be across each other
    for (let newRowPos = 0; newRowPos < permutation.length; newRowPos++) {
      if (newRowPos === row) continue;
      //Cannot be in the same column
      if (permutation[newRowPos] === column) return true;
      const diff = Math.abs(row - newRowPos);
      const diffCannotBe = Math.abs(permutation[newRowPos] - column);
      if (diff === diffCannotBe) return true;
    }
    return false;
  }

  isPermutationValid(permutation) {
    for (let column = 0; column < this.boardSize; column++) {
      const rowPos = permutation[column];
      for (let nextRowPos of permutation) {
        if (nextRowPos === rowPos) continue;
        const diff = Math.abs(rowPos - nextRowPos);
        const diffCannotBe = Math.abs(permutation.indexOf(nextRowPos) - column);
        if (diff === diffCannotBe) return false;
      }
    }
    return true;
  }

  printPermutationOnBoard(permutation) {
    const queen = "X";
    for (let row = 0; row < this.boardSize; row++) {
      let printedRow = "";
      for (let column = 0; column < this.boardSize; column++) {
        if (column === 0) printedRow += "[";
        else printedRow += "|";

        if (row == permutation[column]) printedRow += queen;
        else printedRow += " ";

        if (column == this.boardSize - 1) printedRow += "]";
      }
      console.log(printedRow);
    }
  }
};

function generatePermutationsForBoard(boardSize) {
  const PermutationGenerator = require("./PermutationGenerator");
  const generator = new PermutationGenerator();
  let numbers = [];
  for (let i = 0; i < boardSize; i++) {
    numbers.push(i.toString());
  }
  return generator.generatePermutation(numbers.join(""));
}
