(function() {
    "use strict";

    const array = [2, 5, 12, 11, 8, 43, 1, 0, -4, 3];
    console.log("Array created:");
    console.log(array);

    function sortArray() {
        return array.sort((e1, e2) => e2 - e1);
    }

    console.log("Array sorted in descending order:");
    console.log(sortArray());

    function sliceArray(start, end) {
        return array.slice(start, end);
    }

    console.log("Slices of an array. First 5 elements and last 5 elements:");

    console.log(sliceArray(0, 5));
    console.log(sliceArray(-5));

    function getArrayEvenNumbersSum() {
        return array.reduce((sum, element) => element % 2 === 0 ? sum + element : sum, 0);
    }

    console.log("Sum of even numbers of an array:");
    console.log(getArrayEvenNumbersSum());

    function getEvenArrayNumbersSquared() {
        const newArray = Array.from({ length: 100 }, (_, index) => index + 1);
        return newArray.filter(element => element % 2 === 0).map(element => element * element);
    }

    console.log("Squares of even numbers from 1-100 range:");
    console.log(getEvenArrayNumbersSquared());
})();