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
