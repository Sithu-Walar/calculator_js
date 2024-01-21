const displaybox = document.querySelector('.display')


const keys =  document.querySelectorAll('.key')
const operatorKeys = ['+','-','*','/','.']
function displayKey(el){
    let current =  displaybox.innerHTML;

    if(current === "0"){
        return displaybox.innerHTML = el;
    }
    else if(operatorKeys.includes(el) && operatorKeys.includes(current[current.length-1]) ){
        return displaybox.innerHTML = current.substring(0,current.length-1)+el;
    }
    return displaybox.innerHTML += el;
}
function calculate(){
    let current = displaybox.innerHTML;
    let number = eval(current)
    displaybox.innerHTML = Number(number.toPrecision(10))
}
function allClear(){
    displaybox.innerHTML = 0
}
function clearLastKey(){
    let current = displaybox.innerHTML;
    if(current.length === 1){
       return displaybox.innerHTML = 0
    }
  return displaybox.innerHTML = current.substring(0,current.length-1)
}
