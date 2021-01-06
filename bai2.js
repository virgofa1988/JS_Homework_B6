// input : nhập 2 biến x và n

// Khai báo 2 biến x và n sau đó lấy giá trị từ User Nhập vào. khai báo biến tích luỹ SumN
//  Tạo hàm onclick để thực thi : bên trong sử dụng vòng lập
// for ( i = 1; i <= n; i++) nếu đk đúng thì SumN = x^i;
// Xuất ra sumN

document.getElementById("nutSmit").addEventListener("click", function (event) {
  event.preventDefault();
  var x = parseInt(document.getElementById("nhapX").value);
  var n = parseInt(document.getElementById("nhapN").value);
  var sumN = 0;

  if (n <= 0) {
    alert(" Nhập giá trị n lớn hơn 0 nhé");
    return;
  }
  for (i = 1; i <= n; i++) {
    sumN += Math.pow(x, i);
  }
  console.log("S(n) voi x = " + x + " n = " + n + " = " + sumN);
  var content = document.createElement("p");
  content.innerHTML =
    "Voi x = " + x + " & n = " + n + "<br/>" + "S(n)  = " + sumN;
  document.getElementById("footer").appendChild(content);
});
