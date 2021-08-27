function truncate(str, n) {
  
  if (str.length > n) {
  
    return str.slice(0 , n - 1) + '…';
  
    } else {

      return str;
    }
  
}
