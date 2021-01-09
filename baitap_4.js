function theDiv(event) {
  event.preventDefault();
  // Tạo biến và gán giá trị tương đương do người dùng nhập vào
  var soDiv = parseInt(document.getElementById("soDIV").value);
  // Xử lý
  // Tạo vòng lặp for
  for (i = 1; i <= soDiv; i++) {
    // Tạo các thẻ div theo số lượng n người dùng nhập vào
    var taoDiv = document.createElement("div");
    taoDiv.innerHTML = i;
    // Nội dung bên trong the div chính là số thứ tự của nó (số thứ tự đếm bình thường)

    document.getElementById("CF").appendChild(taoDiv);
    //Append các thẻ div được tạo ra vào phần footer
    // Xét điều kiện cho số thứ tự của các thẻ div đó
    if (i % 2 == 1) {
      taoDiv.style.backgroundColor = "green";
      //Chọn màu xanh lá thay vì màu xanh dương cho dễ nhìn thấy nội dung bên trong
    } else {
      taoDiv.style.backgroundColor = "red";
    }
  }
}
