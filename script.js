
//write first method
    function sleep_in(weekday,vacation) {
        var sleepIn = !weekday || vacation;
        return sleepIn;
    }

//write second method
    function monkey_trouble(param1, param2) {
        var type1 = param1 && param2;
        var type2 = !param1 && !param2;
        var trouble = type1 || type2;
        return trouble;
    }

//write third method
    function string_times(string, n) {
        var print = string;
        for (var i = 0; i < (n - 1); i++) {
            var print = print + string;
        }
        if (n == 0) {
            var print = "";
        }
        return print;
    }

//write fourth method
    function front_times(string, n) {
        var firstThree = string.charAt(0) + string.charAt(1) + string.charAt(2);
        var print = firstThree;
        for (var i = 0; i < (n - 1); i++) {
            var print = print + firstThree;
        }
        if (n == 0) {
            var print = "";
        }
        return print;
    }

//write fifth method
    function string_bits(string) {
        var print = "";
        var n = string.length;
        for(var i = 0; i < n; i++)
            if (i % 2 == 0) {

            } else {
                var print = print + string.charAt(i-1);
            }
        return print;
    }

//write sixth method
function caughtSpeeding(speed, birthday) {
    var ticket = 0;
    if (birthday == true) {
        if (speed <= 65) {
            var ticket = 0;
        } else {
            if (65 < speed <= 85) {
                var ticket = 1;
            }
            if (85 < speed) {
                var ticket = 2;
            }
        }
    } else {
        if (speed <= 60) {
            var ticket = 0;
        } else {
            if (60 < speed <= 80) {
                var ticket = 1;
            }
            if (80 < speed) {
                var ticket = 2;
            }
        }
    }
    return ticket;
}

//write seventh method
    function fizz_buzz(n) {
        var result = "";
        if (n % 3 == 0) {
            if (n % 5 == 0) {
                var result = "FizzBuzz";
            } else {
                var result = "Fizz";
            }
        } else {
            if (n % 5 == 0) {
                var result = "Buzz";
            } else {
                var result = n + "!";
            }
        }
        return result;
    }

//write eighth method
    function teaParty(tea, candy) {
        if (tea < 5 || candy < 5) {
            var party = 0;
        } else {
            if (tea >= 5 && candy >= 5) {
              if (tea >= 2 * candy || candy >= 2 * tea) {
                  var party = 2;
              } else {
                  var party = 1;
              }
            }
        }
        return party;
    }

//write ninth method
    function blackjack(n, z) {
        if (n <= 21 && z <= 21) {
            if (n >= z) {
                var result = n;
            }
            if (n < z) {
                var result = z;
            }
        } else {
            if (n > 21 && z > 21) {
                var result = 0;
            } else {
                if (n > 21) {
                    var result = z;
                } else {
                    var result =  n;
                }
            }
        }
        return result;
    }

//write tenth method
    function loneSum(a, b, c) {
        var loneSum = 0;
        if (a == b || b == c || a == c) {
            if (a == b && b == c) {
                var loneSum = 0;
            } else {
                if (a == b) {
                    var loneSum = c;
                }
                if (b == c) {
                    var loneSum = a;
                }
                if (a == c) {
                    var loneSum = b;
                }
            }
        } else {
            var loneSum = a + b + c;
        }
        return loneSum;
    }


//function runs on click and outputs test cases you create to page
    function tester() {
        document.getElementById("output").innerHTML += sleep_in(true, false);
        document.getElementById("output").innerHTML += monkey_trouble(true, false);
        document.getElementById("output").innerHTML += string_times(string, n);
        document.getElementById("output").innerHTML += fizz_buzz(n);
        //test third method, etc
    }
