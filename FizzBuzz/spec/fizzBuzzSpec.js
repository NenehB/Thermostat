describe("Fizzbuzz", function() {
  let fizzbuzz;
  it("should be divisible by 3 ", function() {
    fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  });
});