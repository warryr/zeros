module.exports = function getZerosCount(number) {
  let zeros = Math.min(countTwos(number), countFives(number));

  function countTwos(number){
    let t = 0;
    while(number > 1){
      number = Math.floor(number/2);
      t += number;
    }
    return t;
  }
  
  function countFives(number){
    let f = 0;
    while(number > 4){
      number = Math.floor(number/5);
      f += number;
    }
    return f;
  }
  return zeros;
}
