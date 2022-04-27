let numbers: number[] = [0, 2, 3, 4, 7, 8, 9, 10];
let missingNumbers: number[] = [];

// Cách 1
findMissingNumbers:
    for (let i: number = 0; i <= 10; i++) {
        for (let value of numbers) {
            if (i === value) {
                continue findMissingNumbers
                // break;
            }
        }
        missingNumbers.push(i);
    }

console.log(missingNumbers);

// Cách 2
let missingNumbers2: number[] = [];
let i = 0;
while (i <= 10) {
    if (numbers.indexOf(i) === -1) {
        missingNumbers2.push(i)
    }
    i++;
}
console.log(missingNumbers2);

