let n1 = 0;
let result = `${n1}`;
let temp = 0;
let count = 0;
let length = 10;
let sum = n1;

// Dùng đệ quy để tìm ra các số fibonaci
function fibonaci(n2) {
    count++; // count để kiểm soát số lần đệ quy
    result += ` ${n2}`; // result để lưu giá trị các số fibonaci
    sum += n2; // tính tổng các số
    temp = n2;  // 3 câu lệnh này để tìm lần lượt các số fibonaci
    n2 += n1; // sau mỗi lần gọi thì n2 = n2 + n1
    n1 = temp; // sau mỗi lần gọi thì n1 = n2 trước đó
    if (count === length) {
        console.log(`Sum of ${length} first fibonaci is: ${sum}`)
        return result;
    }
    return fibonaci(n2); // sau mỗi lần gọi luôn phải return lại hàm nếu không sẽ bị undefined
    // nếu không return thì cái return trong điều kiện kia chỉ trả về tại thời điểm count === 10, khi đó hàm đang
    // gọi bị lồng trong nhiều hàm khác, dẫn đến chỉ thoát khỏi hàm đó mà k thoát khỏi các hàm khác
}

console.log(`${length} first fibonaci number is: ` + fibonaci(1));


// hàm tính tổng dãy số fibonaci đó
function sumOfFibonacis(result) {
    let arr = result.split(" ");
    let sum2 = 0;
    for (let value of arr) {
        sum2 += +value;
    }
    return sum2;

}

console.log(`Sum of ${length} first fibonaci is: ${sumOfFibonacis(result)}`);