// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    let finalString = ""
    for(let i = 0; i < s.length; i++)
    {   
      let substring = s[i].toUpperCase()
      for(let j = 1; j < i + 1; j++){
        substring += s[i].toLowerCase()
      }
      if(i!=s.length-1)
          substring += "-"
      finalString += substring
      //grab letter at i , capitalize it at first instance, then go until iteration counter+1
    }
      return finalString
  }