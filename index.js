// thông tin về hàng hóa sẽ được lưu trong arr
var arr = [
    {
        id: 1,
        Name_Product: "Msi GF63 Thin 11SC",
        Comment_Product: "12VE-454VN i5 12450H/16GB/512GB/15.6  FHD/GeForce RTX 4050 6GB/Win 11",
        src: "./IMG/Product_List/MSi[1].jpg",
        Price_Product: "20.190.200 ₫",
        Qty: 1,
        PK: "msi",
        MSP: "LapTop",
    },
    {
        id: 2,
        Name_Product: "Lenovo Legion 5",
        Comment_Product: "15ARH7H R7 6800H/16GB/512GB/15.6 WQHD/Nvidia RTX 3060 6GB/Win11",
        src: "./IMG/Product_List/lenovo[1].jpg",
        Price_Product: "29.900.000 ₫",
        Qty: 1,
        PK: "lenovo",
        MSP: "LapTop",
    },
    {
        id: 3,
        Name_Product: "Lenovo Gaming LOQ",
        Comment_Product: "15IAX9 i5 12450HX/AI/16GB/512GB/15.6 FHD/Nvidia RTX 2050 4GB/Win11",
        src: "./IMG/Product_List/lenovo[2].jpg",
        Price_Product: "20.100.222₫",
        Qty: 1,
        PK: "lenovo",
        MSP: "LapTop",
    },
    {
        id: 4,
        Name_Product: "Asus TUF Gaming",
        Comment_Product: 'FX507ZC4-HN095W i5 12500H/16GB/512GB/15.6"/Nvidia RTX 3050 4GB/Win11',
        src: "./IMG/Product_List/Asus[1].jpg",
        Price_Product: "19.490.000 ₫",
        Qty: 1,
        PK: "asus",
        MSP: "LapTop",
    },
    {
        id: 5,
        Name_Product: "Acer Aspire 7",
        src: "./IMG/Product_List/acer[1].jpg",
        Comment_Product: "Gaming A715-76-57CY i5 12450H/8GB/512GB/15.6FHD/Win11,15.6 inch, 1920 x 1080 Pixels, IPS, 60 Hz, Acer ComfyView LED-backlit",
        Price_Product: "11.990.000₫",
        Qty: 1,
        PK: "acer",
        MSP: "LapTop",
    },
    {
        id: 6,
        Name_Product: "Acer Nitro 5 Tiger Gaming",
        src: "./IMG/Product_List/Acer[2].jpg",
        Comment_Product: "NVIDIA GeForce RTX 3050 4GB; Intel, Core i5, 12500H, 8 GB, DDR4, 3200 MHz, SSD 512 GB",
        Price_Product: "21.990.000₫",
        Qty: 1,
        PK: "acer",
        MSP: "LapTop",
    },
    {
        id: 7,
        Name_Product: "Acer Aspire 7 Gaming",
        Comment_Product: 'A715-76G-5806 i5 12450H/16GB/512GB/NVIDIA RTX3050 4GB/Win11',
        src: "./IMG/Product_List/acer[1].jpg",
        Price_Product: "19.790.000₫",
        Qty: 1,
        PK: "acer",
        MSP: "LapTop",
    },
    {
        id: 8,
        Name_Product: "Asus Vivobook",
        src: "./IMG/Product_List/asus[2].jpg",
        Comment_Product: "E1404FA-NK186W R5 7520U/16GB/512GB/14  FHD/Win11, 14.0 inch, 1920 x 1080 Pixels, IPS, 60 Hz, 250 nits, LED-backlit ",
        Price_Product: "12.490.000₫",
        Qty: 1,
        PK: "asus",
        MSP: "LapTop",
    },
    {
        id: 9,
        Name_Product: "Asus Vivobook",
        src: "./IMG/Product_List/asus[3].jpg",
        Comment_Product: "X1504VA-NJ526W i5 1335U/16GB/512GB SSD/15.6 FHD/Win11",
        Price_Product: "15.490.000 ₫",
        Qty: 1,
        PK: "asus",
        MSP: "LapTop",
    },
    {
        id: 10,
        Name_Product: "MSI Modern 14 ",
        src: "./IMG/Product_List/msi[2].jpg",
        Comment_Product: 'C7M-220VN R5 7530U/8GB/512GB/14"FHD/Win 11',
        Price_Product: "10.490.000₫",
        Qty: 1,
        PK: "msi",
        MSP: "LapTop",
    },
    {
        id: 11,
        Name_Product: "MSI Gaming GF63",
        src: "./IMG/Product_List/msi[3].jpg",
        Comment_Product: '12UCX-841VN i5 12450H/8GB/512GB/15.6" FHD/RTX2050_4GB/Win11',
        Price_Product: "16.990.000 ₫",
        Qty: 1,
        PK: "msi",
        MSP: "LapTop",
    },
    {
        id: 12,
        Name_Product: "MSI Gaming Alpha 15",
        src: "./IMG/Product_List/msi[4].jpg",
        Comment_Product: 'B5EEK-203VN R5 5600H/8GB/512GB/15.6"FHD/RX6600M 8GB/Win 11_Balo',
        Price_Product: "16.990.000 ₫",
        Qty: 1,
        PK: "msi",
        MSP: "LapTop",
    },
    {
        id: 13,
        Name_Product: "Msi GF63 Thin 11SC",
        Comment_Product: "12VE-454VN i5 12450H/16GB/512GB/15.6  FHD/GeForce RTX 4050 6GB/Win 11",
        src: "./IMG/Product_List/MSi[1].jpg",
        Price_Product: "20.190.200 ₫",
        Qty: 1,
        PK: "msi",
        MSP: "LapTop",
    },
    {
        id: 14,
        Name_Product: "Lenovo Legion 5",
        Comment_Product: "15ARH7H R7 6800H/16GB/512GB/15.6 WQHD/Nvidia RTX 3060 6GB/Win11",
        src: "./IMG/Product_List/lenovo[1].jpg",
        Price_Product: "29.900.000 ₫",
        Qty: 1,
        PK: "lenovo",
        MSP: "LapTop",
    },
    {
        id: 15,
        Name_Product: "Lenovo Gaming LOQ",
        Comment_Product: "15IAX9 i5 12450HX/AI/16GB/512GB/15.6 FHD/Nvidia RTX 2050 4GB/Win11",
        src: "./IMG/Product_List/lenovo[2].jpg",
        Price_Product: "20.100.222₫",
        Qty: 1,
        PK: "lenovo",
        MSP: "LapTop",
    },
    {
        id: 16,
        Name_Product: "Asus TUF Gaming",
        Comment_Product: 'FX507ZC4-HN095W i5 12500H/16GB/512GB/15.6"/Nvidia RTX 3050 4GB/Win11',
        src: "./IMG/Product_List/Asus[1].jpg",
        Price_Product: "19.490.000 ₫",
        Qty: 1,
        PK: "asus",
        MSP: "LapTop",
    },
    {
        id: 19,
        Name_Product: "Acer Aspire 7",
        src: "./IMG/Product_List/acer[1].jpg",
        Comment_Product: "Gaming A715-76-57CY i5 12450H/8GB/512GB/15.6FHD/Win11,15.6 inch, 1920 x 1080 Pixels, IPS, 60 Hz, Acer ComfyView LED-backlit",
        Price_Product: "11.990.000₫",
        Qty: 1,
        PK: "acer",
        MSP: "LapTop",
    },
    {
        id: 18,
        Name_Product: "Acer Nitro 5 Tiger Gaming",
        src: "./IMG/Product_List/Acer[2].jpg",
        Comment_Product: "NVIDIA GeForce RTX 3050 4GB; Intel, Core i5, 12500H, 8 GB, DDR4, 3200 MHz, SSD 512 GB",
        Price_Product: "21.990.000₫",
        Qty: 1,
        PK: "acer",
        MSP: "LapTop",
    },
    {
        id: 19,
        Name_Product: "Acer Aspire 7 Gaming",
        Comment_Product: 'A715-76G-5806 i5 12450H/16GB/512GB/NVIDIA RTX3050 4GB/Win11',
        src: "./IMG/Product_List/acer[1].jpg",
        Price_Product: "19.790.000₫",
        Qty: 1,
        PK: "acer",
        MSP: "LapTop",
    },
    {
        id: 20,
        Name_Product: "Asus Vivobook",
        src: "./IMG/Product_List/asus[2].jpg",
        Comment_Product: "E1404FA-NK186W R5 7520U/16GB/512GB/14  FHD/Win11, 14.0 inch, 1920 x 1080 Pixels, IPS, 60 Hz, 250 nits, LED-backlit ",
        Price_Product: "12.490.000₫",
        Qty: 1,
        PK: "asus",
        MSP: "LapTop",
    },
    {
        id: 21,
        Name_Product: "Asus Vivobook",
        src: "./IMG/Product_List/asus[3].jpg",
        Comment_Product: "X1504VA-NJ526W i5 1335U/16GB/512GB SSD/15.6 FHD/Win11",
        Price_Product: "15.490.000 ₫",
        Qty: 1,
        PK: "asus",
        MSP: "LapTop",
    },
    {
        id: 22,
        Name_Product: "MSI Modern 14 ",
        src: "./IMG/Product_List/msi[2].jpg",
        Comment_Product: 'C7M-220VN R5 7530U/8GB/512GB/14"FHD/Win 11',
        Price_Product: "10.490.000₫",
        Qty: 1,
        PK: "msi",
        MSP: "LapTop",
    },
    {
        id: 23,
        Name_Product: "MSI Gaming GF63",
        src: "./IMG/Product_List/msi[3].jpg",
        Comment_Product: '12UCX-841VN i5 12450H/8GB/512GB/15.6" FHD/RTX2050_4GB/Win11',
        Price_Product: "16.990.000 ₫",
        Qty: 1,
        PK: "msi",
        MSP: "LapTop",
    },
    {
        id: 24,
        Name_Product: "MSI Gaming Alpha 15",
        src: "./IMG/Product_List/msi[4].jpg",
        Comment_Product: 'B5EEK-203VN R5 5600H/8GB/512GB/15.6"FHD/RX6600M 8GB/Win 11_Balo',
        Price_Product: "16.990.000 ₫",
        Qty: 1,
        PK: "msi",
        MSP: "LapTop",
    },
];

    function Tim(PK) {
        clearCart();
        // window.location.href = "./timkiem.html";
        Show(false);
        Add_Show(PK);
        console.log(PK);
    } // hàm phân loại sản phẩm
    function Timkiem() {
        Show(false);
        let Search_PR = document.getElementById("search").value;
        // Add_Show(Search_PR);     
       alert(Search_PR)
    }
    // hàm tìm sản phẩm theo tên
    // lưu thông tin đơn hàng ở bên trên
    function clearCart() {
        // Kiểm tra xem có dữ liệu cart không
        if (localStorage.getItem('cart_search') !== null) {
            // Nếu có, xóa dữ liệu của cart
            localStorage.removeItem('cart_search');
        }
    } // xóa dữ liệu trong local storage
    function Show(bool) {
        if (bool) {
            var dem = 0;
            for (let i in arr) {
                if (dem % 3 == 0) {
                    var row = document.createElement("div");
                    row.classList.add("row");
                    var Mod = document.getElementById("Product_List");
                    if(Mod){
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
                Img_Pr.src = arr[i].src;
                Img_Pr.style.width = "350px";
                Img_Pr.style.height = "300px"
                Img_Pr.style.margin = "auto";
                Img_Pr.style.borderRadius = "5%";
                Img_Pr.style.padding = "15px";
                row.appendChild(col); /// col là con của row
                col.appendChild(Product_cart); // Product_cart là con của col
                Product_cart.appendChild(Img_Pr);
                var Body_Product = document.createElement("div");
                Body_Product.classList.add("cart-body");
                Product_cart.appendChild(Body_Product); //
                var Name_Product = document.createElement("h5");
                Name_Product.classList.add("card-title");
                Name_Product.textContent = arr[i].MSP + ": " + arr[i].Name_Product;
                Body_Product.appendChild(Name_Product);
                var Comment_Product = document.createElement("p");
                Comment_Product.classList.add("card-text");
                Comment_Product.textContent = "Cấu hình: " + arr[i].Comment_Product;
                Body_Product.appendChild(Comment_Product);
                var Price_Product = document.createElement("h4");
                Price_Product.style.textAlign = "center"
                Price_Product.classList.add("card-text");
                Price_Product.textContent = "Giá bán: " + arr[i].Price_Product;
                Body_Product.appendChild(Price_Product);
                var Add_Product = document.createElement("button");
                var Buy_Product = document.createElement("button");
                Add_Product.classList.add("btn");
                Add_Product.classList.add("btn-primary");
                Add_Product.id = i;
                Add_Product.textContent = "Them vao gio hang";
                Buy_Product.style.marginBottom = "15px";
                Buy_Product.classList.add("btn");
                Buy_Product.classList.add("btn-primary");
                Buy_Product.textContent = "Đặt mua";
                Buy_Product.onclick = function () {
                    window.location.href = "Buy_Product.html";
                }
                Add_Product.style.marginBottom = "15px";
                Add_Product.style.marginRight = "15px";
                Body_Product.appendChild(Add_Product);
                Body_Product.appendChild(Buy_Product);
                Add_Product.onclick = function () {
                    var Add = { id: arr[i].id, src: arr[i].src, name: arr[i].Name_Product, cmt: arr[i].Comment_Product, price: arr[i].Price_Product, Qty: arr[i].Qty, msp: arr[i].MSP };
                    updateCart(Add, 'add');
                    console.log(arr[i].id + "Đã Được thêm");
                }
                dem++;
            }
        }
        else if (!bool) {
            clearCart();
        }
    }
    function Add_Show(PK_PRODUCT) {
        // localStorage.clear();
        for (let i in arr) {
            if (arr[i].PK.toLowerCase() === PK_PRODUCT.toLowerCase() || arr[i].barcode == PK_PRODUCT) {
                var Add = { id: arr[i].id, src: arr[i].src, name: arr[i].Name_Product, cmt: arr[i].Comment_Product, price: arr[i].Price_Product, Qty: arr[i].Qty, msp: arr[i].MSP, bc: arr[i].barcode};
                updateCart(Add, 'search');
                console.log(arr[i].id + "Đã Được thêm");
            }
        }
    }
        // // localStorage.clear();
    // // :417 Mở nó ra để xóa toàn bộ giỏ hàng
    var cartData = localStorage.getItem('cart');
    if (cartData !== null) {
        var cart = JSON.parse(cartData);
        Add_Cart();
        if(cart.length <= 0){
            console.log("Không có dữ liệu trong Local Storage.");
            var father2 = document.getElementById("List_Item_null");
            var col3 = document.createElement("div");
            col3.classList.add("col-lg-12");
            col3.classList.add("mod");
           if(father2){
            father2.appendChild(col3);
           }
            var null3 = document.createElement("h1");
            null3.textContent = "Giỏ hàng trống"
            null3.classList.add("mod");
            null3.style = "text-align: center; margin: 20px auto; color: red;";
           if(father2){
            father2.appendChild(null3);
           }
        }
    }
    function Add_Cart() {
        var father = document.getElementById("List_Item");
        for (let i in cart) {
            var List = document.createElement("div");
            List.classList.add("col-lg-12");
            List.classList.add("mod");
            if(father){
                father.appendChild(List);
            }
            List.style.display = "flex";
            var img = document.createElement("img");
            img.src = cart[i].src;
            img.style.borderRadius = "5%";
            List.appendChild(img);
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
                window.location.href = "Buy_Product.html";
            }
            div_mod2.appendChild(button);
            var button2 = document.createElement("button");
            button2.classList.add("btn");
            button2.classList.add("btn-primary");
            button2.style.marginLeft = "25px";
            button2.textContent = "Xóa khỏi giỏ hàng";
            button2.onclick = function () {
                var Remover = {id: cart[i].id};
                updateCart(Remover, 'remove');
                location.reload();
            }
            div_mod2.appendChild(button2);
        }
    }

    Show(true);
    var search = document.getElementById("search");
    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) { // 13 là mã ASCII cho phím Enter
            if(search.value === ""){
                search.focus();
            }
            else if(search != null){
                alter(search.value); 
            }
        }
    });


