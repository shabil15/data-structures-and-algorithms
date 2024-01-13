// function countDoubles(str) {
//   const charFrequency = {};

//   // Count the frequency of each character
//   for (const char of str) {
//     charFrequency[char] = (charFrequency[char] || 0) + 1;
//   }

//   // Find characters with a frequency of 2
//   const doubles = [];
//   for (const char in charFrequency) {
//     if (charFrequency[char] >= 2) {
//       doubles.push(`${char}, ${charFrequency[char]}`);
//     }
//   }

//   return doubles;
// }

// // Example usage


function countDoubles(str){
  const countFrequency = {}

  for(const char of str){
    countFrequency[char]= (countFrequency[char] || 0) + 1
  }

  const doubles = []

  for(const char in countFrequency){
    if(countFrequency[char]>=2){
      doubles.push(`${char},${countFrequency[char]}`)
    }
  }
  return doubles
}

let str = 'aasddfdserererey'
console.log(countDoubles(str))