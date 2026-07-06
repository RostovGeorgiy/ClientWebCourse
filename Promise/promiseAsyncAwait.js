"use strict";

(async function() {
    async function fetchJsonAsync(url) {
        try {
            console.log("Download start");

            const response = await fetch(url);
            const responseJson = await response.json();

            console.log(responseJson);
        } catch (e) {
            console.log("Error: " + e);
        } finally {
            console.log("Download end");
        }
    }

    await fetchJsonAsync("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
})();