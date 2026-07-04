"use strict";

(function() {
    async function fetchJsonAsync(url) {
        try {
            console.log("Download start");
            let response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log("Download success");

            let responseJson = await response.json();
            console.log(responseJson);
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    fetchJsonAsync("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
})();