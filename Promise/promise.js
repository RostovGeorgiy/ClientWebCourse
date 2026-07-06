"use strict";

(function() {
    function fetchJsonPromise(url) {
        console.log("Download start");

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })
            .then(json => {
                console.log(json);
            })
            .catch(e => console.log("Error: " + e))
            .finally(() => console.log("Download end"));
    }

    fetchJsonPromise("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
})();