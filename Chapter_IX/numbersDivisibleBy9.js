// Ex. VIII --> Напишете функция, която получава две числа и принтира на конзолата, 
// всички числа в диапазона, които се делят на 9 без остатък, както и тяхната сума. 
// На първия ред отпечатайте сумата на числата, а на следващите редове отговарящите на условието числа.

function numbersDivisibleBy9(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;

    for(let i = start; i <= end; i++){
        if(i % 9 === 0){
            sum += i;
        }
    }
    console.log("The sum: " + sum);
    for(let i = start; i <= end; i++){
        if(i % 9 === 0){
            console.log(i);
        }
    }
}

numbersDivisibleBy9(["100", "200"])