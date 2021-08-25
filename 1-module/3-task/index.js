function ucFirst(str) {
 
  if (str == '') {
    return '';
  }
  let otherPart = str.slice(1);
  
  str = str[0].toUpperCase();

  return str + otherPart;
}
ucFirst('');
