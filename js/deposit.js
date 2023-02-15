document.getElementById('depositBtn').addEventListener("click", function(){
    const depositElementText = getElementTextById("depositValue") ;
    const balanceElementText = getElementTextById("balanceValue") ;
    const depositInputValue = getInputValueById("depositInput") ;

    let newDepositValue = depositElementText + depositInputValue ;
    setElementTextById( "depositValue", newDepositValue) ;

    let newBalanceValue = balanceElementText + depositInputValue ;
    setElementTextById( "balanceValue", newBalanceValue) ;
});