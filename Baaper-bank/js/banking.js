
function getInputValue(inputID){
  const inputField= document.getElementById(inputID);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = '';
  return amountValue;
}

function updateTotalField(totalFieldID, amount){
  // debugger;
const totalElement = document.getElementById(totalFieldID);
const totalText = totalElement.innerText;
const previoustotal = parseFloat(totalText);
totalElement.innerText = previoustotal + amount;
}


function updateBalance(amount, isAdd){
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
if(isAdd === true){
  balanceTotal.innerText = previousBalanceTotal + amount;
}
else{
  balanceTotal.innerText = previousBalanceTotal - amount;
}
}

document.getElementById('deposit-button').addEventListener('click', ()=>{
  const depositAmount = getInputValue('deposit-input'); 
  updateTotalField('deposit-total', depositAmount)
  updateBalance(depositAmount, true);
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',()=>{

  const withdrawAmount = getInputValue('withdraw-input');
  updateTotalField('withdraw-total', withdrawAmount);
  updateBalance(withdrawAmount, false);
})





// first function parametrs comment----------------------------------------------------

  // const depositInput = document.getElementById('deposit-input');
  // const depositAmountText = depositInput.value;
  // const depositAmount = parseFloat(depositAmountText);
  // const depositAmount = getInputValue('deposit-input'); 


// get  and update deposit total
// const depositTotal = document.getElementById('deposit-total')
// const depositTotalText = depositTotal.innerText;
// const previousDepositTotal = parseFloat(depositTotalText);
// depositTotal.innerText = previousDepositTotal + depositAmount;
// updateTotalField('deposit-total', depositAmount)


// update balance
// const balanceTotal = document.getElementById('balance-total');
// const balanceTotalText = balanceTotal.innerText;
// const previousBalanceTotal = parseFloat(balanceTotalText);
// balanceTotal.innerText = previousBalanceTotal + depositAmount;
// updateBalance(depositAmount, true);


// second function parametrs comment----------------------------------------------------

 // const withdrawInput = document.getElementById('withdraw-input');
  // const withdrawAmountText = withdrawInput.value;
  // const withdrawAmount = parseFloat(withdrawAmountText)
  // console.log(withdrawAmountText);
  // const withdrawAmount = getInputValue('withdraw-input');
  

  // get  and update withdraw total
// const withdrawTotal = document.getElementById('withdraw-total');
// const previousWithdrawTotalText = withdrawTotal.innerText;
// const previousWithdrawTotal = parseFloat(previousWithdrawTotalText)
// withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
// updateTotalField('withdraw-total', withdrawAmount);




// update balance total after withdraw
// const balanceTotal = document.getElementById('balance-total');
// const balanceTotalText = balanceTotal.innerText;
// const previousBalanceTotal = parseFloat(balanceTotalText);
// balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
// updateBalance(withdrawAmount, false);
// clear withdraw input field
// withdrawInput.value = '';
