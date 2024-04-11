// / lôi dữ liệu từ hàm data để in ra màn hình
import { myData } from "./Data/data.js";
// check dữ liệu xem đã vào hay chưa
console.log(myData);
// tạo hàm để chạy dữ liệu
Show(myData);// đưa dữ liệu vào hàm Show
function Show(object){
    var dem = 0;
        for (let i in object) {
            if (dem % 3 == 0) {
                var row = document.createElement("div");
                row.classList.add("row");
                row.classList.add('row-cols-1');
                row.classList.add('row-cols-md-3');
                var Mod = document.getElementById("Product_List");
                if(Mod){
                    Mod.appendChild(row);
                }
                console.log(row);
            }
            var col = document.createElement("div");
            col.classList.add("col");
            col.classList.add('mb-4')
            col.classList.add("mod");
            col.style.borderRadius = "5px";
            var Product_cart = document.createElement("div");
            Product_cart.style.margin = "auto";
            Product_cart.classList.add("cart");
            Product_cart.style = "max-width: 18rem;";
            var Img_Pr = document.createElement("img");
            Img_Pr.src = object[i].src;
            Img_Pr.style.width = "350px";
            Img_Pr.style.height = "300px"
            Img_Pr.style.margin = "auto";
            Img_Pr.style.borderRadius = "5%";
            Img_Pr.style.padding = "25px";
            row.appendChild(col); /// col là con của row
            col.appendChild(Product_cart); // Product_cart là con của col
            Product_cart.appendChild(Img_Pr);
            var Body_Product = document.createElement("div");
            Body_Product.classList.add("cart-body");
            Body_Product.classList.add('text-info')
            Product_cart.appendChild(Body_Product); //
            var Name_Product = document.createElement("h4");
            Name_Product.classList.add("card-title");
            Name_Product.style.color = "red";
            Name_Product.textContent = object[i].MSP + ": " + object[i].Name_Product;
            Body_Product.appendChild(Name_Product);
            var Comment_Product = document.createElement("p");
            Comment_Product.classList.add("card-text");
            Comment_Product.textContent = "Cấu hình: " + object[i].Comment_Product;
            Body_Product.appendChild(Comment_Product);
            var Price_Product = document.createElement("h4");
            Price_Product.style.textAlign = "center"
            Price_Product.classList.add("card-text");
            Price_Product.textContent = "Giá bán: " + formatCurrency(object[i].Price_Product) + " ₫";
            Body_Product.appendChild(Price_Product);
            var Add_Product = document.createElement("button");
            var Buy_Product = document.createElement("button");
            Add_Product.classList.add("btn");
            Add_Product.classList.add("btn-outline-success");
            Add_Product.id = i;
            Add_Product.textContent = "Them vao gio hang";
            Buy_Product.style.marginBottom = "15px";
            Buy_Product.classList.add("btn");
            Buy_Product.classList.add("btn-outline-dark");
            Buy_Product.textContent = "Đặt mua";
            Buy_Product.onclick = function () {
                window.location.href = "/Product_Cart/Buy_Product.html";
            }
            Add_Product.style.marginBottom = "15px";
            Add_Product.style.marginRight = "15px";
            Body_Product.appendChild(Add_Product);
            Body_Product.appendChild(Buy_Product);
            Add_Product.onclick = function () {
                var Add = {id: object[i].id, src: object[i].src, name: object[i].Name_Product, cmt: object[i].Comment_Product, price: object[i].Price_Product, Qty: object[i].Qty, msp: object[i].MSP };
                updateCart(Add, 'add');
                console.log(object[i].Name_Product+ " Đã Được thêm");
                $(document).ready(function() {
                    showCartMessage('Sản phẩm đã được thêm vào giỏ hàng.');
                });
            }
            dem++;
        }
}
function showCartMessage(message) {
    $('#cartMessage').text(message);
    $('#cartMessageModal').modal('show');

    // Tự đóng box thông báo sau 1.5 giây
    setTimeout(function() {
      $('#cartMessageModal').modal('hide');
    }, 1500);
};
var check;
// add Item vao gio hang
function updateCart(product, action) {
    // Kiểm tra xem localStorage có tồn tại không
    if (typeof localStorage !== 'undefined' && localStorage !== null) {
        // Kiểm tra xem có giỏ hàng nào đã được lưu trữ trong Local Storage chưa (Lưu trữ cục bộ)
        var cart = localStorage.getItem('List_Item_Added');
        if (!cart) {
            // Nếu chưa có giỏ hàng, tạo một giỏ hàng mới
            cart = [];
        } else {
            // Nếu đã có giỏ hàng, chuyển đổi từ chuỗi JSON sang mảng JavaScript
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
        localStorage.setItem('List_Item_Added', JSON.stringify(cart));

    } else {
        // Xử lý trường hợp localStorage không tồn tại hoặc không hoạt động
        console.error("Local storage is not available.");
    }
    check = false;
}
function formatCurrency(amount) {
    // Chia số cho 1000 và giữ ba chữ số thập phân
    var formattedAmount = (amount / 1000).toFixed(3);
    // Thay thế dấu chấm phân cách hàng nghìn bằng dấu chấm
    formattedAmount = formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedAmount;
}
// bắt sự kiện click vào nút giỏ hàng
