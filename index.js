// масив.метод((елеменет масива, індекс, сам масив) => {
//   тіло    
// })

// const arr = [1, 3, 5, 7, 9]

// const result = arr.find(item => item === 3)
// console.log(result);


// let total = 0;
// for (const item of arr) {
//     // total += item;
//     total.push(item * 10);
// }
//  console.log(total);

// const result2 = arr.reduce((total, item, asdasdas, asd) => total + item, 0);
//                                          необов'язкове
// const result2 = arr.reduce((total, item) => total + item, 1000);
// // const result2 = arr.reduce((total, item) => {
// //     total.push(item * 10)
// //     return total
// // }, []);
// console.log(result2);


// // порахувати суму усіх елементів
// const numbers = [2, 5, 6, 8, 80, 40];

// // const result = numbers.reduce((total, item) => total + item, 0);
// const result = numbers.reduce((total, item) => {
//     console.log(`total: ${total}::: item: ${item}`);

// }, 0);
// console.log(result);


// порахувати загальну кількість балів
// const students = [
//   { name: "Anna", age: 20, gender: "female", grade: 85 },
//   { name: "Ivan", age: 22, gender: "male", grade: 90 },
//   { name: "Olena", age: 19, gender: "female", grade: 78 },
//   { name: "Petro", age: 21, gender: "male", grade: 92 },
// ];

// const result = students.reduce((total, item) => total + item.grade, 0)
// console.log(result);


// порахувати загальну зарплату
// const salary = {
//     mango: 30,
//     poly: 40,
//     ajax: 50,
// }

// const res = Object.values(salary).reduce((total, item) => total += item, 0);
// console.log(res);



// рахуємо загальну вартість товарів в корзині

// const cart = [
//     { label: "apple", price: 100, quantity: 2, },
//     { label: "banana", price: 70, quantity: 3, },
//     { label: "lemons", price: 50, quantity: 5, },
// ];

// const result = cart.reduce((total, item) => total + item.price * item.quantity, 0);
// console.log(result);


// отримати масив усіх tags
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const res = tweets.reduce((total, item) => {
    total.push(...item.tags);
    return total;
}, [])
const newRes = res.filter((item, ind, arr) => arr.indexOf(item) === ind);

// const res = tweets.flatMap((item) => item.tags);
console.log(res);
console.log(newRes);
