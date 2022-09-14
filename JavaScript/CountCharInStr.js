const charCount = (str) => {
  const strArr = str.replace(/\s/g, '').toLowerCase().split('');
  const charObj = {};
  for(let i = 0; i < strArr.length; i++) {
    if (charObj[strArr[i]]){
      const val = charObj[strArr[i]];
      charObj[strArr[i]] = val+1;
    } else {
      charObj[strArr[i]] = 1;
    }
  }
  // const charObj = new Map();
  // for(let i = 0; i < strArr.length; i++) {
  //   if (charObj.has(strArr[i])){
  //     const val = charObj.get(strArr[i]);
  //     charObj.set(strArr[i], val+1)
  //   } else {
  //     charObj.set(strArr[i], 1)
  //   }
  // }

  return charObj;
}

const outPut = charCount('this is vishnu SHarma And My Age is 30Y');
console.log(outPut);
