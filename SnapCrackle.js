function  snapCrackle(maxValue){
    let text = ""
    for(let num = 1; num <= maxValue; num++){ 
      if(num % 2 !== 0 && num % 5 === 0){
      text += "SnapCrackle, ";
        continue;
      }
    if(num % 2 !== 0){
      text += "Snap, ";
      continue;
    }
    if(num % 5 === 0){
      text += "Crackle, ";
      continue;  
    }
    text += num + ", ";  
  }
  return text  
  }
  console.log(snapCrackle(15))