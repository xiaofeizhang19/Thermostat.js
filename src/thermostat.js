function Thermostat() {
  this.temperature = 20
  this.powerSaving = 'on'
  this.energyUsage = 'medium-usage'
};

Thermostat.prototype.up = function() {
  if (this.powerSaving === 'on') {
    if (this.temperature + 1 > 25) {
      throw 'Maximum temperature set to 25'
    }
  } else {
    if (this.temperature + 1 > 32) {
      throw 'Maximum temperature set to 32'
    } 
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature -1 < 10) {
    throw 'Minimum temperature set to 10' 
  } 
  this.temperature -= 1;
};

Thermostat.prototype.powerSavingSwitch = function() {
  if (this.powerSaving === 'on') {
    this.powerSaving = 'off';
  } else {
    this.powerSaving = 'on';
  }
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
