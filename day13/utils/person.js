export const person = {
    name: {
        firstName: "test",
        middleName: "test",
        lastName: "test"
    },
    age: 20,
    isAdult: true,
    city: "Rajkot"
}

person.getFirstName = function () {
    return `${this.name.firstName.toUpperCase()}`
}

person.getMiddleName = function () {
    return `${this.name.middleName.toUpperCase()}`
}

person.getLastName = function () {
    return `${this.name.lastName.toUpperCase()}`
}

person.isElidgibleForDrivingLicense = function () {
    return this.isAdult
}
