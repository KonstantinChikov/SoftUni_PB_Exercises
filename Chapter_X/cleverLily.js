// Ex. VI --> Лили вече е на N години. За всеки свой рожден ден тя получава подарък.

//· За нечетните рождени дни (1, 3, 5...n) получава играчки.
//· За четните рождени дни (2, 4, 6...n) получава пари.

// За втория рожден ден получава 10.00 лв, като сумата се увеличава с 10.00 лв., 
// за всеки следващ четен рожден ден (2 -> 10, 4 -> 20, 6 -> 30...и т.н.). 
// През годините Лили тайно е спестявала парите. Братът на Лили, в годините, 
// които тя получава пари, взима по 1.00 лев от тях. 
// Лили продала играчките получени през годините, всяка за P лева и добавила сумата към спестените пари. 
// С парите искала да си купи пералня за X лева. 
// Напишете програма, която да пресмята, колко пари е събрала и дали ѝ стигат да си купи пералня.

//Да се отпечата на конзолата един ред:
// · Ако парите на Лили са достатъчни: "Yes! {N}" - където N е остатъка пари след покупката
//· Ако парите не са достатъчни: "No! {М}" - където M е сумата, която не достига
//Числата N и M трябва да за форматирани до вторият знак след десетичната запетая.

function cleverLily(input){
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;

    let money = 10;
    
    for(let currentBday = 1; currentBday <= age; currentBday++){
        if(currentBday % 2 === 0){
            savedMoney += money;
            money += 10;
            stolenMoney++;
        }else{
            toysCounter++;
        }
    }
    let totalMoneyFromToys = toysCounter * toyPrice;
    let totalMoney = (savedMoney + totalMoneyFromToys) - stolenMoney;

    if(totalMoney >= washerPrice){
        console.log(`Yes! ${(totalMoney - washerPrice).toFixed(2)}`);
    }else{
        console.log(`No! ${(washerPrice - totalMoney).toFixed(2)}`)
    }

}

cleverLily(["10", "170.00", "6"])