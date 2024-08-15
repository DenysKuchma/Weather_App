export async function getHourlyWeather(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=d4afeb7f2df1e4c2958dda920a7232b6`
  );
  const data = await response.json();
  return data.list.slice(0, 24).map((item) => ({
    hour: item.dt_txt.slice(11, 16),
    temp: item.main.temp,
  }));
}
