// input Nhập vào giá trị n
// processing
// khai báo biên tích luỹ giaiThua = 1, va biến n
// lấy giá trị người dùng nhập vào cho giá trị n
// dùng vòng lặp for cho i chạy từ 1 tới n
// giaiThua sẽ bằng giaiThua * i

document.getElementById("nutSmit").addEventListener("click", function (event) {
  event.preventDefault();

  var giaiThua = 1;
  var n = parseInt(document.getElementById("nhapN").value);
  for (i = 1; i <= n; i++) {
    giaiThua *= i;
  }
  var newP = document.createElement("h4");

  newP.style.color = "#007bff";
  newP.innerHTML = "Giá Trị Giai Thừa với " + n + " là : " + giaiThua;

  document.getElementById("footer").appendChild(newP);
});
