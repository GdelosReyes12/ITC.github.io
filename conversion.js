// Fahrenheit to Celsius Conversion
function toCelsius(t) {
    return (5 / 9) * (t - 32);
}

function updateCelsius() {
    const ftemp = parseFloat(document.getElementById("ftemp").value) || 0;
    const celsius = toCelsius(ftemp);
    document.getElementById("sum").value = celsius.toFixed(2);
}

// Celsius to Fahrenheit Conversion
function toFahrenheit(t) {
    return t * (9 / 5) + 32;
}

function updateFahrenheit() {
    const ftemp1 = parseFloat(document.getElementById("ftemp1").value) || 0;
    const fahrenheit = toFahrenheit(ftemp1);
    document.getElementById("sum1").value = fahrenheit.toFixed(2);
}

// Meters to Feet Conversion
function toFeet(m) {
    return m * 3.281;
}

function updateFeet() {
    const meter = parseFloat(document.getElementById("meter").value) || 0;
    const feet = toFeet(meter);
    document.getElementById("sum2").value = feet.toFixed(4);
}

// Feet to Meters Conversion
function toMeters(f) {
    return f / 3.281;
}

function updateMeters() {
    const feet = parseFloat(document.getElementById("feet").value) || 0;
    const meters = toMeters(feet);
    document.getElementById("sum3").value = meters.toFixed(4);
}

// Clear Input and Output Fields
function clearValues(inputId, outputId) {
    document.getElementById(inputId).value = "";
    document.getElementById(outputId).value = "";
}
