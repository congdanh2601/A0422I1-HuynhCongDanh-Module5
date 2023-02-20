// happy coding 👻
console.log("hello world");

function fibonacci(n: number) {
    let arr = [1, 1];
    for (let i = 2; i < n-2; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
}

function calculateSum(arr: number[]) {
    let sum: number = 0;
    let n:number;
    for (n of arr) {
        sum += n;
    }
    return sum;
}

let quantity: number = 10;
let arr: number[] = fibonacci(quantity);
let sum: number = calculateSum(arr);
console.log(`${quantity} số đầu tiên của dãy Fibonacci: ${arr}`);
console.log(`Tổng bằng ${sum}`);