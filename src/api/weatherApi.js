const apiKey = "d4afeb7f2df1e4c2958dda920a7232b6";
const geoCodingUrl = "https://api.openweathermap.org/geo/1.0/direct";
const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather";

const ipinfoToken = "246183c090dd15";
const ipinfoUrl = `https://ipinfo.io/json?token=${ipinfoToken}`;

async function getLocationByIP() {
  try {
    const response = await fetch(ipinfoUrl);
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      city: data.city,
      lat: data.loc.split(",")[0],
      lon: data.loc.split(",")[1],
    };
  } catch (error) {
    console.error(
      `Ошибка при получении данных о местоположении: ${error.message}`
    );
    throw error;
  }
}

async function getCoordinatesByCity(city) {
  if (!city) {
    throw new Error("Название города не задано.");
  }

  try {
    const response = await fetch(
      `${geoCodingUrl}?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`
    );
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error(`Город "${city}" не найден.`);
    }

    const { lat, lon } = data[0];
    return { lat, lon };
  } catch (error) {
    console.error(`Ошибка при получении координат: ${error.message}`);
    throw error;
  }
}

async function getWeatherByCoordinates(lat, lon) {
  try {
    const url = `${currentWeatherUrl}?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.statusText}`);
    }

    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error(`Ошибка при получении данных о погоде: ${error.message}`);
    throw error;
  }
}

async function getWeatherByCity(city) {
  try {
    if (!city) {
      throw new Error("Название города не задано.");
    }
    const { lat, lon } = await getCoordinatesByCity(city);
    return await getWeatherByCoordinates(lat, lon);
  } catch (error) {
    console.error(`Ошибка при получении данных о погоде: ${error.message}`);
    throw error;
  }
}

async function getWeatherByIP() {
  try {
    const location = await getLocationByIP();
    return await getWeatherByCoordinates(location.lat, location.lon);
  } catch (error) {
    console.error(
      `Ошибка при получении данных о погоде по IP: ${error.message}`
    );
    throw error;
  }
}

export { getWeatherByCity, getWeatherByCoordinates, getWeatherByIP };
