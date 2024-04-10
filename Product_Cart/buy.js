function BuyPro() {
    var name = document.getElementById("name").value;
    var local = document.getElementById("local").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if (name === '') {
        document.getElementById("err-name").innerHTML = "Không được để trống số tên";

    }
    if (local === '') {
        document.getElementById("err-local").innerHTML = "Không được để trống địa chỉ";
    }
    if (phone === '') {
        document.getElementById("err-phone").innerHTML = "Không được để trống số điện thoại";
    }
    else 
    {
        if(phone !=='' && (phone.length > 10 || phone < 10)){
            document.getElementById("err-phone").innerHTML = "Số điện thoại chỉ bao gồm 10 số";
        }  
        if(phone !=='' && phone % 1 !== 0){
            document.getElementById("err-phone").innerHTML = "Số điện thoại Phải là số"; 
        }          
    }
    if(email ===''){
        document.getElementById("err-email").innerHTML = "Không được để trống email";
    }
    return false;
}