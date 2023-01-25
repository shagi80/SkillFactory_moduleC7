export function Reverse(string){
  if (string.length > 0) {
    let result = '';
    for(let ind = string.length-1; ind>=0 ; ind--) {
      result = result + string[ind];
    }
    return result;
  } else {
    return 'Строка пуста';  
  }
}
