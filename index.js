// Урок 1

// const people = [
//     { name: "Олена", age: 25, city: "Київ", email: "olena@example.com", isActive: true, points: 120, friends: ["Іван", "Марія"] },
//     { name: "Іван", age: 32, city: "Львів", email: "ivan@example.com", isActive: false, points: 90, friends: ["Олена", "Петро"] },
//     { name: "Марія", age: 28, city: "Одеса", email: "maria@example.com", isActive: true, points: 135, friends: ["Олена", "Анна"] },
//     { name: "Петро", age: 40, city: "Харків", email: "petro@example.com", isActive: false, points: 75, friends: ["Іван", "Дмитро"] },
//     { name: "Анна", age: 22, city: "Дніпро", email: "anna@example.com", isActive: true, points: 140, friends: ["Марія", "Олег"] },
//     { name: "Дмитро", age: 35, city: "Чернівці", email: "dmytro@example.com", isActive: true, points: 110, friends: ["Петро", "Сергій"] },
//     { name: "Наталя", age: 30, city: "Полтава", email: "natalia@example.com", isActive: false, points: 95, friends: ["Катерина", "Іван"] },
//     { name: "Олег", age: 27, city: "Вінниця", email: "oleh@example.com", isActive: true, points: 130, friends: ["Анна", "Сергій"] },
//     { name: "Катерина", age: 29, city: "Запоріжжя", email: "kateryna@example.com", isActive: false, points: 85, friends: ["Наталя", "Дмитро"] },
//     { name: "Сергій", age: 31, city: "Тернопіль", email: "serhiy@example.com", isActive: true, points: 100, friends: ["Олег", "Дмитро", ["Сергій", "Петро", ["Сергій", "Петро"]]] }
// ];

// // Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)

// const result = people.map((item) => ({
//     ...item,
//     points: item.points * 1.1,
// }));
// console.log(people);
// console.log(result);



// Отримати масив всіх хардкорних гравців з поінтами більше 100

// const people = [
//     { name: "Олена", age: 25, city: "Київ", email: "olena@example.com", isActive: true, points: 120, friends: ["Іван", "Марія"] },
//     { name: "Іван", age: 32, city: "Львів", email: "ivan@example.com", isActive: false, points: 90, friends: ["Олена", "Петро"] },
//     { name: "Марія", age: 28, city: "Одеса", email: "maria@example.com", isActive: true, points: 135, friends: ["Олена", "Анна"] },
//     { name: "Петро", age: 40, city: "Харків", email: "petro@example.com", isActive: false, points: 75, friends: ["Іван", "Дмитро"] },
//     { name: "Анна", age: 22, city: "Дніпро", email: "anna@example.com", isActive: true, points: 140, friends: ["Марія", "Олег"] },
//     { name: "Дмитро", age: 35, city: "Чернівці", email: "dmytro@example.com", isActive: true, points: 110, friends: ["Петро", "Сергій"] },
//     { name: "Наталя", age: 30, city: "Полтава", email: "natalia@example.com", isActive: false, points: 95, friends: ["Катерина", "Іван"] },
//     { name: "Олег", age: 27, city: "Вінниця", email: "oleh@example.com", isActive: true, points: 130, friends: ["Анна", "Сергій"] },
//     { name: "Катерина", age: 29, city: "Запоріжжя", email: "kateryna@example.com", isActive: false, points: 85, friends: ["Наталя", "Дмитро"] },
//     { name: "Сергій", age: 31, city: "Тернопіль", email: "serhiy@example.com", isActive: true, points: 100, friends: ["Олег", "Дмитро"]}
// ];

// // const result = people.map((item) => {
// //     if (item.points > 100) {
// //         console.log(`У ${item.name} менше чим 100 поінтів`);
// //     } else {
// //         console.log(`У ${item.name} менше ніж 100 поінтів`);
// //     }
// // })

// // Отримати масив імен у яких у друзях є марія


// const result = people.filter((item) => item.friends.includes("Марія")).map((item) => item.name);
// console.log(result);



// Урок 2

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
// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const res = tweets.reduce((total, item) => {
//     total.push(...item.tags);
//     return total;
// }, [])
// const newRes = res.filter((item, ind, arr) => arr.indexOf(item) === ind);

// // const res = tweets.flatMap((item) => item.tags);
// console.log(res);
// console.log(newRes);




// Урок 3

// отримати масив усіх tags
// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const result = tweets.flatMap(item => item.tags);
// console.log(result);

// const result2 = result.reduce((acc, item) => {
//     if (acc[item]) {
//         acc[item] += 1;
//         // console.log(acc[item]);
//     } else {
//         acc[item] = 1;
//     };
//     return acc;
// }, [])

// console.log(result2);

// const result = tweets.reduce((total, item) => {
//     total.push(...item.tags);
//     return total;
// }, [])
// const newRes = result.filter((item, ind, arr) => arr.indexOf(item) === ind);
// console.log(newRes);



// sort - мутує оригінальний масив. Працює по юнікоду. Посилання на всі символи з юнікодом - https://symbl.cc/ru/unicode-table/

// const numbers = [1, 3, 5 ,6, 7, 2];
// console.log(numbers);


// Як відсортувати масив без мутації основного

// Спосіб 1

// const copyNumbers = numbers.slice()
// const sort = copyNumbers.sort()
// console.log(sort);


// Спосіб 2

// const copy = [...numbers].sort();
// console.log(copy);



// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // const result = [...tweets].sort((a, b) => b.likes - a.likes);  // a.likes - b.likes -- перерахувати з найменшого до найбільшого. b.likes - a.likes -- перерахувати з найменшого до найбільшого

// console.log(result);


// const students = [
//   { name: "Anna", age: 20, gender: "female", grade: 85 },
//   { name: "Ivan", age: 22, gender: "male", grade: 90 },
//   { name: "Petro", age: 21, gender: "male", grade: 92 },
//   { name: "Olena", age: 19, gender: "female", grade: 78 },
// ];


// // .localeCompare - метод, який сортує рядки
// const result = [...students].sort((a, b) => a.name.localeCompare(b.name));  // a.likes - b.likes -- перерахувати з найменшого до найбільшого. b.likes - a.likes -- перерахувати з найменшого до найбільшого

// console.log(result);


// Відсортувати по кількості проведенного часу в грі

// const players = [
//   { id: "player-2", name: "Poly", timePlayed: 310, points: 92, online: true },
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const result = [...players].sort((a, b) => a.timePlayed - b.timePlayed)
// console.log(result);


// Умова: відсортувати по timePlayed, якщо timePlayed однакові тоді відсортувати по points

// const result = [...players].sort((a, b) => {
//     if (a.timePlayed === b.timePlayed) {
//         return a.points - b.points
//     } else {
//         return a.timePlayed - b.timePlayed
//     }
// })
// console.log(result);



const tweets = [
    { id: "000", likes: 5, tags: ["js"], name: "Anna" },
    { id: "001", likes: 2, tags: ["html", "css"], name: "Illya" },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"], name: "Inna" },
    { id: "003", likes: 8, tags: ["react"], name: "Viktor" },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react", "css"], name: "Igor" },
];

// Anna, Viktor, Illya, Inna, Igor

const res = [...tweets].sort((a, b) => a.tags.length - b.tags.length).map(item => item.name);
console.log(res);
