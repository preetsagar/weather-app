const weatherActions = {
  200: "Thunderstorm with light rain. Stay indoors and avoid using electronic devices.",
  201: "Thunderstorm with rain. Stay indoors and avoid using electronic devices.",
  202: "Thunderstorm with heavy rain. Stay indoors and avoid using electronic devices.",
  210: "Light thunderstorm. Stay indoors and avoid using electronic devices.",
  211: "Thunderstorm. Stay indoors and avoid using electronic devices.",
  212: "Heavy thunderstorm. Stay indoors and avoid using electronic devices.",
  221: "Ragged thunderstorm. Stay indoors and avoid using electronic devices.",
  230: "Thunderstorm with light drizzle. Stay indoors and avoid using electronic devices.",
  231: "Thunderstorm with drizzle. Stay indoors and avoid using electronic devices.",
  232: "Thunderstorm with heavy drizzle. Stay indoors and avoid using electronic devices.",
  300: "Light drizzle. Carry an umbrella.",
  301: "Drizzle. Carry an umbrella.",
  302: "Heavy drizzle. Carry an umbrella.",
  310: "Light drizzle rain. Carry an umbrella.",
  311: "Drizzle rain. Carry an umbrella.",
  312: "Heavy drizzle rain. Carry an umbrella.",
  313: "Shower rain and drizzle. Carry an umbrella.",
  314: "Heavy shower rain and drizzle. Carry an umbrella.",
  321: "Shower drizzle. Carry an umbrella.",
  500: "Light rain. Carry an umbrella.",
  501: "Moderate rain. Carry an umbrella.",
  502: "Heavy rain. Avoid going outside unless necessary.",
  503: "Very heavy rain. Avoid going outside unless necessary.",
  504: "Extreme rain. Avoid going outside unless necessary.",
  511: "Freezing rain. Drive carefully and avoid slippery surfaces.",
  520: "Light shower rain. Carry an umbrella.",
  521: "Shower rain. Carry an umbrella.",
  522: "Heavy shower rain. Avoid going outside unless necessary.",
  531: "Ragged shower rain. Avoid going outside unless necessary.",
  600: "Light snow. Wear warm clothing.",
  601: "Snow. Wear warm clothing and drive carefully.",
  602: "Heavy snow. Wear warm clothing and avoid driving if possible.",
  611: "Sleet. Drive carefully and wear warm clothing.",
  612: "Light shower sleet. Drive carefully and wear warm clothing.",
  613: "Shower sleet. Drive carefully and wear warm clothing.",
  615: "Light rain and snow. Wear warm clothing and drive carefully.",
  616: "Rain and snow. Wear warm clothing and drive carefully.",
  620: "Light shower snow. Wear warm clothing.",
  621: "Shower snow. Wear warm clothing and drive carefully.",
  622: "Heavy shower snow. Wear warm clothing and avoid driving if possible.",
  701: "Mist. Drive carefully and use fog lights.",
  711: "Smoke. Avoid outdoor activities and wear a mask.",
  721: "Haze. Avoid outdoor activities and wear a mask.",
  731: "Sand/dust whirls. Avoid outdoor activities and wear a mask.",
  741: "Fog. Drive carefully and use fog lights.",
  751: "Sand. Avoid outdoor activities and wear a mask.",
  761: "Dust. Avoid outdoor activities and wear a mask.",
  762: "Volcanic ash. Stay indoors and wear a mask if necessary.",
  771: "Squalls. Stay indoors and secure outdoor objects.",
  781: "Tornado. Seek shelter immediately.",
  800: "Clear sky. Enjoy your day!",
  801: "Few clouds. Enjoy your day!",
  802: "Scattered clouds. Enjoy your day!",
  803: "Broken clouds. Enjoy your day!",
  804: "Overcast clouds. It might feel cooler.",
  900: "Tornado. Seek shelter immediately.",
  901: "Tropical storm. Stay indoors and avoid coastal areas.",
  902: "Hurricane. Stay indoors and follow emergency instructions.",
  903: "Cold. Wear warm clothing.",
  904: "Hot. Stay hydrated and avoid outdoor activities.",
  905: "Windy. Secure outdoor objects and avoid outdoor activities.",
  906: "Hail. Stay indoors and avoid driving.",
  951: "Calm. Enjoy your day!",
  952: "Light breeze. Enjoy your day!",
  953: "Gentle breeze. Enjoy your day!",
  954: "Moderate breeze. Enjoy your day!",
  955: "Fresh breeze. Enjoy your day!",
  956: "Strong breeze. Secure outdoor objects.",
  957: "High wind, near gale. Secure outdoor objects and avoid outdoor activities.",
  958: "Gale. Stay indoors and secure outdoor objects.",
  959: "Severe gale. Stay indoors and secure outdoor objects.",
  960: "Storm. Stay indoors and secure outdoor objects.",
  961: "Violent storm. Stay indoors and secure outdoor objects.",
  962: "Hurricane. Stay indoors and follow emergency instructions.",
};

