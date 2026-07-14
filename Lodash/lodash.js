"use strict";

(function() {
    const persons = [
        {
            name: "Ivan",
            age: 25
        },
        {
            name: "Ivan",
            age: 30
        },
        {
            name: "Ekaterina",
            age: 22
        },
        {
            name: "Vasiliy",
            age: 44
        },
        {
            name: "Irina",
            age: 51
        },
        {
            name: "Dariya",
            age: 20
        },
        {
            name: "Konstantin",
            age: 37
        },
        {
            name: "Pyotr",
            age: 70
        },
        {
            name: "Irina",
            age: 30
        },
        {
            name: "Ivan",
            age: 25
        }
    ];

    function getAverageAge(persons) {
        return _.meanBy(persons, "age");
    }

    console.log("Average age:");
    console.log(getAverageAge(persons));

    function getPersonsBetween20and30Ascending(persons) {
        return _.chain(persons)
            .filter(p => p.age >= 20 && p.age <= 30)
            .sortBy("age")
            .value();
    }

    console.log("Persons aged between 20 and 30 sorted in ascending order:");
    console.log(getPersonsBetween20and30Ascending(persons));

    function getUniquePersonsNamesBetween20and30Descending(persons) {
        return _.chain(persons)
            .filter(p => p.age >= 20 && p.age <= 30)
            .uniqBy("name")
            .orderBy("age", "desc")
            .map(p => p.name)
            .value();
    }

    console.log("Names of persons aged between 20 and 30 sorted in descending order:");
    console.log(getUniquePersonsNamesBetween20and30Descending(persons));

    function getAmountOfPersonsByName(persons) {
        return _.countBy(persons, "name");
    }

    console.log("Amount of times a name is found in array:");
    console.log(getAmountOfPersonsByName(persons));
})();