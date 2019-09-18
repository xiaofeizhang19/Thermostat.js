describe('Thermostat', function() {
  var thermostat;
  describe('#business logic', function() {
    beforeEach(function() {
      thermostat = new Thermostat();
    });
    
    it('has default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20)
    });
    it('up increases temperature by 1', function() {
      thermostat.up()
      expect(thermostat.temperature).toEqual(21)
    });
    it('down decreases temperature by 1', function() {
      thermostat.down()
      expect(thermostat.temperature).toEqual(19)
    });
    it('minimum temparature set to 10', function() {
      for (var i = 1; i <= 10; i++) thermostat.down();
      expect(function() { thermostat.down() }).toThrow('Minimum temperature set to 10')
    });

    it('power saving mode set to on by default', function() {
      expect(thermostat.powerSaving).toEqual('on')
    });
    it('switch power saving mode', function() {
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toEqual('off')
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toEqual('on')
    });
    it('maximum temperature is 25 degrees with power saving on', function() {
      for (var i = 1; i <= 5; i++)
      thermostat.up();
      expect(function() { thermostat.up() }).toThrow('Maximum temperature set to 25')
    });
    it('maximum temperature is 32 degrees with power saving off', function() {
      thermostat.powerSavingSwitch();
      for (var i = 1; i <= 12; i++)
      thermostat.up();
      expect(function() { thermostat.up() }).toThrow('Maximum temperature set to 32')
    });

    it ('resets the temparature to 20 degree', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20)
    });

    it ('displays medium energy usage', function() {
      expect(thermostat.energyUsage).toEqual('medium-usage')
    });
    it ('displays low energy usage', function() {
      for (var i = 1; i <= 3; i++) {
        thermostat.down();
      }
      thermostat.updateUsage();
      expect(thermostat.energyUsage).toEqual('low-usage')
    });
    it ('displays high energy usage', function() {
      for (var i = 1; i <= 5; i++) {
        thermostat.up();
      }
      thermostat.updateUsage();
      expect(thermostat.energyUsage).toEqual('high-usage')
    });
  });
});
