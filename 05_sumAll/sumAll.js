const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }
    let min, max;
    if (num1 < num2) {
        max = num2;
        min = num1;
    }
    else {
        min = num2;
        max = num1;
    }
    if (max != min) {
        return max + sumAll(min, max - 1);
    }
    return min;
};

// Do not edit below this line
module.exports = sumAll;
