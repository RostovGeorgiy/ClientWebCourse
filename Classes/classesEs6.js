"use strict";

(function() {
    console.log("Using ES6 classes:");

    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(`${this.name} is making sound`);
        }
    }

    class Dog extends Animal {
        constructor(name) {
            super(name);
        }

        speak() {
            console.log(`${this.name} barks`);
        }
    }

    const rex = new Dog("Rex");

    console.log("Dog speak() method:");
    rex.speak();

    class Cat extends Animal {
            constructor(name) {
                super(name);
            }

            speak() {
                console.log(`${this.name} meows`);
            }
        }

        const tom = new Cat("Tom");

        console.log("Cat speak() method:");
        tom.speak();
})();