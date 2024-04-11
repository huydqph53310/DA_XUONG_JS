// Export hàm getData
import { myData } from './Data/data.js';// đọc dữ liệu từ file data
var From = document.getElementById('From');
var To = document.getElementById('To');
var mod = '';// input truyền vào là string nên để nó là string trước khi ép kiểu
// Nhập hàm getData vào từ một nút button
// bắt sự kiện click vào nút search ở trên các tab
const getDataButton = document.getElementById("tim");
getDataButton.addEventListener("click", getData);
// khi bắt đầu nhập sẽ reset dữ liệu
const inputField = document.getElementById("search");
inputField.addEventListener("click", clearCart);
export function getData() {
    // Lấy phần tử input từ DOM
    const inputField = document.getElementById("search");
    // Lấy giá trị của phần tử input
    const inputValue = inputField.value;
    // Hiển thị giá trị lấy được
    console.log("Search Iteam name is: " + inputValue);
    Input(inputValue);
}
function SearchPrice() {
    console.log(From.value + " " + To.value);
    ReadInput_Fil_Price(From.value, To.value)
}
var brand = ['msi', 'asus', 'acer', 'lenovo', 'hp', 'dell', 'mac'];
var father1 = document.getElementById('List_Brand');
for (let i in brand) {
    let child = document.createElement('a');
    child.classList.add("list-group-item-action");
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
export function Input(value) {
    mod = value
    ReadInput(mod);
}
// đọc dữ liệu đưa vào và bắt đầu so sánh
function ReadInput(content) {
    const OBJ = {
        PK: content,
    }
    const Search_For_PK = myData.filter(myData => myData.PK === OBJ.PK);
    console.log(Search_For_PK);
    Output(Search_For_PK);
    // Output(Search_For_PK);
}
/// dữ liệu lọc theo giá được đưa vào và bắt đâu so sánh
function ReadInput_Fil_Price(num1, num2) {
    const OBJ = {
        From: num1,
        To: num2,
    }
    for (let i in myData) {
        if (myData[i].Price_Product >= Number(From) && myData[i].Price_Product <= Number(To)) {
            console.log(myData[i].product);
        }
    }
    const Search_For_Price = myData.filter(myData => myData.Price_Product >= Number(OBJ.From) && myData.Price_Product <= Number(OBJ.To));
    console.log(Search_For_Price);
    Output(Search_For_Price);
    console.log(typeof (num1), typeof (num2));
    // Output(Search_For_Price);
}
// đầu ra gồm các thuộc tính được lấy ở mydata.
// thêm vào hàm Tìm kiếm thuộc localStorage
function Output(Product) {
    for (let i in Product) {
        var Add = { id: Product[i].id, src: Product[i].src, name: Product[i].Name_Product, cmt: Product[i].Comment_Product, price: Product[i].Price_Product, Qty: Product[i].Qty, msp: Product[i].MSP, bc: Product[i].barcode };
        updateCart(Add, 'search');
        console.log(Product[i].Name_Product + "Đã Được thêm");
    }
}
// Xóa toàn bộ trong loalstorage
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
    Show_search();
    if (cart_search.length <= 0) {
        console.log("Không có dữ liệu trong Local Storage.");
    }
}
// tạo giao diện và in ra màn hình thông tin nó tìm được
function Show_search() {
    var dem = 0;
    for (let i in cart_search) {
        if (dem % 3 == 0) {
            var row = document.createElement("div");
            row.classList.add("row");
            var Mod = document.getElementById("Product_List_1");
            if (Mod) { // fix lỗi khi nó tồn tại mới tạo *(lỗi console)
                Mod.appendChild(row);
            }
            console.log(row);
        }
        var col = document.createElement("div");
        col.classList.add("col-lg-4");
        col.classList.add("mod");
        col.style.borderRadius = "5px";
        row.appendChild(col); /// col là con của row
        var Product_cart = document.createElement("div");
        Product_cart.style.margin = "auto";
        Product_cart.classList.add("cart");
        Product_cart.style = "width: 18rem;";
        var Img_Pr = document.createElement("img");
        Img_Pr.src = cart_search[i].src; //
        Img_Pr.style.width = "350px";
        Img_Pr.style.height = "300px"
        Img_Pr.style.margin = "auto";
        Img_Pr.style.borderRadius = "5%";
        Img_Pr.style.padding = "15px"
        col.appendChild(Product_cart); // Product_cart là con của col
        Product_cart.appendChild(Img_Pr);
        var Body_Product = document.createElement("div");
        Body_Product.classList.add("cart-body");
        Product_cart.appendChild(Body_Product); //
        var Name_Product = document.createElement("h5");
        Name_Product.classList.add("card-title");
        Name_Product.textContent = cart_search[i].msp + ": " + cart_search[i].name; // 
        Body_Product.appendChild(Name_Product);
        var Comment_Product = document.createElement("p");
        Comment_Product.classList.add("card-text");
        Comment_Product.textContent = "Cấu hình: " + cart_search[i].cmt; //
        Body_Product.appendChild(Comment_Product);
        var Price_Product = document.createElement("h4");
        Price_Product.style.textAlign = "center"
        Price_Product.classList.add("card-text");
        Price_Product.textContent = "Giá bán: " + formatCurrency(cart_search[i].price) + " ₫"; //
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
            var Add = { id: cart_search[i].id, src: cart_search[i].src, name: cart_search[i].name, cmt: cart_search[i].cmt, price: cart_search[i].price, Qty: cart_search[i].Qty, msp: cart_search[i].msp, bc: cart_search[i].barcode };
            updateCart(Add, 'add');
            console.log(cart_search[i].name + " Đã Được thêm");
            $(document).ready(function () {
                showCartMessage('Sản phẩm đã được thêm vào giỏ hàng.');
            });
        }
        dem++;
    }
}
function showCartMessage(message) {
    $('#cartMessage').text(message);
    $('#cartMessageModal').modal('show');
    // Tự đóng box thông báo sau 3 giây
    setTimeout(function () {
        $('#cartMessageModal').modal('hide');
    }, 1500);
};
var check;
function updateCart(product, action) {
    // Kiểm tra xem localStorage có tồn tại không
    if (typeof localStorage !== 'undefined' && localStorage !== null) {
        // Kiểm tra xem có giỏ hàng nào đã được lưu trữ trong Local Storage chưa (Lưu trữ cục bộ)
        var cart_search = localStorage.getItem('cart_search');
        var cart_add = localStorage.getItem('List_Item_Added');
        if (!cart_search) {
            // Nếu chưa có giỏ hàng, tạo một giỏ hàng mới
            cart_search = [];
        } else {
            // Nếu đã có giỏ hàng, chuyển đổi từ chuỗi JSON sang mảng JavaScript
            cart_search = JSON.parse(cart_search);
        }
        if (!cart_add) {
            cart_add = [];
        }
        else {
            cart_add = JSON.parse(cart_add);
        }
        // Thực hiện thêm hoặc xóa sản phẩm tùy thuộc vào hành động
        if (action === 'add') {
            for (let i in cart_add) {
                if (cart_add[i].id === product.id) {
                    cart_add[i].Qty++;
                    check = true;
                    break;
                }
            }
            if (cart_add == null || cart_add == undefined || cart_add.length == 0 || !check) {
                cart_add.push(product);
            }
        }
        else if (action === 'remove') {
            // Xóa sản phẩm khỏi giỏ hàng (ví dụ: dựa vào id sản phẩm)
            cart_search = cart_search.filter(item => item.id !== product.id);
        }
        else if (action === 'search') {
            cart_search.push(product);
        }
        // Lưu lại giỏ hàng vào Local Storage
        localStorage.setItem('cart_search', JSON.stringify(cart_search));
        localStorage.setItem('List_Item_Added', JSON.stringify(cart_add));

    } else {
        // Xử lý trường hợp localStorage không tồn tại hoặc không hoạt động
        console.error("Local storage is not available.");
    }
    check = false;
}
var element = document.getElementById('List_Brand_content');
var From_mover = document.getElementById('From');
element.addEventListener('mouseover', function () {
    // thực hiện xóa các item tron localstorage
    clearCart();
});
// // Lọc sản phẩm theo nhãn hàng
var Button_S = document.getElementById('Price_S');
Button_S.onclick = function () {
    SearchPrice();
}
From_mover.addEventListener('mouseover', function () {
    // thực hiện xóa các item tron localstorage
    clearCart();
});
// hàm tiền tệ =))
function formatCurrency(amount) {
    // Chia số cho 1000 và giữ ba chữ số thập phân
    var formattedAmount = (amount / 1000).toFixed(3);
    // Thay thế dấu chấm phân cách hàng nghìn bằng dấu chấm
    formattedAmount = formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedAmount;
}