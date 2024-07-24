// understanding promises
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved after 2 seconds.")
    }, 2000);
})
// prom
//     .then((data) => console.log(data))

// const prom2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("promise rejected after 2 seconds.")
//     }, 2000);
// })
// prom2
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))

// chaining promises
// create a sequence of promises that simulates fetching data from a server.Chain the promises to log messages in a specific order.
// const prom3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Fetched data from server 1");
//         resolve({
//             user: 'test',
//             salary: 60_000
//         })
//     }, 2000);
// })


// const prom4 = () => new Promise((resolve, reject) => {
//     console.log("Fetched data from server 2");
//     resolve({
//         department: 'web-dev',
//     })
// })

// prom3
//     .then((data) => {
//         console.log(data)
//         return prom4()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => console.log(err))

// using async/await
const prom5 = new Promise((resolve,reject) => setTimeout(() => {
    resolve("promise 5 resolved")
}, 2000))

// const fetchData = async() => {
//     const res = await prom5
//     console.log(res)
// }

// fetchData()

// const prom6 = new Promise((resolve, reject) => setTimeout(() => {
//     reject("promise 6 rejected")
// }, 2000))

// const fetchData = async () => {
//     try {
//         const res = await prom6
//         console.log(res)
//     } catch (error) {
//         console.log("error: ", error)
//     }
// }

// fetchData()

// fetching data from an api

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// const fetchData = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log("error: ", error)
//     }
// }

// fetchData()

// concurrent promises
const prom7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("prom7 resolved")
    }, 2000);
})

const prom8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("prom8 resolved")
    }, 1000);
})

// const res = Promise.all([prom7, prom8])
// res.then((data) => console.log(data))


// const res = Promise.race([prom7, prom8])
// res.then((data) => console.log(data))
