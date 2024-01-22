import { setup } from "../setup/setup.js";
import { chartCreator } from "../chart/chart.js";
import { dayCalc } from "../day/day.js";
import { infoWrite } from "../info/info.js";

export async function weather() {
    const city = document.getElementById('choose');
    const ville = localStorage.getItem("ville");
    const mainss = document.querySelector('main');
    const cityVal = city.value || ville || 'charleroi';
    mainss.innerHTML= '';

    if (cityVal != '') {
    try {
        let response = await fetch("https://us1.locationiq.com/v1/search?key=pk.d12d07f0d36545fc2051ed5f2e34c1cd&q=" + cityVal + "%20&format=json");
        let content = await response.json();

        const lat = content[0].lat;
        const long = content[0].lon;

        let responsed = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=eb9158767d821cfee8d7eca824f38e1f')
        let temp = await responsed.json();

        let searched = await fetch('https://api.unsplash.com/search/photos?client_id=p1qn3My8katmILWqNG9L5_s5a25uQT3IGfJJexTgxfw&query=' + cityVal);
        let contented = await searched.json();

        setup(cityVal)
        infoWrite(temp, cityVal, contented)
        dayCalc(cityVal)
        chartCreator(temp, cityVal)
    } catch (error) {
        console.log(error)
    }
}

    localStorage.setItem("ville", cityVal);
    city.value = '';
}

export async function weatherB() {
    const city = document.getElementById('choose');
    const ville = localStorage.getItem("ville");
    const cityVal = city.value;

    if (cityVal != '') {
    try {
        let response = await fetch('https://api.myptv.com/geocoding/v1/locations/by-text?searchText=' + cityVal + '&apiKey=RVVfNzQ1ZTAyOGRiMDk2NDJhODg3ZWY3NTc1NThiMWIyZTk6MmNiYmEwMzYtNTczYy00Mzc3LThiMmYtMTFjODljNDcxY2Ji');
        let content = await response.json();

        const lat = content.locations[0].referencePosition.latitude;
        const long = content.locations[0].referencePosition.longitude;

        let responsed = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=eb9158767d821cfee8d7eca824f38e1f')
        let temp = await responsed.json();

        let searched = await fetch('https://api.unsplash.com/search/photos?client_id=p1qn3My8katmILWqNG9L5_s5a25uQT3IGfJJexTgxfw&query=' + cityVal);
        let contented = await searched.json();

        setup(cityVal)
        infoWrite(temp, cityVal, contented)
        dayCalc(cityVal)
        chartCreator(temp, cityVal)
    } catch (error) {
        console.log(error)
    }
}

    city.value = '';
}