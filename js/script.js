const lengthBtn = document.querySelector("#length_btn");
const tempBtn = document.querySelector("#temp_btn");
const weightBtn = document.querySelector("#weight_btn");
const speedBtn = document.querySelector("#speed_btn");

const lengthBox = document.querySelector("#length");
const tempBox = document.querySelector("#temperature");
const weightBox = document.querySelector("#weight");
const speedBox = document.querySelector("#speed");

lengthBtn.addEventListener("click", function () {
  lengthBox.style.display = "block";
  tempBox.style.display = "none";
  weightBox.style.display = "none";
  speedBox.style.display = "none";
});
tempBtn.addEventListener("click", function () {
  lengthBox.style.display = "none";
  tempBox.style.display = "block";
  weightBox.style.display = "none";
  speedBox.style.display = "none";
});
weightBtn.addEventListener("click", function () {
  lengthBox.style.display = "none";
  tempBox.style.display = "none";
  weightBox.style.display = "block";
  speedBox.style.display = "none";
});
speedBtn.addEventListener("click", function () {
  lengthBox.style.display = "none";
  tempBox.style.display = "none";
  weightBox.style.display = "none";
  speedBox.style.display = "block";
});

const pounds = document.querySelector("#lb");
const kilograms = document.querySelector("#kg");
const ounces = document.querySelector("#oz");
const grams = document.querySelector("#g");
const stones = document.querySelector("#st");

pounds.addEventListener("input", function (e) {
  const lb = Number(e.target.value);
  if (e.target.value === "") {
    kilograms.value = "";
    ounces.value = "";
    grams.value = "";
    stones.value = "";
  } else {
    kilograms.value = (lb / 2.2046).toFixed(3);
    ounces.value = lb * 16;
    grams.value = (lb / 0.0022046).toFixed(3);
    stones.value = (lb * 0.071429).toFixed(3);
  }
});

kilograms.addEventListener("input", function (e) {
  const kg = Number(e.target.value);
  if (e.target.value === "") {
    pounds.value = "";
    ounces.value = "";
    grams.value = "";
    stones.value = "";
  } else {
    pounds.value = kg * 2.2046;
    ounces.value = kg * 35.274;
    grams.value = kg * 1000;
    stones.value = (kg * 0.1574).toFixed(3);
  }
});

ounces.addEventListener("input", function (e) {
  const oz = Number(e.target.value);
  if (e.target.value === "") {
    pounds.value = "";
    kilograms.value = "";
    grams.value = "";
    stones.value = "";
  } else {
    pounds.value = oz * 0.0625;
    kilograms.value = (oz / 35.274).toFixed(3);
    grams.value = (oz / 0.035274).toFixed(3);
    stones.value = (oz * 0.0044643).toFixed(3);
  }
});

grams.addEventListener("input", function (e) {
  const g = Number(e.target.value);
  if (e.target.value === "") {
    kilograms.value = "";
    ounces.value = "";
    pounds.value = "";
    stones.value = "";
  } else {
    kilograms.value = g / 1000;
    ounces.value = (g * 0.035274).toFixed(3);
    pounds.value = (g * 0.0022046).toFixed(3);
    stones.value = (g * 0.00015747).toFixed(3);
  }
});

stones.addEventListener("input", function (e) {
  const st = Number(e.target.value);
  if (e.target.value === "") {
    kilograms.value = "";
    ounces.value = "";
    grams.value = "";
    pounds.value = "";
  } else {
    kilograms.value = (st / 0.15747).toFixed(3);
    ounces.value = st * 224;
    grams.value = (st / 0.00015747).toFixed(3);
    pounds.value = st * 14;
  }
});

const meter = document.querySelector("#m");
const centimeter = document.querySelector("#cm");
const millimeter = document.querySelector("#mm");
const kilometer = document.querySelector("#km");
const inches = document.querySelector("#in");
const feet = document.querySelector("#feet");
const Yards = document.querySelector("#Yards");
const Miles = document.querySelector("#Miles");

meter.addEventListener("input", function (e) {
  const m = Number(e.target.value);
  if (e.target.value === "") {
    centimeter.value = "";
    millimeter.value = "";
    kilometer.value = "";
    inches.value = "";
    feet.value = "";
    Yards.value = "";
    Miles.value = "";
  } else {
    centimeter.value = m / 0.01;
    millimeter.value = m * 1000;
    kilometer.value = m / 1000;
    inches.value = (m * 39.37).toFixed(3);
    feet.value = (m * 3.2808).toFixed(3);
    Yards.value = (m * 1.0936).toFixed(3);
    Miles.value = (m * 0.00062137).toFixed(3);
  }
});

