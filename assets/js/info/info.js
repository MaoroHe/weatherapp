import Clear from '../../img/Clear.png';
import Clouds from '../../img/Clouds.png';
import Drizzle from '../../img/Drizzle.png';
import Humidity from '../../img/Humidity.png';
import Mist from '../../img/Mist.png';
import Rain from '../../img/Rain.png';
import Snow from '../../img/Snow.png';
import Wind from '../../img/Wind.png';

let imgSrc = (name, destination) => {
    if (name == 'Clear') {
        destination.src = Clear;
    } else if (name == 'Clouds') {
        destination.src = Clouds;
    } else if (name == 'Drizzle') {
        destination.src = Drizzle;
    } else if (name == 'Humidity') {
        destination.src = Humidity;
    } else if (name == 'Mist') {
        destination.src = Mist;
    } else if (name == 'Rain') {
        destination.src = Rain;
    } else if (name == 'Snow') {
        destination.src = Snow;
    } else if (name == 'Wind') {
        destination.src = Wind;
    }
}

export let infoWrite = (info, i, images) => {
    const cityName = document.querySelector(`.cityName${i}`);
    const temperature = document.querySelector(`.temperature${i}`)
    const imgSky = document.querySelector(`.imgSky${i}`);
    const descR = document.querySelector(`.descR${i}`);

    const img_mat = document.querySelector(`.img_mat${i}`);
    const img_mid = document.querySelector(`.img_mid${i}`);
    const img_soi = document.querySelector(`.img_soi${i}`);

    const temp_mat = document.querySelector(`.temp_mat${i}`);
    const temp_mid = document.querySelector(`.temp_mid${i}`);
    const temp_soi = document.querySelector(`.temp_soi${i}`);

    const temp_un = document.querySelector(`.temp_un${i}`);
    const temp_deux = document.querySelector(`.temp_deux${i}`);
    const temp_trois = document.querySelector(`.temp_trois${i}`);
    const temp_quatre = document.querySelector(`.temp_quatre${i}`);
    const temp_cinq = document.querySelector(`.temp_cinq${i}`);

    const img_un = document.querySelector(`.img_un${i}`);
    const img_deux = document.querySelector(`.img_deux${i}`);
    const img_trois = document.querySelector(`.img_trois${i}`);
    const img_quatre = document.querySelector(`.img_quatre${i}`);
    const img_cinq = document.querySelector(`.img_cinq${i}`);

    const cityImg = document.querySelector(`.cityImg${i}`);
    const titleCity = document.querySelector(`.titleCity${i}`);

    let temps = info.list[0].main.temp - 273.15;
    let tempss = Math.round(temps);
    let skyState = info.list[0].weather[0].main;
    let descT = info.list[0].weather[0].description;

    let mat_img = info.list[0].weather[0].main;
    let mid_img = info.list[1].weather[0].main;
    let soi_img = info.list[2].weather[0].main;

    let mat_temp = info.list[0].main.temp - 273.15;
    let mid_temp = info.list[1].main.temp - 273.15;
    let soi_temp = info.list[2].main.temp - 273.15;

    cityName.textContent = i;
    temperature.textContent = tempss + '°C';
    descR.textContent = descT;

    imgSrc(skyState, imgSky)

    imgSrc(mat_img, img_mat)
    imgSrc(mid_img, img_mid)
    imgSrc(soi_img, img_soi)

    temp_mat.textContent = Math.round(mat_temp) + "°C";
    temp_mid.textContent = Math.round(mid_temp) + "°C";
    temp_soi.textContent = Math.round(soi_temp) + "°C";

    temp_un.textContent = Math.round(info.list[8].main.temp - 273.15) + "°C";
    temp_deux.textContent = Math.round(info.list[16].main.temp - 273.15) + "°C";
    temp_trois.textContent = Math.round(info.list[24].main.temp - 273.15) + "°C";
    temp_quatre.textContent = Math.round(info.list[32].main.temp - 273.15) + "°C";
    temp_cinq.textContent = Math.round(info.list[39].main.temp - 273.15) + "°C";

    const link_un = info.list[8].weather[0].main;
    const link_deux = info.list[16].weather[0].main;
    const link_trois = info.list[24].weather[0].main;
    const link_quatre = info.list[32].weather[0].main;
    const link_cinq = info.list[39].weather[0].main;

    imgSrc(link_un, img_un)
    imgSrc(link_deux, img_deux)
    imgSrc(link_trois, img_trois)
    imgSrc(link_quatre, img_quatre)
    imgSrc(link_cinq, img_cinq)

    cityImg.src = images.results[0].urls.regular;
    titleCity.textContent = i;
}