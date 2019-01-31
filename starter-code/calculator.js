
    // get the user inputs
    var value1 = parseInt(prompt('enter first value'));
    var value2 = parseInt(prompt('enter the second value'));
    var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";
    switch (choice) {
      case "a":
            alert ("the answer is"+(value1+value2));
        break;
      case "s":
          alert ("the answer is "+ (value1-value2));
        break;
          case "m":
              alert ("the answer is "+ (value1*value2));
          break;
              case "d":
                  alert ("the answer is "+ (value1/value2));
      default:
              alert ("the answer is "+(value1+value2));
    }
