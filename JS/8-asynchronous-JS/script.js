// ES6 - try catch
// AJAX - asynchronous javascript and xml
//API - application programming interface
//CORS - cross origin resource sharing
//для правки ошибок с корс - префикс https://crossorigin.me - проксирует запросы


async function getWeatherAW(woeid) {
    try {
        const res = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const today = data.consolidated_weather[0];
        console.log(`Temperature in ${data.title} stay between  ${today.min_temp} and  ${today.max_temp}.`);
        return data;
    } catch(error) {
        alert(error);
    }
}
getWeatherAW(2487956);
//const dataLondon = getWeatherAW(44418);
//console.log(dataLondon);

let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data;
    console.log(dataLondon);
});
