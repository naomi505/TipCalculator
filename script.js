
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
    let total_bill = document.getElementById('total_bill').value;
    let tip_percentage = document.getElementById('tip_percentage').value;
    let tip_amount = document.getElementById('tip_amount').value = total_bill * (tip_percentage / 100);
    document.getElementById('final_bill').value = parseFloat(total_bill) + parseFloat(tip_amount);