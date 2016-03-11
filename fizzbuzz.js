function FizzBuzz() {
  return {
    generateNumbers: function()
    {
      var items = [];
      for (var i=0; i<100; i++)
      {
        items.push(i+1);
      }
      return items;
    },

    play: function(numbers) {

      var fizzBuzzResult = [];

      for(var i=0;i<numbers.length;i++) {
        var number = numbers[i];

        if(number % 3 === 0 && number % 5 === 0){
          fizzBuzzResult.push("Fizz Buzz");
        }
        else if(number % 3 === 0) {
          fizzBuzzResult.push("Fizz");
        }
        else if(number % 5 === 0) {
          fizzBuzzResult.push("Buzz");
        }
        else {
          fizzBuzzResult.push(number);
        }
      }

      return fizzBuzzResult;
    }
  }
}
