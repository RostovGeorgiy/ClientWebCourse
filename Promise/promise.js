"use strict";

(function() {
    function fetchJsonPromise(url) {
        console.log("Download start");
        fetch(url)
        .then(response => {
           if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
           }

           console.log("Download success");
           return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(e => console.log("Error:" + e));

    }

    fetchJsonPromise("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
})();