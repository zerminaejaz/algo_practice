function arrayDiff(a, b) {
  const filteredItems = a.filter(item => !b.includes(item))
  //if the item is not in array b, gets stored in array
  
  return filteredItems
}