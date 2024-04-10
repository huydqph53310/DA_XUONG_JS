var arr_footer_Info = [
    [
        {
            Name: "Giới thiệu về công ty",
            Src: "",
        },
        {
            Name: "Chính sách bảo mật",
            Src: "",
        },
        {
            Name: "Quy chế hoạt động",
            Src: "",
        },
        {
            Name: "Kiểm tra hóa đơn điện tử",
            Src: "",
        },
        {
            Name: "Tra cứu thông tin bảo hành",
            Src: "",
        },
        {
            Name: "Câu hỏi thường gặp mua hàng",
            Src: "",
        },
    ],
    [
        {
            Name: "Tin tuyển dụng",
            Src: "",
        },
        {
            Name: "Tin khuyến mãi",
            Src: "",
        },
        {
            Name: "Hướng dẫn mua online",
            Src: "",
        },
        {
            Name: "Hướng dẫn mua trả góp",
            Src: "",
        },
        {
            Name: "Chính sách trả góp",
            Src: "",
        },
        {
            Name: "Chính sách thu thập và xử lý dữ liệu cá nhân",
            Src: "",
        },
    ],
    [
        {
            Name: "Hệ thống cửa hàng",
            Src: "",
        },
        {
            Name: "Chính sách đổi trả",
            Src: "",
        },
        {
            Name: "Hệ thống bảo hành",
            Src: "",
        },
        {
            Name: "Giới thiệu máy đổi trả",
            Src: "",
        },
        {
            Name: "Chính sách mạng di động DEV-CRACK",
            Src: "",
        },

    ],
    [
        {
            Name: "Tư vấn mua hàng (Miễn phí)",
            Hotline: "1800 6601",
            local: "(Nhánh 1)",
        },
        {
            Name: "Hỗ trợ kỹ thuật",
            Hotline: "1800 6601",
            local: "(Nhánh 2)",
        },
        {
            Name: "Góp ý, khiếu nại (8h00 - 22h00)",
            Hotline: "1800 6616",
            local: "",
        },
    ]
];
var info = document.getElementById('info');
var info2 = document.getElementById('info2');
var info3 = document.getElementById('info3');
for (let j = 0; j < arr_footer_Info[0].length; j++) {
    let a_mod = document.createElement("a");
    a_mod.textContent = arr_footer_Info[0][j].Name;
    a_mod.classList.add("info_mod");
    a_mod.style.display = "block";
    a_mod.href = arr_footer_Info[0][j].Src;
    if(info){
        info.appendChild(a_mod);
    }
}
for (let j = 0; j < arr_footer_Info[1].length; j++) {
    let a_text = document.createElement("a");
    a_text.textContent = arr_footer_Info[1][j].Name;
    a_text.classList.add("info_mod1");
    a_text.style.display = "block";
    a_text.href = arr_footer_Info[1][j].Src;
    if(info2){
        info2.appendChild(a_text);
    }
}
for (let j = 0; j < arr_footer_Info[2].length; j++) {
    let a_mod_text = document.createElement("a");
    a_mod_text.textContent = arr_footer_Info[2][j].Name;
    a_mod_text.classList.add("info_mod2");
    a_mod_text.style.display = "block";
    a_mod_text.href = arr_footer_Info[2][j].Src;
    if(info3){
    info3.appendChild(a_mod_text);
    }
}
for (let j = 0; j < arr_footer_Info[3].length; j++) {
    let p_mod = document.createElement("p");
    p_mod.textContent = arr_footer_Info[3][j].Name + " - " + arr_footer_Info[3][j].Hotline + " - " + arr_footer_Info[3][j].local;
    p_mod.classList.add("info_mod2");
    p_mod.style.display = "block";
    if(info3){
    info3.appendChild(p_mod);
    }
}
