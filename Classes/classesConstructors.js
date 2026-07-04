"use strict";

(function() {
    console.log("Using constructor functions and prototypes:");

    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.speak = function() {
        console.log(`${this.name} makes sound.`);
    };

    function Dog(name) {
        this.name = name;
    }

    Dog.prototype.speak = function() {
        console.log(`${this.name} barks.`);
    };

    Object.setPrototypeOf(Dog.prototype, Animal.prototype);

    const rover = new Dog("Rover");

    console.log("Dog speak() method:");
    rover.speak();

    function Cat(name) {
        this.name = name;
    }

    Cat.prototype.speak = function() {
        console.log(`${this.name} meows.`);
    };

    Object.setPrototypeOf(Cat.prototype, Animal.prototype);

    const fluffy = new Cat("Fluffy");

    console.log("Retrieving name field:");
    console.log(fluffy.name);

    console.log("Cat speak() method:");
    fluffy.speak();
})();