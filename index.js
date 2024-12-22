const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);


const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);


const n = 5;
for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
}
