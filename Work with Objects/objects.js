(() => {
    const countries = [{name: "Russia", cities: [{name: "Moscow", population: 13300000}, {name: "Saint-Petersburg", population: 5600000},
        {name: "Novosibirsk", population: 1630000}, {name: "Ekaterinburg", population: 1500000}]},
                       {name: "USA", cities: [{name: "New York", population: 8400000}, {name: "Los Angeles", population: 3800000},
        {name: "Chicago", population: 2700000}]},
                       {name: "China", cities: [{name: "Shanghai", population: 29500000}, {name: "Beijing", population: 17000000},
        {name: "Chongqing", population: 7000000}]}];

    (array => {
        let maxCitiesAmount = 0;

        array.forEach(country => {
            console.log(country.cities.length);

            if (country.cities.length > maxCitiesAmount) {
                maxCitiesAmount = country.cities.length}
        })

        const maxAmountOfCitiesCountries = array.filter(country => country.cities.length === maxCitiesAmount);

        console.log("Countries with largest amount of cities:");
        console.log(maxAmountOfCitiesCountries.map(country => country.name));

    })(countries);

    (array => {
        console.log("List of countries with total populations:");

        for (const country of array) {
            let countryPopulationSum = 0;

            const countryObject = {name: country.name, populationSum: country.cities.reduce((populationSum, city) => populationSum + city.population, 0)};
            console.log(countryObject);
        }
    })(countries);
})();