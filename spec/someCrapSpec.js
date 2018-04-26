describe('Houses', function() {
  beforeEach(function() {
  myHouses = new Houses();
  });


  describe('_houseList', function() {
    it('starts as an empty object', function() {
      expect(myHouses._houseList).toEqual({});
    });
  });

  describe('_houseList', function() {
    it('starts as an empty object', function() {
      myHouses._houseList.fart = {smell: "awful"};
      expect(myHouses._houseList.fart).toEqual({smell: "awful"});
    });
  });

  describe('_houseList', function() {
    it('starts as an empty object', function() {
      myHouses._houseList.fart = {smell: "awful"};
      expect(myHouses._houseList.fart.smell).toBe("awful");
    });
  });

  describe('addHouse', function() {
    it('adds keys and objects', function() {
      myHouses.addHouse("Mansion");
      expect(myHouses._houseList.Mansion).toEqual({descrip: null, price: null, dates: []});
    });
  });

  describe('addHouse', function() {
    it('can add description', function() {
      myHouses.addHouse('Mansion', {description: "Uuuuge, very Uuuge"});
      expect(myHouses._houseList.Mansion.descrip).toEqual("Uuuuge, very Uuuge");
    });
  });

  // describe('increase', function() {
  //   it('increases by 10', function() {
  //     aThermostat.temperature = 15;
  //     aThermostat.up();
  //     expect(aThermostat.temperature).toBe(25);
  //   });
  // });



});
