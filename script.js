function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

function sumofCubes(nums) {
    return nums.reduce((sum, n) => sum + Math.pow(n, 3), 0);
}

function filterArray(arr) {
    return arr.filter(item => typeof item === "number");
}

function isSymmetrical(num) {
    let str = num.toString();
    let reversed =
        str.split('').reverse().join('');
    return str === reversed;
}

function objectToArray(obj) {
    return Object.entries(obj);
}

function arrayofMultiples(num, length) {
    let result = [];
    for (let i = 1; i <= length; i++) {
        result.push(num * i);
    }
    return result;
}

function marathonDistance(arr) {
    if (arr || arr.length === 0)
        return false; // empty check

    let total = arr.reduce((sum, num) => sum + Math.abs(num), 0);

    return total === 25;
}