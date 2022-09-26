// step-1: add event listener of the deposit button

document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //   step-3: get the current deposit total
    // for non-input(element other than input, textarea ) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add numbers to set the total deposit
    const currentDpositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText =currentDpositTotal;

    //  step-5 : get ballance total

    const ballanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = ballanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 : calculate current tptal blance
    const currentBlanceTotal = previousBlanceTotal + newDepositAmount;
    //  set the balance total
    ballanceTotalElement.innerText = currentBlanceTotal;

    // step-7 : clear the deposit field 
    depositField.value = '';

})