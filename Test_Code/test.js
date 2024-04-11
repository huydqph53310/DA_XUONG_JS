function formatInput() {
    // var amount = parseFloat(input.value.replace(/\D/g, '')); 
    var amount = 9000;
    // Loại bỏ tất cả các ký tự không phải số
    if (!isNaN(amount)) {
        amount = (amount / 1000).toFixed(3); // Chia cho 1000 và giữ ba chữ số thập phâm   
        console.log(amount);
    }
}
formatInput();