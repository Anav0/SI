module.exports = class PermutationGenerator {
    getFactorial(n) {
        let result = 1;
        while (n != 1) {
            result = result * n;
            n = n - 1;
        }
        return result;
    }
    generatePermutation(numbers) {
        return getPermutation(numbers.split(""));
    }
}

function getPermutation(numbers) {
    let permutations = [];

    for (let i = 0; i < numbers.length; i++) {
        let rest = getPermutation(numbers.slice(0, i).concat(numbers.slice(i + 1)));
        if (!rest.length) {
            permutations.push([numbers[i]])
        } else {
            for (let j = 0; j < rest.length; j++) {
                permutations.push([numbers[i]].concat(rest[j]))
            }
        }
    }
    return permutations;
}