centimeter.addEventListener("input", function (e) {
  const cm = Number(e.target.value);
  if (e.target.value === "") {
    meter.value = "";
    millimeter.value = "";
    kilometer.value = "";
    inches.value = "";
    feet.value = "";
    Yards.value = "";
    Miles.value = "";
  } else {
    meter.value = cm / 100;
    millimeter.value = cm * 10;
    kilometer.value = cm / 100000;
    inches.value = (cm * 0.3937).toFixed(3);
    feet.value = (cm * 0.032808).toFixed(3);
    Yards.value = (cm * 0.010936).toFixed(3);
    Miles.value = (cm * 0.0000062137).toFixed(3);
  }
});

millimeter.addEventListener("input", function (e) {
  const mm = Number(e.target.value);
  if (e.target.value === "") {
    meter.value = "";
    centimeter.value = "";
    kilometer.value = "";
    inches.value = "";
    feet.value = "";
    Yards.value = "";
    Miles.value = "";
  } else {
    meter.value = mm / 1000;
    centimeter.value = mm / 10;
    kilometer.value = mm / 1000000;
    inches.value = (mm / 25.4).toFixed(3);
    feet.value = (mm / 304.8).toFixed(3);
    Yards.value = (mm / 914.4).toFixed(3);
    Miles.value = (mm / 1609344).toFixed(3);
  }
});

kilometer.addEventListener("input", function (e) {
  const km = Number(e.target.value);
  if (e.target.value === "") {
    meter.value = "";
    centimeter.value = "";
    millimeter.value = "";
    inches.value = "";
    feet.value = "";
    Yards.value = "";
    Miles.value = "";
  } else {
    meter.value = km * 1000;
    centimeter.value = km * 100000;
    millimeter.value = km * 1000000;
    inches.value = km * 39370;
    feet.value = (km * 3280.8).toFixed(3);
    Yards.value = (km * 1093.6).toFixed(3);
    Miles.value = (km * 0.62137).toFixed(3);
  }
});

inches.addEventListener("input", function (e) {
  const inc = Number(e.target.value);
  if (e.target.value === "") {
    meter.value = "";
    centimeter.value = "";
    millimeter.value = "";
    kilometer.value = "";
    feet.value = "";
    Yards.value = "";
    Miles.value = "";
  } else {
    meter.value = (inc / 39.37).toFixed(3);
    centimeter.value = (inc / 0.3937).toFixed(3);
    millimeter.value = (inc * 25.4).toFixed(3);
    kilometer.value = (inc / 39370).toFixed(3);
    feet.value = (inc * 0.083333).toFixed(3);
    Yards.value = (inc * 0.027778).toFixed(3);
    Miles.value = (inc * 0.000015783).toFixed(3);
  }
});
feet.addEventListener("input", function (e) {
  const ft = Number(e.target.value);
  if (e.target.value === "") {
    meter.value = "";
    centimeter.value = "";
    millimeter.value = "";
    kilometer.value = "";
    inches.value = "";
    Yards.value = "";
    Miles.value = "";
  } else {
    meter.value = (ft / 3.2808).toFixed(3);
    centimeter.value = (ft / 0.032808).toFixed(3);
    millimeter.value = ft * 304.8;
    kilometer.value = (ft / 3280.8).toFixed(3);
    inches.value = ft * 12;
    Yards.value = (ft * 0.33333).toFixed(3);
    Miles.value = (ft * 0.00018939).toFixed(3);
  }
});
Yards.addEventListener("input", function (e) {
  const yd = Number(e.target.value);
  if (e.target.value === "") {
    meter.value = "";
    centimeter.value = "";
    millimeter.value = "";
    kilometer.value = "";
    inches.value = "";
    feet.value = "";
    Miles.value = "";
  } else {
    meter.value = (yd / 1.0936).toFixed(3);
    centimeter.value = (yd / 0.010936).toFixed(3);
    millimeter.value = (yd * 914.4).toFixed(3);
    kilometer.value = (yd / 1093.6).toFixed(3);
    inches.value = yd * 36;
    feet.value = yd * 3;
    Miles.value = (yd * 0.00056818).toFixed(3);
  }
});
Miles.addEventListener("input", function (e) {
  const mi = Number(e.target.value);
  if (e.target.value === "") {
    meter.value = "";
    centimeter.value = "";
    millimeter.value = "";
    kilometer.value = "";
    inches.value = "";
    Yards.value = "";
    feet.value = "";
  } else {
    meter.value = (mi / 0.00062137).toFixed(3);
    centimeter.value = (mi / 0.0000062137).toFixed(3);
    millimeter.value = mi * 1609344;
    kilometer.value = (mi / 0.62137).toFixed(3);
    inches.value = mi * 63360;
    Yards.value = mi * 1760;
    feet.value = mi * 5280;
  }
});

