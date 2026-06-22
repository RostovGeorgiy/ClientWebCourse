(() => {
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

    const getMaxCitiesAmountCountries = array => {
        const maxCitiesAmount = array.reduce((citiesAccumulator, country) => {
            return country.cities.length > citiesAccumulator ? country.cities.length : citiesAccumulator;
        }, 0);

        console.log("Countries with largest amount of cities:");

        return (array.filter(country => country.cities.length === maxCitiesAmount)).map(country => country.name);
    };

    console.log(getMaxCitiesAmountCountries(countries));

    const totalPopulationCountries = array => {
        console.log("List of countries with total populations:");

        const getCountryObject = array.reduce((countryObject, country) => {
            countryObject[country.name] = country.cities.reduce((populationSum, city) => populationSum + city.population, 0);
            return countryObject;
        }, {});

        console.log(getCountryObject);
    };

    totalPopulationCountries(countries);
})();