describe("Fizzbuzz", function() {
  
  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe("Fizzbuzz", function() {
    it("should be divisible by 3 ", function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.fizz_number(3)).toEqual("Fizz");
    });
  });

  describe("Fizzbuzz", function() {
    it("should NOT be divisible by 3 ", function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.fizz_number(4)).toEqual(4);
    });
  });
  
  describe("Fizzbuzz", function() {
    it("should be divisible by 5 ", function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.fizz_number(10)).toEqual("Buzz");
    });
  });
  
  describe("Fizzbuzz", function() {
    it("should NOT be divisible by 5 ", function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.fizz_number(13)).toEqual(13);
    });
  });
  describe("Fizzbuzz", function() {
    it("should be divisible by 15 ", function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.fizz_number(15)).toEqual("Fizzbuzz");
    });
  });
  
});