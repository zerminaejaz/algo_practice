function makeMap(string){
    if(string.length == 0)
      return 0
    let map = {'(':0, ')':0}
      for(var i=0; i<string.length;i++){
              map[string[i]] += 1    
      }
      return checkPairs(map)
  }
  
  function checkPairs(map){
    console.log("Hello", map)
    if(map['('] != map[')']){
      let max = Math.max(map['('], map[')'])
      let min = Math.min(map['('], map[')'])
      console.log("Min", min)
       console.log("Max", max)
       let value = max-min
      return value
    }
    else 
      return 0
  }
  
  makeDictionary("()))")
  
  