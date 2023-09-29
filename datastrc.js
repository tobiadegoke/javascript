let count = 0;

function cc(card) {
  
  while (card){
    switch(card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
      case 7:
      case 8:
      case 9:
        count = count;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count --;
    }
    if (count <= 0){
      console.log(count + " Hold");
    }else{
      console.log(count + " Bet");
    }
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');