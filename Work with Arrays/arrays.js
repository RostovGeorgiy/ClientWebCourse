(() => {
    const array = [2, 5, 12, 11, 8, 43, 1, 0, -4, 3];
    console.log("Array created:");
    console.log(array);

    console.log("Array sorted in descending order:");
    ((array) => console.log(array.sort((e1, e2) => e2-e1)))(array);

    console.log("Slices of an array. First 5 elements and last 5 elements:");
    console.log(array.slice(0, 5));
    console.log(array.slice(array.length - 5));

    ((array) => {
        console.log("Sum of even numbers of an array:");
        console.log(array.reduce((sum, element) => element % 2 === 0 ? sum + element : sum, 0));
    })(array);

    (() => {
        const array1 = Array.from({ length: 100 }, (_, index) => index + 1);
        const evenNumbersArray = array1.filter(element => element % 2 === 0);
        console.log("Squares of even numbers from 1-100 range:");
        console.log(evenNumbersArray.map(element => Math.pow(element, 2)));
    })();
})();