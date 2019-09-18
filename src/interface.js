$(document).ready(function() {
  thermostat = new Thermostat();
  update = function() {
    thermostat.updateUsage();
    $("#temperature").text(thermostat.temperature);
    $("#energy-usage").text(thermostat.energyUsage);
  };

  $("#temperature-up").on('click', function() {
      thermostat.up();
      update();
  });
  $("#temperature-down").on('click', function() {
      thermostat.down();
      update();
  });
  $("#temperature-reset").on('click', function() {
      thermostat.reset();
      update();
  });
  $("#powersaving-switch").on('click', function() {
      thermostat.powerSavingSwitch();
      $("#power-saving-status").text(thermostat.powerSaving);
  });

  $('#current-city').change(function() {
    var cityID = $('#current-city').val();
    displayWeather(cityID);
  })

  function displayWeather(id) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?id=' + id;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  };
})
