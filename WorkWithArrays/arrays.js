"use strict";

(function() {
    const array = [2, 5, 12, 11, 8, 43, 1, 0, -4, 3];
    console.log("Array created:");
    console.log(array);

    function sortArrayDescending(array) {
        return array.sort((e1, e2) => e2 - e1);
    }

    console.log("Array sorted in descending order:");
    console.log(sortArrayDescending(array));

    function sliceArray(array, start, end) {
        return array.slice(start, end);
    }

    console.log("Slices of an array. First 5 elements and last 5 elements:");

    console.log(sliceArray(array, 0, 5));
    console.log(sliceArray(array, -5));

    function getArrayEvenNumbersSum(array) {
        return array.reduce((sum, element) => element % 2 === 0 ? sum + element : sum, 0);
    }

    console.log("Sum of even numbers of an array:");
    console.log(getArrayEvenNumbersSum(array));

    function getArrayEvenNumbersSquares(array) {
        return array.filter(element => element % 2 === 0).map(element => element * element);
    }

    console.log("Squares of even numbers from 1-100 range:");

    const hundredElementsArray = Array.from({ length: 100 }, (_, index) => index + 1);
    console.log(getArrayEvenNumbersSquares(hundredElementsArray));
})();