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
      for (var i =1; i <= 10; i++) thermostat.down();
      expect(function() { thermostat.down() }).toThrow('Minimum temperature set to 10')
    });

    it('power saving mode set to on by default', function() {
      expect(thermostat.powerSaving).toEqual(true)
    });
    it('switch power saving mode', function() {
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toEqual(false)
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toEqual(true)
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



// describe('Airport', function() {
//   var airport;
//   describe('#landing', function() {
//     airport = new Airport();
//     // beforeEach(function() {
//     // airport = {
//     //   land: function(value) {return value;}
//     // };
//     it('can be instructed to land a plane', function() {
//       spyOn(airport, 'land');
//       plane = jasmine.createSpy;
//       airport.land(plane)
//       expect(airport.land).toHaveBeenCalled();
//     });
//     it('when instructed to land plane, airport containts plane', function() {
//       airport = new Airport();
//       spyOn(airport, "getWeather").and.returnValue('sunny');
//       plane = jasmine.createSpy;
//       airport.land(plane);
//       expect(airport.getPlanes()).toEqual([plane])
//     });
//     it('no landing when weather is stormy', function() {
//       airport = new Airport();
//       spyOn(airport, "getWeather").and.returnValue('stormy');
//       plane = jasmine.createSpy;
//       expect(function() {airport.land(plane)}).toThrow("Stormy - no plane movements at airport")
//       expect(airport.getPlanes()).toEqual([])
//     });
//     it('no landing when capacity is reached', function() {
//       airport = new Airport(1);
//       spyOn(airport, "getWeather").and.returnValue('sunny');
//       plane = jasmine.createSpy;
//       airport.land(plane)
//       expect (function() {airport.land(plane)}).toThrow("Capacity exceeded")
//     });
//
//   });
// })
//
// describe('Airport', function() {
//   var airport;
//   describe('#take/-off', function() {
//     airport = new Airport();
//
//     it('can be instructed to have plane take off ', function() {
//       spyOn(airport, "getWeather").and.returnValue('sunny');
//       plane = jasmine.createSpy;
//       spyOn(airport, 'takeoff');
//       airport.land(plane);
//       airport.takeoff(plane);
//       expect(airport.takeoff).toHaveBeenCalled();
//     });
//     it('plane instructed to take off is not in array anymore', function() {
//       airport = new Airport();
//       spyOn(airport, "getWeather").and.returnValue('sunny');
//       plane = jasmine.createSpy;
//       plane2 = jasmine.createSpy;
//       airport.land(plane)
//       airport.land(plane2)
//       airport.takeoff(plane)
//       expect(airport.getPlanes()).toEqual([plane2]);
//     });
//     it('plane cannot take off when weather is stormy', function() {
//       airport = new Airport();
//       plane = jasmine.createSpy;
//       airport.hangar.push(plane);
//       spyOn(airport, "getWeather").and.returnValue('stormy');
//       expect(function() { airport.takeoff(plane) }).toThrow("Stormy - no plane movements at airport")
//     });
//     it('plane cannot take off when not at airport', function() {
//       airport = new Airport();
//       plane = jasmine.createSpy;
//       spyOn(airport, "getWeather").and.returnValue('sunny');
//       expect(function() { airport.takeoff(plane) }).toThrow("Plane not at airport")
//     });
//   });
// })
