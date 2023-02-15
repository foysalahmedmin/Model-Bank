document.getElementById('withdrawBtn').addEventListener("click", function(){
    const withdrawElementText = getElementTextById("withdrawValue") ;
    const balanceElementText = getElementTextById("balanceValue") ;
    const withdrawInputValue = getInputValueById("withdrawInput") ;
    

    let newWithdrawValue = withdrawElementText + withdrawInputValue ;
    let newBalanceValue = balanceElementText - withdrawInputValue ;
    if(newBalanceValue < 0){
        alert("Check Your Balance...!!");
        return false ;
    }else{
        setElementTextById( "withdrawValue", newWithdrawValue) ;
        setElementTextById( "balanceValue", newBalanceValue) ;
    }
});