
//խնդիր1
class Rectangle {
    constructor(length, width) {
        this._length = length;
        this._width = width;
    }
    get length() {
        return this._length;
    }
    set length(lengthValue) {
        if ((lengthValue > 0) && (typeof lengthValue === "number")) this._length = lengthValue;
    }
    get width() {
        return this.width;
    }
    set width(widthValue) {
        if ((widthValue > 0) && (typeof widthValue === "number")) this._width = widthValue;
    }
    getArea() {
        return this._length * this._width;
    }
    getPerimeter() {
        return ( 2 * (this._length + this._width));
    } 
    toString() {
        return `${this._length} ${this._width}`
    }
}


//խնդիր2
class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._position = position;
        this._salary = salary;
        this._workingHours = workingHours;
    }
    get id() {
        return this._id;
    }
    set id(idValue) {
        if (/[a-zA-Z_]/.test(idValue[0])) this._id = idValue;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstNameValue) {
        if ((!/[^a-zA-Z]/g.test(firstNameValue)) && (firstNameValue.length > 2) && (firstNameValue.length < 20)) this._firstName = firstNameValue;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastNameValue) {
        if (!/[^a-zA-Z]/g.test(lastNameValue) && (lastNameValue.length > 2) && (lastNameValue.length < 20)) this._lastName = lastNameValue;
    }
    get position() {
        return this._position;
    }
    set position(positionValue) {
        if (!/[^a-zA-Z]/g.test(positionValue) && (positionValue.length > 2) && (positionValue.length < 40)) this._position = positionValue;
    }
    get salary() {
        return this._salary;
    }
    set salary(salaryValue) {
        if ((typeof salaryValue === "number") && (salaryValue > 0)) this._salary = salaryValue;
    }
    get workingHours() {
        return this._workingHours;
    }
    set workingHours(workingHoursValue) {
        if ((typeof workingHoursValue === "number") && (workingHoursValue > -1) && (workingHoursValue < 24)) this._workingHours = workingHoursValue;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    getAnnularSalary() {
        return (12 * this._salary);
    }
    raiseSalary(percent) {
        return (this._salary + ((this._salary * percent) / 100));
    }
}


//խնդիր3
class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }
    get name() {
        return this._name;
    }
    set name(nameValue) {
        if ((!/[^a-zA-Z]/g.test(nameValue)) && (nameValue.length > 2) && (nameValue.length < 20)) this._name = nameValue;
    }
    get email() {
        return this._email;
    }
    set email(emailValue) {
        if ("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$".test(emailValue)) this._email = emailValue;
    }
    get gender() {
        return this._gender;
    }
    set gender(genderValue) {
        if ((genderValue.toLocaleLowerCase() === "male") || (genderValue.toLocaleLowerCase() === "female") || (genderValue.toLocaleLowerCase() === "other")) this._gender = genderValue;
    }
    toString () {
        return `${this._name} ${this._email} ${this._gender}`;
    }
}

