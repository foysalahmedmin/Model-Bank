function getElementTextById(elementId){
    const elementInnerText = document.getElementById(elementId).innerText;
    const innerTextNumber = parseFloat(elementInnerText);
    return innerTextNumber ;
}
function getInputValueById(inputId){
    const inputValue = document.getElementById(inputId).value;
    const inputValueNumber = parseFloat(inputValue);
    document.getElementById(inputId).value = "";
    if(isNaN(inputValueNumber)){
        alert("Your Input Have to be Number !!!") ;
        return false ;
    }
    return inputValueNumber ;
}
function setElementTextById(elementId , newValue){
    const getElementId = document.getElementById(elementId);
    const setText = getElementId.innerText = newValue ; 
}