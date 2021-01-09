function timN(event) {
  event.preventDefault();
  // Tạo biến và gán kết quả do người dùng nhập vào

  var tongCuoiCung = parseInt(document.getElementById("tongCuoiCung").value);
  //Tạo các biến mặc định cho dãy số và tổng
  var i = 1;
  var tong = 0;
  //Xử lý
  while (tong < tongCuoiCung) {
    tong += i;
    i++;
    if (tong > tongCuoiCung) {
      var n = i - 1;
      break;
    }
  }
  // In kết quả ra ngoài màn hình
  document.getElementById("CF").innerHTML = "Số n nhỏ nhất là: " + n;
  document.getElementById("CF").className = "card-footer d-block";
}
