window.onload = function () {
    Add();
}
// dùng import để lấy dữ liệu từ file index.js (lười copy qua)
var cartData = localStorage.getItem('cart_search');
if (cartData !== null) {
    var cart = JSON.parse(cartData);
    console.log(cart);
    if(cart.length <= 0){
        console.log("Không có dữ liệu trong Local Storage.");
    }
}
function Add() {
    var dem = 0;
    for (let i in cart) {
        if (dem % 3 == 0) {
            var row = document.createElement("div");
            row.classList.add("row");
            var Mod = document.getElementById("Product_List_1");
            Mod.appendChild(row);
            console.log(row);
        }
        var col = document.createElement("div");
        col.classList.add("col-lg-4");
        col.classList.add("mod");
        col.style.borderRadius = "5px";
        var Product_cart = document.createElement("div");
        Product_cart.style.margin = "auto";
        Product_cart.classList.add("cart");
        Product_cart.style = "width: 18rem;";
        var Img_Pr = document.createElement("img");
        Img_Pr.src = cart[i].src;
        Img_Pr.style.width = "350px";
        Img_Pr.style.height = "300px"
        Img_Pr.style.margin = "auto";
        Img_Pr.style.borderRadius = "5%";
        Img_Pr.style.padding = "15px"
        row.appendChild(col); /// col là con của row
        col.appendChild(Product_cart); // Product_cart là con của col
        Product_cart.appendChild(Img_Pr);
        var Body_Product = document.createElement("div");
        Body_Product.classList.add("cart-body");
        Product_cart.appendChild(Body_Product); //
        var Name_Product = document.createElement("h5");
        Name_Product.classList.add("card-title");
        Name_Product.textContent = cart[i].msp + ": " + cart[i].name;
        Body_Product.appendChild(Name_Product);
        var Comment_Product = document.createElement("p");
        Comment_Product.classList.add("card-text");
        Comment_Product.textContent = "Cấu hình: " + cart[i].cmt;
        Body_Product.appendChild(Comment_Product);
        var Price_Product = document.createElement("h4");
        Price_Product.style.textAlign = "center"
        Price_Product.classList.add("card-text");
        Price_Product.textContent = "Giá bán: " + cart[i].price;
        Body_Product.appendChild(Price_Product);
        var Add_Product = document.createElement("button");
        var Buy_Product = document.createElement("button");
        Add_Product.classList.add("btn");
        Add_Product.classList.add("btn-primary");
        Add_Product.id = i;
        Add_Product.textContent = "Thêm vào giỏ hàng";
        Buy_Product.style.marginBottom = "15px";
        Buy_Product.classList.add("btn");
        Buy_Product.classList.add("btn-primary");
        Buy_Product.textContent = "Đặt mua";
        Add_Product.style.marginBottom = "15px";
        Add_Product.style.marginRight = "15px";
        Body_Product.appendChild(Add_Product);
        Body_Product.appendChild(Buy_Product);
        Add_Product.onclick = function () {
            var Add = { id: cart[i].id, src: cart[i].src, name: cart[i].name, cmt: cart[i].cmt, price: cart[i].price, Qty: cart[i].Qty };
            updateCart(Add, 'add');
            console.log(cart[i].id + "Đã Được thêm");
        }
        dem++;
    }
}
var check;
// gio hang
function updateCart(product, action) {
    if (typeof localStorage !== 'undefined' && localStorage !== null) {
        var cart = localStorage.getItem('cart');
        if (!cart) {
            cart = [];
        } else {
            cart = JSON.parse(cart);
        }
        // Thực hiện thêm hoặc xóa sản phẩm tùy thuộc vào hành động
        if (action === 'add') {
            for (let i in cart) {
                if (cart[i].id === product.id) {
                    cart[i].Qty++;
                    check = true;
                    break;
                }
            }
            if (cart == null || cart == undefined || cart.length == 0 || !check) {
                cart.push(product);
            }
        } else if (action === 'remove') {
            // Xóa sản phẩm khỏi giỏ hàng (ví dụ: dựa vào id sản phẩm)
            cart = cart.filter(item => item.id !== product.id);
        }
        // Lưu lại giỏ hàng vào Local Storage
        localStorage.setItem('cart', JSON.stringify(cart));

    } else {
        // Xử lý trường hợp localStorage không tồn tại hoặc không hoạt động
        console.error("Local storage is not available.");
    }
    check = false;
}
// // localStorage.clear();
// // :417 Mở nó ra để xóa toàn bộ giỏ hàng