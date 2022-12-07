import { DateTime } from "luxon";

const baseUrl = "https://api.openweathermap.org/data/2.5/";

const apiKey = import.meta.env.VITE_API_KEY;
export const getWeatherData = async (
  infoData: string,
  searchParams: object
) => {
  let url = new URL(`${baseUrl}/${infoData}`);
  // @ts-ignore
  url.search = new URLSearchParams({ ...searchParams, appid: apiKey });
  const res = await fetch(url);
  const data = res.json();
  return data;
};

const formatCurrentWeather = (data: {
  coord: { lat: string; lon: string };
  main: {
    temp: number;
    humidity: number;
    presure: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
  };
  name: string;
  sys: { country: string; sunrise: string; sunset: string };
  weather: Array<{ main: string; icon: string; description: string }>;
  wind: { speed: string };
  dt: number;
}) => {
  const {
    coord: { lon, lat },
    main: { temp, temp_max, temp_min, humidity, presure, feels_like },
    name,
    sys: { country, sunrise, sunset },
    wind: { speed },
    weather,
    dt,
  } = data;

  const { main, icon, description } = weather[0];

  return {
    lon,
    lat,
    temp,
    temp_max,
    temp_min,
    humidity,
    presure,
    feels_like,
    name,
    country,
    sunrise,
    sunset,
    speed,
    dt,
    main,
    icon,
    description,
  };
};

const formatForcastWeather =(data:any)=>{
  let {timezone, daily, hourly} = data;
  daily = daily.slice(1,6).map((d:any)=>{
    return {
      title:formatTolocalTime(d.dt, timezone, 'ccc'),
      temp:d.temp.day,
      icon:d.weather[0].icon
    }
  })
  hourly = hourly.slice(1,6).map((d:any)=>{
    return {
      title:formatTolocalTime(d.dt, timezone, 'hh:mm a'),
      temp:d.temp.day,
      icon:d.weather[0].icon
    }
  })
  return {timezone, daily, hourly}
}
export const getFormatedWeatherData = async (searchParams:any) => {
  const formatedWeatherData = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lon, lat } = formatedWeatherData;

 const  formattedForcastWeather = await getWeatherData('onecall', {
  lon,lat, exlude:'current,munitely,alarts', units:searchParams.units
 }) 
  
  return {...formatedWeatherData, ...formattedForcastWeather};
};



const formatTolocalTime = (secs:number, zone:string, format:string)=> DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

// @ts-ignore

// async function formatedForcastWeather() {


const iconUrlFromCode = (code:string)=>`http://openweathermap.org/img/wn/${code}@2x.png`;
export default getFormatedWeatherData

export {formatTolocalTime, iconUrlFromCode}