const milePerHour = document.querySelector("#MPH");
const footPerSecond = document.querySelector("#FPS");
const meterPerSecond = document.querySelector("#MPS");
const kilometerPerHour = document.querySelector("#KPH");
const knot = document.querySelector("#knot");

milePerHour.addEventListener("input", function (e) {
  if (e.target.value === "") {
    footPerSecond.value = "";
    meterPerSecond.value = "";
    kilometerPerHour.value = "";
    knot.value = "";
  } else {
    const mph = Number(e.target.value);
    footPerSecond.value = (mph * 1.467).toFixed(3);
    meterPerSecond.value = (mph / 2.237).toFixed(3);
    kilometerPerHour.value = (mph * 1.609).toFixed(3);
    knot.value = (mph / 1.151).toFixed(3);
  }
});
footPerSecond.addEventListener("input", function (e) {
  if (e.target.value === "") {
    milePerHour.value = "";
    meterPerSecond.value = "";
    kilometerPerHour.value = "";
    knot.value = "";
  } else {
    const fps = Number(e.target.value);
    milePerHour.value = (fps / 1.467).toFixed(3);
    meterPerSecond.value = (fps / 3.281).toFixed(3);
    kilometerPerHour.value = (fps * 1.097).toFixed(3);
    knot.value = (fps / 1.688).toFixed(3);
  }
});
meterPerSecond.addEventListener("input", function (e) {
  if (e.target.value === "") {
    milePerHour.value = "";
    footPerSecond.value = "";
    kilometerPerHour.value = "";
    knot.value = "";
  } else {
    const mps = Number(e.target.value);
    milePerHour.value = (mps * 2.237).toFixed(3);
    footPerSecond.value = (mps * 3.281).toFixed(3);
    kilometerPerHour.value = (mps * 3.6).toFixed(3);
    knot.value = (mps / 1.944).toFixed(3);
  }
});
kilometerPerHour.addEventListener("input", function (e) {
  if (e.target.value === "") {
    milePerHour.value = "";
    footPerSecond.value = "";
    meterPerSecond.value = "";
    knot.value = "";
  } else {
    const kph = Number(e.target.value);
    milePerHour.value = (kph / 1.609).toFixed(3);
    footPerSecond.value = (kph / 1.907).toFixed(3);
    meterPerSecond.value = (kph / 3.6).toFixed(3);
    knot.value = (kph / 1.852).toFixed(3);
  }
});
knot.addEventListener("input", function (e) {
  if (e.target.value === "") {
    milePerHour.value = "";
    footPerSecond.value = "";
    meterPerSecond.value = "";
    kilometerPerHour.value = "";
  } else {
    const knot = Number(e.target.value);
    milePerHour.value = (knot * 1.151).toFixed(3);
    footPerSecond.value = (knot * 1.688).toFixed(3);
    meterPerSecond.value = (knot / 1.944).toFixed(3);
    kilometerPerHour.value = (knot * 1.852).toFixed(3);
  }
});

const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fah");
const kelvin = document.querySelector("#kelvin");

celsius.addEventListener("input", function (e) {
  if (e.target.value === 0) {
    fahrenheit.value = "";
    kelvin.value = "";
  } else {
    const c = Number(e.target.value);
    fahrenheit.value = c * 1.8 + 32;
    kelvin.value = c + 273.15;
  }
});

fahrenheit.addEventListener("input", function (e) {
  if (e.target.value === "") {
    celsius.value = "";
    kelvin.value = "";
  } else {
    const f = Number(e.target.value);
    celsius.value = ((f - 32) / 1.8).toFixed(3);
    kelvin.value = ((f - 32) / 1.8 + 273.15).toFixed(3);
  }
});

kelvin.addEventListener("input", function (e) {
  if (e.target.value === "") {
    celsius.value = "";
    fahrenheit.value = "";
  } else {
    const k = Number(e.target.value);
    fahrenheit.value = ((k - 273.15) * 1.8 + 32).toFixed(3);
    celsius.value = k - 273.15;
  }
});
