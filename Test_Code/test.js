function formatCurrency(amount) {
    // Chia số cho 1000 và giữ ba chữ số thập phân
    var formattedAmount = (amount / 1000).toFixed(3);
    // Thay thế dấu chấm phân cách hàng nghìn bằng dấu chấm
    formattedAmount = formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedAmount;
}

var number = 20000000000000;
var formattedNumber = formatCurrency(number);
console.log(formattedNumber); // Kết quả: "9.000