// fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log("Temperature Data:", data.hourly.temperature_2m);
//     })
//     .catch((error) => {
//         console.error("Error fetching weather data:", error);
//     });

// async function getWeather() {
//     try {
//         let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
//         let data = await response.json();
//         console.log("Async/Await Temperature Data:", data.hourly.temperature_2m);
//     } catch (error) {
//         console.error("Error fetching weather data with async/await:", error);
//     }
// }
// FUNCTION-RUN-GENERATED-CODE-START:greet
(async () => { console.log(await greet(/* OpenAI API key not provided */)); })();
// FUNCTION-RUN-GENERATED-CODE-END:greet

function greet(name , callback) {
    console.log("Hello, " + name + "!");
    callback();

}


function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Alice", sayGoodbye);
