    function dayName(date) {
      const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
      return daysOfTheWeek[date.getDay()];
    }

    function reverseString(string) {
      let stringArray = Array.from(string);
      let reversedArray = stringArray.reverse();
      return reversedArray.join("");
    }