// Ex. II --> Отпечатайте на конзолата таблицата за умножение за числата от 1 до 10 във формат: 
//              "{първи множител} * {втори множител} = {резултат}".

function multiplicationTable(){
    
    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            let total = i * j;
            console.log(`${i} * ${j} = ${total}`);
        }
    }
}

multiplicationTable()