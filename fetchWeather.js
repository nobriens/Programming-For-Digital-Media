let apikey = "23a2d788e95c45b1aff192614251510"
let url = "http://api.weatherapi.com/v1/current.json?key=23a2d788e95c45b1aff192614251510&q="

const outputParagraph = document.getElementById("output");
const inputTextbox = document.getElementById("textInput");

async function fetchWeather(location) {
  try {
    const response = await fetch(url + encodeURIComponent(location));
    if (!response.ok) {
      throw new Error("Location not found");
    }
    const data = await response.json();

    const { name, country } = data.location;
    const { temp_c, condition } = data.current;
    outputParagraph.textContent = `${name}, ${country}: ${temp_c}°C, ${condition.text}`;
  } catch (err) {
    console.error(err);
    outputParagraph.textContent = "error " + err.message;
  }
}

function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

const handleInput = debounce(() => {
  const location = inputTextbox.value.trim();
  if (location.length > 2) {
    fetchWeather(location);
  } else {
    outputParagraph.textContent = "Type your location above";
  }
}, 800);

inputTextbox.addEventListener("input", handleInput);



