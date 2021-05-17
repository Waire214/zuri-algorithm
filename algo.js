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
        celsiusValue.innerHTML = `<b>CELSIUS VALUE</b>: is empty.`;
        celsiusValue.style.backgroundColor = "#eb5c3891";
        console.log(JSON.parse(`{"${fah}":  "is not a valid number but a/an ${typeof fah}"}`));
    }else if(!Number.isNaN(fah) && !Number.isNaN(Number(fah))){
        celsius = (fah - 32) * 5/9;
        celsiusValue.innerHTML = `<b>CELSIUS VALUE</b>: ${celsius.toFixed(4)}`;
        celsiusValue.style.backgroundColor = "inherit";
        console.log(celsius);
     }else{
        celsiusValue.innerHTML = `<b>CELSIUS VALUE</b>: "${fah}" is not a valid number but a/an "${typeof fah}".`;
        console.log(JSON.parse(`{"${fah}":  "is not a valid number but a/an ${typeof fah}"}`));
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
    let messages;
    let errormessage = document.getElementById("factors-error");   
        if(n===0 || n==="0" || Math.sign(n) === -1){
            messages = `<b>INPUT VALUE</b>: should not be 0 and must be positive`;
            errormessage.innerHTML= messages
            errormessage.style.backgroundColor= "#e5383b"
            errormessage.style.marginTop = "20px"
            errormessage.style.padding = "10px"
        }
        else{
            document.getElementById("factors-error").innerHTML= ""
            errormessage.style.marginTop = "0px"
            errormessage.style.padding = "0px"
        }    
    event.preventDefault();
    checkYuGiOh(n)
  });

function checkYuGiOh(n){
    let arr = [];
    const factors = [];
    if(n === ""){
        factorsValue.innerHTML = `<b>FACTORIZED OUTPUT</b>: is empty`;
        factorsValue.style.backgroundColor = "#eb5c3891";
        console.log(JSON.parse(`{"invalid parameter": "${n}"}`));
    }
    else if (!n===0 || !Number.isNaN(n) && !Number.isNaN(Number(n))){
        for (let i = 1; i <= n; i++){
            if((i % 5) === 0 && (i%3) === 0 && (i%2)=== 0){
                factors[i] = "yu-gi-oh"
            }else if((i%5) === 0 && (i%3) === 0 && (i%2) !== 0 ){
                factors[i] = "gi-oh"
            }else if((i%5) === 0 && (i%2) === 0 && (i%3) !== 0 ){
                factors[i] = "yu-oh"
            }else if((i%3) === 0 && (i%2) === 0 && (i%5) !== 0 ){
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
        arr = factors.filter(factor => factor);
        factorsValue.innerHTML = `<b>FACTORIZED OUTPUT</b>: "${arr}"`;
        factorsValue.style.backgroundColor = "inherit";
        console.log(arr);
    }else{
        factorsValue.innerHTML = `<b>FACTORIZED OUTPUT</b>: invalid parameter: "${n}"`
        console.log(JSON.parse(`{"invalid parameter": "${n}"}`));
        factorsValue.style.backgroundColor = "#e5383b";
        factorsValue.style.fontWeight = "600"
        factorsValue.style.fontSize = "1.1rem"
    }
    return arr;
}
// let z = Math.sign("20");
// console.log(z);
