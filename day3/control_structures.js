// Day-3 control_structures

// if-else statements
// let num = 0;
// if (num == 0) console.log('zero');
// if (num > 0) console.log('postive');
// if (num < 0) console.log('negative');

// nested if-else statements
// let num1 = 34;
// let num2 = 50;
// let num3 = 60;

// if (num1 > num2 && num1 > num3) console.log(`Largest is num1: ${num1}`);
// else if (num2 > num1 && num2 > num3) console.log(`Largest is num2: ${num2}`);
// else console.log(`Largest is num3: ${num3}`);

// switch case
// let day = 1;
// let days = [
//   'blank',
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday',
//   'sunday',
// ];
// switch (day) {
//   case 1:
//     console.log(days[day].toUpperCase());
//     break;
//   case 2:
//     console.log(days[day].toUpperCase());
//     break;
//   case 3:
//     console.log(days[day].toUpperCase());
//     break;
//   case 4:
//     console.log(days[day].toUpperCase());
//     break;
//   case 5:
//     console.log(days[day].toUpperCase());
//     break;
//   case 6:
//     console.log(days[day].toUpperCase());
//     break;
//   case 7:
//     console.log(days[day].toUpperCase());
//     break;
//   default:
//     console.log('please enter in rage of (1-7)!'.toUpperCase());
//     break;
// }

// Approach 1
// let score = 100;
// switch (score) {
//   case 100:
//     console.log(`Grade : A Score: ${score}`);
//     break;
//   case 90:
//     console.log(`Grade : B Score: ${score}`);
//     break;
//   case 80:
//     console.log(`Grade : C Score: ${score}`);
//     break;
//   case 70:
//     console.log(`Grade : D Score: ${score}`);
//     break;
//   default:
//     console.log(`Grade : F Score: ${score}`);
//     break;
// }

// Approach 2
// let score = 100;
// let grade;
// switch (score) {
//   case score >= 90:
//     grade = 'A';
//     break;
//   case score >= 80:
//     grade = 'B';
//     break;
//   case score >= 70:
//     grade = 'C';
//     break;
//   case score >= 60:
//     grade = 'D';
//     break;
//   default:
//     grade = 'F';
// }
// console.log(`Grade: ${grade} Score: ${score}`);

// Ternary
// let num = 59;
// let res = num % 2 == 0 ? 'Even' : 'Odd';
// console.log(res);

// combined conditions
// let year = 2024;
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log(`It is a leap year : ${year}`);
// } else {
//   console.log(`It is not a leap year : ${year}`);
// }
