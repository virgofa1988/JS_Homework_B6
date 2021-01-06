//input
// tạo biến tổng tích luỹ sumN , và n

// processing
// Dùng vòng lập Do While để kiểm tra điều kiện khi sumN > 10000 thì dừng và xuất ra n

var sumN = 0;
n = 1;

do {
  sumN += n;
  n++;
} while (sumN <= 10000);

console.log(" n = " + n);
