function rangeOfNumbers(startNum, endNum) {
    if ( startNum == endNum+1){
      return [];
    }
   
    const tempArray = rangeOfNumbers(startNum+1, endNum);
    tempArray.unshift(startNum)
    
    return tempArray;
  };

  console.log(rangeOfNumbers(1, 5));
  console.log(rangeOfNumbers(11, 17))