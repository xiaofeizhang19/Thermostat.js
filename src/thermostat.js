function Thermostat() {
  this.temperature = 20
  this.powerSaving = true
  this.energyUsage = 'medium-usage'
};

Thermostat.prototype.up = function() {
  if (this.powerSaving) {
    if (this.temperature < 25) {
      this.temperature += 1;
    } else {
      throw 'Maximum temperature set to 25'
    }
  } else {
    if (this.temperature < 32) {
      this.temperature += 1;
    } else {
      throw 'Maximum temperature set to 32'
    }
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
  this.temperature -= 1;}
  else { throw 'Minimum temperature set to 10'}
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving = !this.powerSaving
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.updateUsage = function() {
  if (this.temperature < 18) {
    this.energyUsage = 'low-usage';
  } else if (this.temperature >= 25) {
    this.energyUsage = 'high-usage';
  } else {
    this.energyUsage = 'medium-usage';
  }
};


// Thermostat.prototype.getTemperature = function() {
//   return this.temperature;
// };


// function Airport(capacity = 20) {
//    this.hangar = []
//    this.capacity = capacity
// };
//
// Airport.prototype.land  = function(plane) {
//   if (this.getWeather() === 'stormy') {
//     throw "Stormy - no plane movements at airport"
//   };
//   if (this.capacity === this.hangar.length) {
//     throw "Capacity exceeded"
//   };
//   this.hangar.push(plane);
// };
//
// Airport.prototype.getPlanes = function() {
//   return this.hangar
// };
//
// Airport.prototype.getWeather = function() {
//   random_number = Math.floor(Math.random() * 10)
//   if (random_number === 0) {
//     return 'stormy'
//   } else {
//     return 'sunny'
//   }
// };
//
// Airport.prototype.takeoff = function(plane){
//   if (this.getWeather() === 'stormy') {
//     throw "Stormy - no plane movements at airport"
//   };
//   if (this.hangar.includes(plane) === false) {
//     throw "Plane not at airport"
//   };
//    var index = this.hangar.indexOf(plane)
//    if (index > -1){
//        this.hangar.splice(index, 1)
//     };
// };
