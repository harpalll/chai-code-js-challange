import customErr from "./customErr.js";

// basic error handling try catch
// const throwErr = () => {
//     throw new Error("error occured in throwErr fun!!")
// }

// try {
//     throwErr()
// } catch (error) {
//     console.log("got an error : ", error)
// }

// const divideTwoNums = (numerator, denominator) => {
//     if (denominator === 0) throw new Error("Denominator cannot be zero!")

//     return numerator / denominator;
// }

// try {
//     divideTwoNums(5,0)
// } catch (error) {
//     console.log("error : ", error)
// }

// finally block
// try {
//     console.log(divideTwoNums(10, 0))
// } catch (error) {
//     console.log("error :", error)
// } finally {
//     console.log("process finished!!")
// }

// custom error objects
// const divideTwoNums = (numerator, denominator) => {
//     if (denominator === 0) throw new customErr("numerical error", 202, "Denominator Cannot be zero")

//     return numerator / denominator;
// }

// try {
//     divideTwoNums(5,0)
// } catch (error) {
//     console.log("error : ", error)
// }

// const validateUserInput = (name, password) => {
//     if(name === "" || password === "") throw new customErr("Validation", 404, "both inputs are required")

//     console.log(name,password)
// }

// try {
//     validateUserInput("123", "abc")
// } catch (error) {
//     console.log(error)
// }

// error handling in promises
// setInterval(() => {
//     const prom1 = new Promise((resolve, reject) => {
//         if (Math.floor(Math.random() * 10) > 5) {
//             resolve("promise resolved")
//         }
//         reject("promise rejected")
//     })
//     prom1
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }, 1000);

// setInterval(() => {
//     const prom1 = new Promise((resolve, reject) => {
//         if (Math.floor(Math.random() * 10) > 5) {
//             resolve("promise resolved")
//         }
//         reject("promise rejected")
//     })

//     const promiseHandler = async() => {
//         try {
//             const data = await prom1
//             console.log(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     promiseHandler()    
// }, 1000);

// graceful error handling in fetch
// const URL = "https://www.google.com/"
// fetch(URL)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(`error occured while fetching data from URL : ${URL}`))

// const fetchData = async(URL) => {
//     try {
//         const res = await fetch(URL)
//         const data = await res.json()
//         return data
//     } catch (error) {
//         console.log(`error occured while fetching data from URL : ${URL}`)
//     }
// }

// fetchData('https://www.google.com/')