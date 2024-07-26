// class definition
class Person {
    constructor(firstName,lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static greet(){
        return `Hello, ${this.firstName} !!`
    }

    get fullName(){
        return `${this.firstName} - ${this.lastName}`
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ')
        this.firstName = firstName;
        this.lastName = lastName;
    }

    updateAge(newAge) {
        if (!newAge) throw new Error("Please Provide an age to update.")

        this.age = newAge

        console.log(`Age is Successfully Updated to ${this.age}`)
    }

    greet() {
        return `Hello, ${this.firstName} !!`
    }   
}
const person = new Person("john", "doe",20)
// console.log(person.fullName);
// person.fullName = "test demo"
// console.log(person.fullName);

// console.log(person._firstName);
// console.log(person._lastName);

// console.log(person.greet())
// person.updateAge(19)

// class inheritance 
class Student extends Person{
    static students = 0;
    constructor(name, age, studentId){
        super(name,age)
        this.studentId = studentId
        Student.students++;
        console.log(`Total Students: ${Student.students}`);
    }

    greet(){
        return `Hello, ${this.name} - Student Id : ${this.studentId}`
    }

    getId(){
        return this.studentId
    }
}

// const student1 = new Student("john", 19, 21)
// const student2 = new Student("john", 19, 21)
// const student3 = new Student("john", 19, 21)


// console.log(student1.getId())
// console.log(student1.greet())

// static methods and properties
// static greet(){
//     return `Hello, ${this.name} !!`
// }
// console.log(Person.greet());

// Getters and Setters

// get fullName(){
//     return `${this.firstName} - ${this.lastName}`
// }

// set fullName(name) {
//     const [firstName, lastName] = name.split(' ')
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const person = new Person("john", "doe",20)
// console.log(person.fullName);
// person.fullName = "test demo"
// console.log(person.fullName);

// Private Fields (Optional)
class Account {
    #balance;
    constructor(balance){
        this.#balance = balance
    }

    withdraw(amount) {
        if(!amount) throw new Error("Please provide an amount to withdraw")

        if(this.#balance === 0) throw new Error("Your Current Balance is zero, can't withdraw money.")

        this.#balance = this.#balance - amount

        console.log(`Withdrawl Successfull : withdraw money : ${amount} || Current Balance : ${this.#balance}`)
    }

    deposit(amount) {
        if(!amount) throw new Error("Please provide an amount to withdraw")

        this.#balance = this.#balance + amount

        console.log(`Deposit Successfull : deposit money : ${amount} || Current Balance : ${this.#balance}`)
    }
    
}

const acc1 = new Account(10000)
// acc1.deposit(1000)
// acc1.withdraw(500)