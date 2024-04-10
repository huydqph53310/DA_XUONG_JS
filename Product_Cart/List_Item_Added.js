var cartData = localStorage.getItem('List_Item_Added');
// gọi cái localStorage để lấy dữ liệu của đơn hàng đã được thêm ở bên ngoài trang chủ
if (cartData !== null) {
    var cart = JSON.parse(cartData);
    Add_Cart();
    if (cart.length <= 0) {
        console.log("Không có dữ liệu trong Local Storage.");
        var father2 = document.getElementById("List_Item_null");
        var col3 = document.createElement("div");
        col3.classList.add("col-lg-12");
        col3.classList.add("mod");
        if (father2) {
            father2.appendChild(col3);
        }
        var null3 = document.createElement("h1");
        null3.textContent = "Giỏ hàng trống"
        null3.classList.add("mod");
        null3.style = "text-align: center; margin: 20px auto; color: red;";
        if (father2) {
            father2.appendChild(null3);
        }
    }
}
function tumod(){
    var Check_Boxs = document.querySelectorAll('.checkitem');
    for (let i = 0; i < Check_Boxs.length; i++) {
       if (Check_Boxs[i].checked == true) {
        console.log(Check_Boxs[i].value)
    }
}
}
function Add_Cart() {
    var father = document.getElementById("List_Item");
    for (let i in cart) {
        var List = document.createElement("div");
        List.classList.add("col-lg-12");
        List.classList.add("mod");
        if (father) {
            father.appendChild(List);
        }
        var check = document.createElement('div');
        check.classList.add('checkitem_1');
        List.appendChild(check);
        var Check_Box = document.createElement('input');
        Check_Box.type = 'checkbox';
        Check_Box.classList.add("checkitem");
        Check_Box.style.margin = '100px 30px';
        Check_Box.value = cart[i].id;
        Check_Box.oninput = function(){
          tumod();
        }
        if (check) {
            check.appendChild(Check_Box);
        }
        List.style.display = "flex";
        // thuộc tính đường dẫn tới ảnh
        var img = document.createElement("img");
        img.src = cart[i].src;
        img.style.borderRadius = "5%";
        List.appendChild(img);
        // thuộc tính thẻ con chứa các tên, giá, số lượng được thêm vào
        var div_mod = document.createElement("div");
        div_mod.classList.add("son");
        List.appendChild(div_mod);
        var h3 = document.createElement("h3");
        h3.style.marginTop = "15px";
        h3.textContent = cart[i].msp + ": " + cart[i].name;
        h3.style.color = "red";
        div_mod.appendChild(h3);
        var p = document.createElement("p");
        p.style.marginTop = "15px";
        p.textContent = "cấu hình: " + cart[i].cmt;
        div_mod.appendChild(p);
        var price = document.createElement("p");
        price.style.marginTop = "15px";
        price.textContent = "Giá: " + cart[i].price;
        div_mod.appendChild(price);
        var Qty_p = document.createElement("p");
        Qty_p.style.marginTop = "15px";
        Qty_p.textContent = "Số Lượng: " + cart[i].Qty;
        div_mod.appendChild(Qty_p);
        var div_mod2 = document.createElement("div");
        div_mod2.classList.add("son2");
        div_mod.appendChild(div_mod2);
        var button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.textContent = "Đặt mua ngay";
        button.onclick = function () {
            window.location.href = "/Product_Cart/Buy_Product.html";
        }
        div_mod2.appendChild(button);
        var button2 = document.createElement("button");
        button2.classList.add("btn");
        button2.classList.add("btn-primary");
        button2.style.marginLeft = "25px";
        button2.textContent = "Xóa khỏi giỏ hàng";
        button2.onclick = function () {
            var Remover = { id: cart[i].id };
            updateCart(Remover, 'remove');
            location.reload();
        }
        div_mod2.appendChild(button2);
        // thêm một thuộc tính để mua tất cả hoặc xóa tất cả

    }
}
if (window.location.pathname === "/Product_Cart.html") {
    console.log("Bạn đang ở đường dẫn '/home'.");
} else {
    console.log("Bạn không đang ở đường dẫn '/home'.");
}
function updateCart(product, action) {
    // Kiểm tra xem localStorage có tồn tại không
    if (typeof (localStorage) !== 'undefined' && localStorage !== null) {
        // Kiểm tra xem có giỏ hàng nào đã được lưu trữ trong Local Storage chưa (Lưu trữ cục bộ)
        var cart = localStorage.getItem('List_Item_Added');
        var cart_Checked = localStorage.getItem('Cart_Checked');
        if (!cart) { cart = []; } else { cart = JSON.parse(cart); }
        if (!cart_Checked) { cart_Checked = []; }
        else { cart_Checked = JSON.parse(cart_Checked); }
        // check các hàm chưa phải mảng thì sẽ tạo mảng
        if(action === 'checked'){
            cart_Checked.push(product);
        }
        // Thực hiện thêm hoặc xóa sản phẩm tùy thuộc vào hành động
        if (action === 'remove') {
            // Xóa sản phẩm khỏi giỏ hàng (ví dụ: dựa vào id sản phẩm)
            cart = cart.filter(item => item.id !== product.id);
        }
        // Lưu lại giỏ hàng vào Local Storage
        localStorage.setItem('List_Item_Added', JSON.stringify(cart));

    } else {
        // Xử lý trường hợp localStorage không tồn tại hoặc không hoạt động
        console.error("Local storage is not available.");
    }
}