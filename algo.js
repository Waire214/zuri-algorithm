//first input
const celsiusValue = document.getElementById("celsius");
var form1 = document.querySelector("#form1");
  form1.addEventListener("submit", function(event) {
    let fah = form1.elements.inputvalue1.value;
    event.preventDefault();
    convertFahrToCelsius(fah);
  });

function convertFahrToCelsius(fah) {      
    let celsius;
    if(fah === ""){
        fah = "empty"
        celsiusValue.innerHTML = `<b>CELSIUS VALUE</b>: is ${fah}.`;
        celsiusValue.style.backgroundColor = "#eb5c3891";
    }else if(!Number.isNaN(fah) && !Number.isNaN(Number(fah))){
        celsius = (fah - 32) * 5/9;
        celsiusValue.innerHTML = `<b>CELSIUS VALUE</b>: ${celsius.toFixed(4)}`;
        celsiusValue.style.backgroundColor = "inherit";
        console.log(celsius);
     }else{
        celsiusValue.innerHTML = `<b>CELSIUS VALUE</b>: ${fah} is not a valid number but a/an ${typeof fah}.`;
        celsiusValue.style.backgroundColor = "#e5383b";
        celsiusValue.style.fontWeight = "600"
        celsiusValue.style.fontSize = "1.1rem"

    }
    return celsius;
}

//second input
const factorsValue = document.getElementById("factors")
var form2 = document.querySelector("#form2");
  form2.addEventListener("submit", function(event) {
    let n = form2.elements.inputvalue2.value;
    event.preventDefault();
    checkYuGiOh(n)
  });

function checkYuGiOh(n){
    let arr = [];
    const factors = [];
    if(n === ""){
        n = "empty"
        factorsValue.innerHTML = `<b>FACTORIZED OUTPUT</b>: is empty`;
        factorsValue.style.backgroundColor = "#eb5c3891";
    }
    else if (!Number.isNaN(n) && !Number.isNaN(Number(n)) && !n===0){
        for (let i = 1; i <= n; i++){
            if((i % 5) === 0 && (i%3) === 0 && (i%2)){
                factors[i] = "yu-gi-oh"
            }else if((i%5) === 0 && (i%3) === 0 && (i%2) !== 0){
                factors[i] = "gi-oh"
            }else if((i%5) === 0 && (i%2) === 0 && (i%3) !== 0){
                factors[i] = "yu-oh"
            }else if((i%3) === 0 && (i%2) === 0 && (i%5) !== 0){
                factors[i] = "yu-gi"
            }else if ((i%5) === 0 && (i%2) !== 0 && (i%3) !== 0){
                factors[i] = "oh"
            }else if ((i%3) === 0 && (i%2) !== 0 && (i%5) !== 0){
                factors[i] = "gi"
            }else if ((i%2) === 0 && (i%5) !== 0 && (i%3) !== 0){
                factors[i] = "yu"
            }else{
                factors[i] = i
            }
            factors
        }
        arr = factors.filter(factor => factor !== NaN);
        factorsValue.innerHTML = `<b>FACTORIZED OUTPUT</b>: ${arr}`;
        factorsValue.style.backgroundColor = "inherit";
        console.log(arr);
    }else{
        factorsValue.innerHTML = `<b>FACTORIZED OUTPUT</b>: invalid parameter: ${n}`
        factorsValue.style.backgroundColor = "#e5383b";
        factorsValue.style.fontWeight = "600"
        factorsValue.style.fontSize = "1.1rem"
    return arr;
}
}