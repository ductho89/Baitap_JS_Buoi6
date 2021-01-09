function tongSoMu(event) {
  event.preventDefault();
  // Tạo các biến và gán giá trị tương ứng do người dùng nhập vào
  var x = parseInt(document.getElementById("soX").value);
  var n = parseInt(document.getElementById("soN").value);
  // Tạo biến tong để gán kết quả.
  var tong = parseInt(0);
  // Xử lý
  for (i = 1; i <= n; i++) {
    tong += Math.pow(x, i); //Sử dụng hàm pow đê tính số mũ
  }
  // In kết quả ra ngoài màn hình chính.
  document.getElementById("CF").innerHTML =
    "Kết quả là: " + tong.toLocaleString();
  document.getElementById("CF").className = "card-footer d-block";
}