class Book extends Author{
    constructor(title, name, email, gender, price, quantity) {
        super (name, email, gender);
        this._title = title;
        this.price = price;
        this._quantity =  quantity;
    }
    get title() {
        return this._title;
    }
    set title(titleValue) {
        if ((!/[^a-zA-Z]/g.test(titleValue)) && (titleValue.length > 2) && (titleValue.length < 40)) this._title = titlenameValue;
    }
    get price() {
        return this._price;
    }
    set price(priceValue) {
        if ((typeof priceValue === "number") && (priceValue > 0)) this._price = priceValue;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(quantityValue) {
        if ((typeof quantityValue === "number") && (quantityValue > -1)) this._quantity = quantityValue;
    }
    getProfit() {
        return (this._price * this._quantity);
    }
    toString () {
        return `${this._title} ${this._name} ${this._email} ${this._gender} ${this._price} ${this._quantity}`;
    }
}


//խնդիր4
class Account {
    constructor(id, name, balance) {
        this._id  =id;
        this._name = name;
        this._balance = balance;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(nameValue) {
        if ((!/[^a-zA-Z]/g.test(nameValue)) && (nameValue.length > 2) && (nameValue.length < 20)) this._name = nameValue;
    }
    get balance() {
        return this._balance;
    }
    set balance(balanceValue) {
        if ((typeof balanceValue === "number") && (balanceValue > -1)) this._balance = balanceValue;
    }
    credit(amount) {
        this._balance += amount;
        return this._balance;
    }
    debit(amount) {
        if (amount < this._balance) this._balance -= amount;
        else console.log("Amount exceeded balance.");
    }
    transferTo(anotherAccount, amount) {
        if (amount < this._balance) {
            this._balance -= amount;
            anotherAccount.credit(amount);
            return this.balance;
        }
        else console.log("Amount exceeded balance.");
    }
    toString() {
        return `${this._id} ${this._name} ${this._balance}`;
    }
    static identAccounts(accountFirst, accountSecond) {
        return accountFirst.toString() === accountSecond.toString();
    }
}


//խնդիր5
class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstNameValue) {
        if ((!/[^a-zA-Z]/g.test(firstNameValue)) && (firstNameValue.length > 2) && (firstNameValue.length < 20)) this._firstName = firstNameValue;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastNameValue) {
        if (!/[^a-zA-Z]/g.test(lastNameValue) && (lastNameValue.length > 2) && (lastNameValue.length < 20)) this._lastName = lastNameValue;
    }
    get gender() {
        return this._gender;
    }
    set gender(genderValue) {
        if ((genderValue.toLocaleLowerCase() === "male") || (genderValue.toLocaleLowerCase() === "female") || (genderValue.toLocaleLowerCase() === "other")) this._gender = genderValue;
    }
    get age() {
        return this._age;
    }
    set age(ageValue) {
        if ((typeof ageValue === "number") && (ageValue > 0)) this._age = ageValue;
    }
    toString () {
        return `${this._firstName} ${this._lastName} ${this._gender} ${this._age}`;
    }
}

class Student extends Person {
    constructor(program, year, fee, firstName, lastName, gender, age) {
        super (firstName, lastName, gender, age);
        this._program = program;
        this._year = year;
        this._fee = fee;
    }
    get program() {
        return this._program;
    }
    set program(programValue) {
        if ((Array.isArray(this.program)) && (programValue.length > 0)) this._program = programValue;
    }
    get year() {
        return this.year;
    }
    set year(yearValue) {
        if ((typeof yearValue === "number") && (yearValue > 0)) this._year = yearValue;
    }
    get fee() {
        return this._fee;
    }
    set fee(feeValue) {
        if ((typeof feeValue === "number") && (feeValue > 0)) this._fee = feeValue;
    }
    passExam (program,grade) {
        this._program.forEach((item,index) => {
            if (item === program) this._program[index] = [item, grade];
        });
       if (this._program.every(item => ((item[1] === "great") || (item[1] === 50)) )) this._year += 1;
    }
    toString() {
        return `${this._program} ${this._year} ${this._fee}  ${this._firstName} ${this._lastName} ${this._gender} ${this._age}`;
    }
}

class Teacher extends Person {
    constructor(program, pay, firstName, lastName, gender, age) {
        super (firstName, lastName, gender, age);
        this._program = program;
        this._pay = pay;
    }
    get program() {
        return this._program;
    }
    set program(programValue) {
        if ((!/[^a-zA-Z]/g.test(programValue)) && (programValue.length > 2) && (programValue.length < 30)) this._program = programValue;
    }
    get pay() {
        return this.pay;
    }
    set pay(payValue) {
        if ((typeof payValue === "number") && (payValue > 0)) this._pay = payValue;
    }
    toString() {
        return `${this._program} ${this._pay} ${this._firstName} ${this._lastName} ${this._gender} ${this._age}`;
    }
}


//խնդիր6
 class Clock {
     constructor({ template }) {
        let timer;
        function render() {
         let date = new Date();
          let hours = date.getHours();
         if (hours < 10) hours = '0' + hours;
          let mins = date.getMinutes();
         if (mins < 10) mins = '0' + mins;
          let secs = date.getSeconds();
         if (secs < 10) secs = '0' + secs;
          let output = template
           .replace('h', hours)
           .replace('m', mins)
           .replace('s', secs);
          console.log(output);
       }
         this.stop = function() {
            clearInterval(timer);
          };
          this.start = function() {
            render();
            timer = setInterval(render, 1000);
          };
     }
     
 }

 //let clock = new Clock({template: 'h:m:s'});
 //clock.start();

