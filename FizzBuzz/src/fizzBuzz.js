class Fizzbuzz {

  fizz_number(number){
    if (this._isDivisibleBy(number, 15)){
      return "Fizzbuzz";
    }
    else if (this._isDivisibleBy(number, 5)) {
      return "Buzz";
    }
    else if (this._isDivisibleBy(number, 3)) {
      return "Fizz";
    }
    else {
      return number;
    }
  
  }

  _isDivisibleBy(number, divisor){
    return (number % divisor === 0);
  }

}
let fizzBuzz = new Fizzbuzz();

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz.fizz_number(i));
}