class Person {
    fName;
    lName;
    age;
    hobby;
    constructor(fName, lName, age, hobby) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.hobby = hobby;
    }
    fullName() {
        return this.fName + " " + this.lName;
    }
}
// const person1 = new Person("John", "Smith", 25, "swimming");
// const person2 = new Person("Jane", "Williams", 30, "knitting");
// const person3 = new Person("Tom", "Hill", 20, "hiking");
// console.log(`${person1.fullName()} is ${person1.age} years old`);

const persons = [
    new Person("John", "Smith", 25, "swimming"),
    new Person("Jane", "Williams", 30, "knitting"),
    new Person("Tom", "Hill", 20, "hiking")
];
for (let i = 0; i < persons.length; i++) {
    // document.getElementById("box").innerHTML += val.fullName() + "<br>";
    // document.getElementById("box").innerHTML += val.age + "<br>";
    // document.getElementById("box").innerHTML += val.hobby + "<br>";

    document.getElementById("box").innerHTML += `
<div class="card" style="width: 18rem; height: 13rem; background-color: rgb(239, 236, 236)">
  <div class="card-body">
    <h5 class="card-title">${persons[i].fullName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${persons[i].age}</h6>
    <p class="card-text">${persons[i].fullName()} is ${persons[i].age} years old and likes ${persons[i].hobby}.</p>
    <a href="#" class="btn btn-secondary">Print in the console</a>
  </div>
</div>
`;
}
let arr = document.getElementsByClassName("btn");
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function() {
        console.log(persons[i]);
    });
}

class Animal {
    type;
    color;
    size;
    environment;
    activeTime;
    constructor(type, color, size, environment, activeTime) {
        this.type = type;
        this.color = color;
        this.size = size;
        this.environment = environment;
        this.activeTime = activeTime;
    }
    name() {
        return this.color + " " + this.type;
    }
}
// const animal1 = new Animal("cat", "orange", "small", "house", "night");
// const animal2 = new Animal("beaver", "brown", "river", "day");
// const animal3 = new Animal("bear", "black", "big", "woods", "day");
// console.log(animal3.name());
const animals = [
    new Animal("cat", "orange", "small", "house", "night"),
    new Animal("beaver", "brown", "river", "day"),
    new Animal("bear", "black", "big", "woods", "day")
];

for (let val of animals) {
    document.getElementById("box2").innerHTML += `
<div class="card" style="width: 18rem; height: 13rem; background-color: rgb(239, 236, 236)">
  <div class="card-body">
    <h5 class="card-title" style="text-transform: capitalize">${val.name()}</h5>
    <h6 class="card-subtitle mb-2 text-muted" style="text-transform: capitalize">${val.type}</h6>
    <p class="card-text">The ${val.type} is a ${val.size} animal that lives in or near the ${val.environment}, has ${val.color} color and is most active during the ${val.activeTime}.</p>
  </div>
</div>
`;
}

class Car {
    brand;
    model;
    color;
    year;
    constructor(brand, model, color, year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }
    carAge() {
        const date = new Date();
        let currentYear = date.getFullYear()
        let age = currentYear - this.year;
        return age;
    }
}
// const car1 = new Car("Volvo", "740", "red", 2016);
// const car2 = new Car("Fiat", "Punto", "white", 2019);
// const car3 = new Car("Tesla", "Model X", "black", 2022);
// console.log(car1.carAge());

const cars = [
    new Car("Volvo", "740", "red", 2016),
    new Car("Fiat", "Punto", "white", 2019),
    new Car("Tesla", "Model X", "black", 2022)
];

for (let val of cars) {
    document.getElementById("box3").innerHTML += `
<div class="card" style="width: 18rem; height: 13rem; background-color: rgb(239, 236, 236)">
  <div class="card-body">
    <h5 class="card-title">${val.brand} </h5>
    <h6 class="card-subtitle mb-2 text-muted">${val.model}</h6>
    <p class="card-text">${val.brand} ${val.model} is a car. It's has ${val.color} color. It was made in ${val.year} and it's ${val.carAge()} years old.</p>
  </div>
</div>
`;
}