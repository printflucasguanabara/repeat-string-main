function repeatStringNumTimes (str, num) {
  // Retorna uma string repetida 'num' vezes.
    if (num < 0) {
   return ""; 
  }
  let rep_str = "";
while (num > 0 ) {
  rep_str += str;
  num--;
}
  return rep_str;
}

module.exports = repeatStringNumTimes
