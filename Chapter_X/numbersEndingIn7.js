// Ex. I --> Напишете функция, която отпечатва числата в диапазона от 1 до 1000, които завършват на 7.

function numbersEndingIn7(input){
    for(let i = 7; i <= 997; i++){
        if(i % 10 === 7){
            console.log(i);
        }
    }
}

numbersEndingIn7([])