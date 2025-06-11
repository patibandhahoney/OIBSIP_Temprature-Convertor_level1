document.getElementById("convertBtn").addEventListener("click", () => {
  const temp = parseFloat(document.getElementById("temperature").value);
  const type = document.getElementById("type").value.toLowerCase();
  const resultField = document.getElementById("result");

  if (isNaN(temp)) {
    resultField.value = "Enter a valid number";
    return;
  }

  let result = "";

  switch (type) {
    case "fahrenheit":
      result = `${((temp - 32) * 5 / 9).toFixed(4)} °C`;
      break;
    case "celsius":
      result = `${((temp * 9 / 5) + 32).toFixed(4)} °F`;
      break;
    case "kelvin":
      result = `${(temp - 273.15).toFixed(4)} °C`;
      break;
  }

  resultField.value = result;
});
