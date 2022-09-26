//  add event handle with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // setp-2
    const withdrawField = document.getElementById('Withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    // step-3
    const withdrawtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalSting = withdrawtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalSting);

    // step-4 
    const currentWithdrawTotal = previousWithdrawTotal +newWithDrawAmount;
    withdrawtotalElement.innerText = currentWithdrawTotal;
    // step-5

    const ballanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = ballanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 : calculate current tptal blance
    const currentBlanceTotal = previousBlanceTotal - newWithDrawAmount;
    //  set the balance total
    ballanceTotalElement.innerText = currentBlanceTotal;



    
    // step-7 : clear the with draw field 
    withdrawField.value = '';
})