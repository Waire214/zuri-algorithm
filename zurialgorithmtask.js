function convertFahrToCelsius(fah) {      
    let celsius;
    if(fah === ""){
        console.log(JSON.parse(`{"${fah}":  "is not a valid number but a/an ${typeof fah}"}`));
    }else if(!Number.isNaN(fah) && !Number.isNaN(Number(fah))){
        celsius = (fah - 32) * 5/9;
        console.log(celsius);
     }else{
        console.log(JSON.parse(`{"${fah}":  "is not a valid number but a/an ${typeof fah}"}`));
    }
    return celsius;
}
convertFahrToCelsius()
convertFahrToCelsius("")
convertFahrToCelsius(0)
convertFahrToCelsius('0')
convertFahrToCelsius(10);
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});

function checkYuGiOh(n){
    let arr = [];
    const factors = [];
    if(n === ""){
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
        console.log(arr);
    }else{
        console.log(JSON.parse(`{"invalid parameter": "${n}"}`));
    }
    return arr;
}
checkYuGiOh('');
checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh");
