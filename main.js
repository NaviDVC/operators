// // 1.Дано два різні числа. Визначити, яке з них більше, а яке менше.
let firstNumber = Number(prompt('Enter the first number: '));
let secondNumber = Number(prompt('Enter the second number: '));

if (firstNumber < secondNumber) {
    alert(`The first number ${firstNumber} is less than the second number ${secondNumber}`);
} else if (firstNumber > secondNumber) {
    alert(`The first number ${firstNumber} is greater than the second number ${secondNumber}`);1
}

// // 2. Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

let km = Number(prompt('distance in km: '));
let feet = Number(prompt('distance in feets'));
let kmToMeters = km * 1000;
let feetToMeters = feet * 0.3048;
if(kmToMeters > feetToMeters) {
    alert(` ft value to meters (${feetToMeters}) is smaller than km value to meters (${kmToMeters})`)
} else if(kmToMeters < feetToMeters) {
    alert(`km value to meters (${kmToMeters}) is smaller than feet value to meters (${feetToMeters})`)
}

// 3. Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

let a = Number(prompt('First number: '));
let b = Number(prompt('Second number: '));

if (Math.trunc(b/a)) {
    alert(`First number ${a} is a divider to the second number ${b}`);
} else if (Math.trunc(a/b)) {
    alert(`First number ${a} is not a divider to the second number ${b}`);
}
if (Math.trunc(a/b)) {
        alert(`Second number ${b} is a divider to the first number ${a}`);
    } else {
        alert (`Second number ${b} is not a divider to the first number ${a}`);
    }

// 4. Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

let anyNumber = prompt("Type the two-digital number:");

if(anyNumber % 2 === 0) {
    alert(`Your number ${anyNumber} is even, last digit is ${anyNumber[1]}!`);
} else {
    alert(`Your number ${anyNumber} is odd, last digit is ${anyNumber[1]}!`);
}


// 5. Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

let twoDigNum = prompt("Type the two-digital number:");

if(twoDigNum[0] > twoDigNum[1]) {
    alert (`The first digit is greater than the second!`);
} else if(twoDigNum[0] < twoDigNum[1]) {
    alert (`The first digit is smaller than the second!`);
} else if (twoDigNum[0] === twoDigNum[1]) {
    alert(`The first digit is the same as the second!`);
}

// 6. Дано тризначне число.
// 6.1 Визначити чи є парною сума його цифр.

let threeDigNum = prompt('Type a three-digit number:');

let digArray = (threeDigNum.split(''));

let sumDigArray = Number(digArray[0]) + Number(digArray[1]) + Number(digArray[2]);

if (sumDigArray % 2 === 0) {
    alert(`The sum of the digits, ${sumDigArray}, is even!`);
}   else {
    alert(`The sum of the digits, ${sumDigArray}, is odd!`);
}

// // 6.2 Визначити, чи кратна сума цифр п'яти.

let threeDigitNum = prompt('Type a three-digit number:');

let digitArray = (threeDigitNum.split(''));

let sumDigitArray = Number(digitArray[0]) + Number(digitArray[1]) + Number(digitArray[2]);

if (sumDigitArray % 5 === 0) {
    alert(`The sum of the digits, ${sumDigitArray}, is a multiple of 5!`);
} else {
    alert(`The sum of the digits, ${sumDigitArray}, is not a multiple of 5!`);
}

// // 6.3 Визначити чи є добуток його цифр більше 100.

let multThreeDigNum = prompt('Type a three-digit number:');

let threeDigArray = (multThreeDigNum.split(''));

let multDigArray = Number(threeDigArray[0]) * Number(threeDigArray[1]) * Number(threeDigArray[2]);

if (multDigArray > 100) {
    alert(`Multiplication of numbers, ${multDigArray}, greater than 100!`)
} else {
    alert(`Multiplication of numbers, ${multDigArray},  less than 100!`)
}

// 7. Дано тризначне число.
// 7.1 Чи правда, що всі цифри однакові?

let newThreeDigNum = prompt('Please enter a three-digit number: ');

let isTrue = newThreeDigNum[0] === newThreeDigNum[1] && newThreeDigNum[1] === newThreeDigNum[2];

let isFalse = newThreeDigNum[0] === newThreeDigNum[1] && newThreeDigNum[1] === newThreeDigNum[2];

if (isTrue) {
    alert(`Yeap, digits are the same, ${isTrue}!`);
} else {
    alert(`Nope, digits are not the same, ${isFalse}!`);
}

// 7.2 Чи є серед цифр цифри однакові?

let orThreeDigNum = prompt('Please enter a three-digit number: ');

if(orThreeDigNum[0] === orThreeDigNum[1] || orThreeDigNum[0] === orThreeDigNum[2] || orThreeDigNum[1] === orThreeDigNum[2]) {
    alert('Yes! There is the same digits here!')
} else {
    alert('No! There are no identical digits here!')
}

// 8. Визначити, чи є задане шестизначне число дзеркальним?

let someNumber = '123321';
let someOtherNumber = '147741'
let someArray = someNumber.split('');
let someOtherArray = someOtherNumber.split('');
let revSomeNumber = someArray.reverse();
let revSomeOtherNumber = someOtherArray.reverse();

if (revSomeNumber === someArray) {
    alert(`Number ${someArray.join('')} and reversed number ${revSomeNumber.join('')} are the same!`);
} else {
    alert('It is not the same!');
}

if (revSomeOtherNumber === someOtherArray) {
    alert(`Number ${someOtherArray.join('')} and reversed number ${revSomeOtherNumber.join('')} are the same!`);
} else {
    alert('It is not the same!');
}

