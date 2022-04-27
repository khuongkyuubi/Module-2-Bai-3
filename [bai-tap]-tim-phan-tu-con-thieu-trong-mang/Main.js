var numbers = [0, 2, 3, 4, 7, 8, 9, 10];
var missingNumbers = [];
// Cách 1
findMissingNumbers: for (var i_1 = 0; i_1 <= 10; i_1++) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var value = numbers_1[_i];
        if (i_1 === value) {
            continue findMissingNumbers;
            // break;
        }
    }
    missingNumbers.push(i_1);
}
console.log(missingNumbers);
// Cách 2
var missingNumbers2 = [];
var i = 0;
while (i <= 10) {
    if (numbers.indexOf(i) === -1) {
        missingNumbers2.push(i);
    }
    i++;
}
console.log(missingNumbers2);
