"use strict";

(function() {
    const countries = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Moscow",
                    population: 13300000
                },
                {
                    name: "Saint-Petersburg",
                    population: 5600000
                },
                {
                    name: "Novosibirsk",
                    population: 1630000
                },
                {
                    name: "Ekaterinburg",
                    population: 1500000
                }
            ]
        },
        {
            name: "USA",
            cities: [
                {
                    name: "New York",
                    population: 8400000
                },
                {
                    name: "Los Angeles",
                    population: 3800000
                },
                {
                    name: "Chicago",
                    population: 2700000

                },
                {
                    name: "Houston",
                    population: 2300000
                }
            ]
        },
        {
            name: "China",
            cities: [
                {
                    name: "Shanghai",
                    population: 29500000
                },
                {
                    name: "Beijing",
                    population: 17000000
                },
                {
                    name: "Chongqing",
                    population: 7000000
                }
            ]
        }
    ];

    console.log(countries);

    function getMaxCitiesAmountCountries(countriesArray) {
        const maxCitiesAmount = countriesArray.reduce((citiesAmount, country) => Math.max(country.cities.length, citiesAmount), 0);

        return countriesArray.filter(country => country.cities.length === maxCitiesAmount);
    }

    console.log("Countries with largest amount of cities:");
    console.log(getMaxCitiesAmountCountries(countries));

    function getCountriesPopulations(countriesArray) {
        const countriesPopulationsObject = {};

        countriesArray.forEach(country => {
            countriesPopulationsObject[country.name] = country.cities.reduce((populationSum, city) =>
                populationSum + city.population, 0);
        });

        return countriesPopulationsObject;
    }

    console.log("Countries with total populations:");
    console.log(getCountriesPopulations(countries));
})();