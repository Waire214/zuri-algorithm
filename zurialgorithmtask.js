function convertFahrToCelsius(fah) {      
    let celsius;
    let str;
    if(fah === ""){
        str = JSON.stringify(fah);
        return `${str} is not a valid number but a/an ${typeof fah}`
    }
    if(Number.isNaN(Number(fah))){
        if(Array.isArray(fah)){
            str = JSON.stringify(fah);
            return `${str} is not a valid number but a/an ${typeof fah}`

        }else if(Object.prototype.toString.call(fah) !== '[object Array]'){
            str = JSON.stringify(fah);
            return `${str} is not a valid number but a/an ${typeof fah}`
        }else{
            str = JSON.stringify(fah);
            return `${str} is not a valid number but a/an ${typeof fah}`
        }
    }else(!Number.isNaN(fah) && !Number.isNaN(Number(fah)));{
        celsius = (fah - 32) * 5/9;
        return celsius.toFixed(4)
     }
}
console.log(convertFahrToCelsius());
console.log(convertFahrToCelsius(""));
console.log(convertFahrToCelsius("a"));
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius(10));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));

function checkYuGiOh(n){
    let arr = [];
    const factors = [];
    if(n === ""){
        str = JSON.stringify(n);
        return `invalid parameter: ${str}`
    }
    else if (!Number.isNaN(n) && !Number.isNaN(Number(n))){
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
        return arr;
    }else{
        str = JSON.stringify(n);
        return `invalid parameter: ${n}`
    }
}
console.log(checkYuGiOh(''));
console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));