// Export hàm getData
import { myData } from './Data/data.js';
var mod = '';

export function Input(value) {
    mod = value
    ReadInput(mod);
}
function ReadInput(content) {
    const OBJ = {
        PK: content,
    }
    const asusProducts = myData.filter(myData => myData.PK === OBJ.PK);
    console.log(asusProducts);
    Output(asusProducts);
    // Output(asusProducts);
}
function Output(Product) {
    for (let i in Product) {
        var Add = { id: Product[i].id, src: Product[i].src, name: Product[i].Name_Product, cmt: Product[i].Comment_Product, price: Product[i].Price_Product, Qty: Product[i].Qty, msp: Product[i].MSP, bc: Product[i].barcode };
        updateCart(Add, 'search');
        console.log(Product[i].id + "Đã Được thêm");
    }
}
function clearCart() {
    // Kiểm tra xem có dữ liệu cart không
    if (localStorage.getItem('cart_search') !== null) {
        // Nếu có, xóa dữ liệu của cart
        localStorage.removeItem('cart_search');
    }
} // xóa dữ liệu trong local storage
// add Item vao gio hang

// dùng import để lấy dữ liệu từ file index.js (lười copy qua)
var cartData = localStorage.getItem('cart_search');
if (cartData !== null) {
    var cart_search = JSON.parse(cartData);
    console.log(cart_search);
    if (cart_search.length <= 0) {
        console.log("Không có dữ liệu trong Local Storage.");
    }
}

function Show_search() {
    var dem = 0;
    for (let i in cart_search) {
        if (dem % 3 == 0) {
            var row = document.createElement("div");
            row.classList.add("row");
            var Mod = document.getElementById("Product_List_1");
            if (Mod) {
                Mod.appendChild(row);
            }
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
        Img_Pr.src = cart_search[i].src;
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
        Name_Product.textContent = cart_search[i].msp + ": " + cart_search[i].name;
        Body_Product.appendChild(Name_Product);
        var Comment_Product = document.createElement("p");
        Comment_Product.classList.add("card-text");
        Comment_Product.textContent = "Cấu hình: " + cart_search[i].cmt;
        Body_Product.appendChild(Comment_Product);
        var Price_Product = document.createElement("h4");
        Price_Product.style.textAlign = "center"
        Price_Product.classList.add("card-text");
        Price_Product.textContent = "Giá bán: " + cart_search[i].price;
        Body_Product.appendChild(Price_Product);
        var Add_Product = document.createElement("button");
        var Buy_Product = document.createElement("button");
        Add_Product.classList.add("btn");
        Add_Product.classList.add("btn-outline-success");
        Add_Product.id = i;
        Add_Product.textContent = "Thêm vào giỏ hàng";
        Buy_Product.style.marginBottom = "15px";
        Buy_Product.classList.add("btn");
        Buy_Product.classList.add("btn-outline-dark");
        Buy_Product.textContent = "Đặt mua";
        Add_Product.style.marginBottom = "15px";
        Add_Product.style.marginRight = "15px";
        Body_Product.appendChild(Add_Product);
        Body_Product.appendChild(Buy_Product);
        Add_Product.onclick = function () {
            var Add = { id: cart_search[i].id, src: cart_search[i].src, name: cart_search[i].name, cmt: cart_search[i].cmt, price: cart_search[i].price, Qty: cart_search[i].Qty };
            updateCart(Add, 'add');
            console.log(cart_search[i].id + "Đã Được thêm");
        }
        dem++;
    }
}
Show_search();

function updateCart(product, action) {
    // Kiểm tra xem localStorage có tồn tại không
    if (typeof localStorage !== 'undefined' && localStorage !== null) {
        // Kiểm tra xem có giỏ hàng nào đã được lưu trữ trong Local Storage chưa (Lưu trữ cục bộ)
        var cart_search = localStorage.getItem('cart_search');
        if (!cart_search) {
            // Nếu chưa có giỏ hàng, tạo một giỏ hàng mới
            cart_search = [];
        } else {
            // Nếu đã có giỏ hàng, chuyển đổi từ chuỗi JSON sang mảng JavaScript
            cart_search = JSON.parse(cart_search);
        }
        // Thực hiện thêm hoặc xóa sản phẩm tùy thuộc vào hành động
        if (action === 'remove') {
            // Xóa sản phẩm khỏi giỏ hàng (ví dụ: dựa vào id sản phẩm)
            cart_search = cart_search.filter(item => item.id !== product.id);
        }
        else if (action === 'search') {
            cart_search.push(product);
        }
        // Lưu lại giỏ hàng vào Local Storage
        localStorage.setItem('cart_search', JSON.stringify(cart_search));

    } else {
        // Xử lý trường hợp localStorage không tồn tại hoặc không hoạt động
        console.error("Local storage is not available.");
    }
}
// var bool = true;
// // Lọc sản phẩm theo nhãn hàng
// function FilterForBrand() {
    var brand = ['msi', 'asus', 'acer', 'lenovo', 'hp', 'dell', 'mac'];
    var father1 = document.getElementById('List_Brand');
    for (let i in brand) {
        // if (cartData !== null) {
        //     clearCart();
        // }
        let child = document.createElement('a');
        child.textContent = brand[i];
        child.href = "TimKiem.html";
        child.style.textDecoration = "none";
        child.style.color = "black";
        child.classList.add('list-group-item');
        child.id = brand[i];
        child.addEventListener('click', function () {
            Input(brand[i]);
            session = brand[i];
            bool = false;
        });
        father1.appendChild(child);
    }
// }

var element = document.getElementById('List_Brand_content');

element.addEventListener('mouseover', function() {
    // Đoạn mã bạn muốn thực hiện khi chuột vào phần tử hoặc các phần tử con
    clearCart();
});

// FilterForBrand();
// dùng import để lấy dữ liệu từ file index.js (lười copy qua
export function getData() {
    // Lấy phần tử input từ DOM
    const inputField = document.getElementById("search");

    // Lấy giá trị của phần tử input
    const inputValue = inputField.value;

    // Hiển thị giá trị lấy được
    console.log("Your name is: " + inputValue);
    Input(inputValue);

}

// Nhập hàm getData vào từ một nút button
const getDataButton = document.getElementById("tim");
getDataButton.addEventListener("click", getData);

const inputField = document.getElementById("search");
inputField.addEventListener("click", clearCart);