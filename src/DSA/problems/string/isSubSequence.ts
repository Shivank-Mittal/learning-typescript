export function isSubsequence(s:string, t:string) {
    const tArray = t.split('');
    const sArray = s.split('');
    const totlaKeysToBeFound = sArray.length;
    let counter = 0;
  
    if (totlaKeysToBeFound <= 0) return false;
  
    for (let index = 0; index < tArray.length; index++) {
      if (tArray[index] === sArray[counter]) counter++;
    }
  
    return counter === totlaKeysToBeFound;
}
  