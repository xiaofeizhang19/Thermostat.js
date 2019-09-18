function Thermostat() {
  this.temperature = 20
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
  this.temperature -= 1;}
  else { throw 'Minimum temperature set to 10'}
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
