(() => {
    const array = [2, 5, 12, 11, 8, 43, 1, 0, -4, 3];
    console.log("Array created:");
    console.log(array);

    const arraySort = () => {
        console.log("Array sorted in descending order:");
        console.log(array.sort((e1, e2) => e2-e1));
    }

    arraySort();

    const arraySlice = () => {
        console.log("Slices of an array. First 5 elements and last 5 elements:");
        console.log(array.slice(0, 5));
        console.log(array.slice(-5));
    }

    arraySlice();

    const arrayEvenNumbersSum = array => {
        console.log("Sum of even numbers of an array:");
        console.log(array.reduce((sum, element) => element % 2 === 0 ? sum + element : sum, 0));
    };

    arrayEvenNumbersSum(array);

    const evenArrayNumbersSquared = () => {
        const newArray = Array.from({length: 100}, (_, index) => index + 1);
        console.log("Squares of even numbers from 1-100 range:");
        console.log((newArray.filter(element => element % 2 === 0)).map(element => element * element));
    };

    evenArrayNumbersSquared();
})();