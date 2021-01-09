function tinhGiaiThua(event) {
  event.preventDefault;
  // Tạo biến và gán giá trị tương ứng do người dùng nhập vào
  var n = parseInt(document.getElementById("n").value);
  var giaiThua = parseInt(1);
  // Xử lý
  for (i = 1; i <= n; i++) {
    giaiThua *= i; // Nhân các phần tử lần lượt với nhau
  }
  //In kết quả ra ngoài màn hình chính.
  document.getElementById("CF").innerHTML =
    "Giá trị của " + n + "! là: " + giaiThua.toLocaleString();
  document.getElementById("CF").className = "card-footer d-block";
}
