// fetch(
//   "http://api.openweathermap.org/data/2.5/weather?id=703448&appid=57da10b96f248d822927a5b48f45bbdf"
// )
//   .then(function (resp) {
//     return resp.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     document.querySelector(".price").innerHTML = `${Math.round(
//       data.main.temp - 273
//     )}&deg`;
//     document.querySelector(".disclaimer").textContent =
//       data.weather[0].description;
//   })
//   .catch(function () {
//     // catch any errors
//   });

fetch(
  "http://api.openweathermap.org/data/2.5/weather?id=694590&appid=57da10b96f248d822927a5b48f45bbdf"
)
  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    console.log(data);
    document.querySelector(".Semenivka").textContent = data.name;
    document.querySelector(".price").innerHTML = `${Math.round(
      data.main.temp - 273
    )}&deg`;
    document.querySelector(".disclaimer").textContent =
      data.weather[0].description;
    document.querySelector(
      ".wind"
    ).textContent = `wind speed: ${data.wind.speed}`;
  })
  .catch(function () {
    // catch any errors
  });
