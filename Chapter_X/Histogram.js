// Ex. III --> Дадени са n цели числа в интервала [1…1000]. 
// От тях някакъв процент p1 са под 200, друг процент p2 са от 200 до 399, 
// друг процент p3 са от 400 до 599, друг процент p4 са от 600 до 799 и останалите p5 процента са от 800 нагоре. 
// Да се напише програма, която изчислява и отпечатва процентите p1, p2, p3, p4 и p5.

// Пример: имаме n = 20 числа: 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65. 
// Получаваме следното разпределение и визуализация:

//  .__________._________________________________________________.____________._____________________________.
//  | Диапазон |                    Числа в диапазона            | Брой числа |          Процент            |
//  |----------|-------------------------------------------------|------------|-----------------------------|
//  |  < 200   | 53, 7, 56, 180, 12, 7, 150, 2, 199, 46, 128, 65 |     12     | p1 = 12 / 20 * 100 = 60.00% |
//  |----------|-------------------------------------------------|------------|-----------------------------|
//  | 200 … 399|                    250, 200                     |      2     |  p2 = 2 / 20 * 100 = 10.00% |
//  |----------|-------------------------------------------------|------------|-----------------------------|
//  | 400 … 599|                      450                        |      1     |  p3 = 1 / 20 * 100 = 5.00%  |
//  |----------|-------------------------------------------------|------------|-----------------------------|
//  | 600 … 799|                 680, 600, 799                   |      3     |  p4 = 3 / 20 * 100 = 15.00% |
//  |----------|-------------------------------------------------|------------|-----------------------------|
//  |  ≥ 800   |                     920, 800                    |      2     |  p5 = 2 / 20 * 100 = 10.00% |
//  |__________|_________________________________________________|____________|_____________________________|

// На първия ред от входа стои цялото число n (1 ≤ n ≤ 1000) – брой числа.
// На следващите n реда стои по едно цяло число в интервала [1…1000] – числата върху които да бъде изчислена хистограмата.

// Да се отпечата на конзолата хистограмата – 5 реда, 
// всеки от които съдържа число между 0% и 100%, с точност две цифри след десетичната точка, например 25.00%, 66.67%, 57.14%.

function Histogram(input){
    let amountOfNumbers = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1; i <= amountOfNumbers; i++){
        let currentNumber = Number(input[i]);

        if(currentNumber < 200){
            p1++;
        }else if(currentNumber >= 200 && currentNumber <= 399){
            p2++;
        }else if(currentNumber >= 400 && currentNumber <= 599){
            p3++;
        }else if(currentNumber >= 600 && currentNumber <= 799){
            p4++;
        }else if(currentNumber >= 800){
            p5++;
        }
    }
    
    console.log(`${(p1/amountOfNumbers*100).toFixed(2)}%`);
    console.log(`${(p2/amountOfNumbers*100).toFixed(2)}%`);
    console.log(`${(p3/amountOfNumbers*100).toFixed(2)}%`);
    console.log(`${(p4/amountOfNumbers*100).toFixed(2)}%`);
    console.log(`${(p5/amountOfNumbers*100).toFixed(2)}%`);

}

Histogram(["3", "1", "2", "999"])