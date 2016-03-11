describe("My program", function() {
  it("contains a simple mock test", function() {
    expect(1).toBe(1);
  });
});

describe("The FizzBuzz program", function() {
  var fizzBuzz = new FizzBuzz();

  it("returns 100 items", function() {
    var result = fizzBuzz.generateNumbers();

    expect(result.length).toBe(100);
  });

  it("returns numbers 1-100", function() {
      var result = fizzBuzz.generateNumbers();

      for(var i=0;i<100;i++){
        expect(result[i]).toBe(i+1);
      }
  });

  it("prints fizz for all numbers divisible by 3", function() {
      var numbers = fizzBuzz.generateNumbers();

      var result = fizzBuzz.play(numbers);

      for(var i=0;i<100;i++){

        var number = numbers[i];

        if(number % 3 === 0 && number % 5 !== 0) {
            expect(result[i]).toBe("Fizz", "for number " + number);
        }
      }
  });

  it("prints buzz for all numbers divisible by 5", function() {
      var numbers = fizzBuzz.generateNumbers();

      var result = fizzBuzz.play(numbers);

      for(var i=0;i<100;i++){

        var number = numbers[i];

        if(number % 5 === 0 && number % 3 !== 0) {
            expect(result[i]).toBe("Buzz", "for number " + number);
        }
      }
  });

  it("prints Fizz Buzz for numbers divisble by 3 and 5", function() {
      var numbers = fizzBuzz.generateNumbers();

      var result = fizzBuzz.play(numbers);

      for(var i=0;i<100;i++){

        var number = numbers[i];

        if(number % 3 === 0 && number % 5 === 0) {
            expect(result[i]).toBe("Fizz Buzz");
        }
      }
  });

});