const weatherColors = {
  200: "#b0c4de", // Thunderstorm with light rain
  201: "#b0c4de", // Thunderstorm with rain
  202: "#b0c4de", // Thunderstorm with heavy rain
  210: "#b0c4de", // Light thunderstorm
  211: "#b0c4de", // Thunderstorm
  212: "#b0c4de", // Heavy thunderstorm
  221: "#b0c4de", // Ragged thunderstorm
  230: "#b0c4de", // Thunderstorm with light drizzle
  231: "#b0c4de", // Thunderstorm with drizzle
  232: "#b0c4de", // Thunderstorm with heavy drizzle
  300: "#add8e6", // Light drizzle
  301: "#add8e6", // Drizzle
  302: "#add8e6", // Heavy drizzle
  310: "#add8e6", // Light drizzle rain
  311: "#add8e6", // Drizzle rain
  312: "#add8e6", // Heavy drizzle rain
  313: "#add8e6", // Shower rain and drizzle
  314: "#add8e6", // Heavy shower rain and drizzle
  321: "#add8e6", // Shower drizzle
  500: "#87cefa", // Light rain
  501: "#87cefa", // Moderate rain
  502: "#4682b4", // Heavy rain
  503: "#4682b4", // Very heavy rain
  504: "#4682b4", // Extreme rain
  511: "#b0e0e6", // Freezing rain
  520: "#87cefa", // Light shower rain
  521: "#87cefa", // Shower rain
  522: "#4682b4", // Heavy shower rain
  531: "#4682b4", // Ragged shower rain
  600: "#f0f8ff", // Light snow
  601: "#f0f8ff", // Snow
  602: "#f0f8ff", // Heavy snow
  611: "#d3d3d3", // Sleet
  612: "#d3d3d3", // Light shower sleet
  613: "#d3d3d3", // Shower sleet
  615: "#f0f8ff", // Light rain and snow
  616: "#f0f8ff", // Rain and snow
  620: "#f0f8ff", // Light shower snow
  621: "#f0f8ff", // Shower snow
  622: "#f0f8ff", // Heavy shower snow
  701: "#d0e2f0", // Mist
  711: "#d3d3d3", // Smoke
  721: "#c0c0c0", // Haze
  731: "#d2b48c", // Sand/dust whirls
  741: "#9ea7aa", // Fog
  751: "#d2b48c", // Sand
  761: "#d3d3d3", // Dust
  762: "#d3d3d3", // Volcanic ash
  771: "#778899", // Squalls
  781: "#ff69b4", // Tornado
  800: "#f0f8ff", // Clear sky
  801: "#f0f8ff", // Few clouds
  802: "#d3d3d3", // Scattered clouds
  803: "#d3d3d3", // Broken clouds
  804: "#d3d3d3", // Overcast clouds
  900: "#ff69b4", // Tornado
  901: "#778899", // Tropical storm
  902: "#778899", // Hurricane
  903: "#87ceeb", // Cold
  904: "#ff6347", // Hot
  905: "#4682b4", // Windy
  906: "#778899", // Hail
  951: "#f0f8ff", // Calm
  952: "#f0f8ff", // Light breeze
  953: "#f0f8ff", // Gentle breeze
  954: "#f0f8ff", // Moderate breeze
  955: "#f0f8ff", // Fresh breeze
  956: "#4682b4", // Strong breeze
  957: "#4682b4", // High wind, near gale
  958: "#4682b4", // Gale
  959: "#4682b4", // Severe gale
  960: "#4682b4", // Storm
  961: "#4682b4", // Violent storm
  962: "#778899", // Hurricane
};

export const getWeatherAction = (weatherCode) => weatherActions[weatherCode];
export const getWeatherColor = (weatherCode) => weatherColors[weatherCode] || "#c4f4ff";
