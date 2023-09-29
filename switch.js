/*
    Write a switch statement which tests val and sets answer for the 
    following conditions:
    1 - alpha
    2 - beta
    3 - gamma
    4 - delta
*/

function caseInSwitch(val) {
    let answer = "";
    
    switch (val){
      case 1:
        return "alpha";
        break;
      case 2:
        return "beta";
        break;
      case 3:
        return "gamma";
        break;
      case 4:
        return "delta";
        break;
    }

    return answer;
  }
  
  caseInSwitch(1);

  /*********** adding a default option in switch statements ************/

  // this is the statement that get executed if all the cases aren't met
  // like the last else statement in if/else statement

  /*
    Write a switch statement to set answer for the following conditions:
    a - apple
    b - bird
    c - cat
    default - stuff
*/

function switchOfStuff(val) {
    let answer = "";
  
    switch(val){
      case "a":
        return "apple";
        break;
      case "b":
        return "bird";
        break;
      case "c":
        return "cat";
      default:
        return "stuff";
        break        
    }

    return answer;
  }
  
  switchOfStuff(1);

  /**************Multiple Identical options in switch statement************** */

  // Write a switch statement to set answer for the following ranges:
  //  1-3 - Low
  //  4-6 - Mid
  //  7-9 - High

  function sequentialSizes(val) {
    let answer = "";
    switch (val){
      case 1:
      case 2:
      case 3:
        console.log("Low");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Mid");
    case 7:
    case 8:
    case 9:
        console.log("High");
    }

    return answer;
  }
  
  sequentialSizes(1);