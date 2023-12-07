/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   let s1 = str1.toLowerCase();
   let s2 = str2.toLowerCase();
 
  if(str1.length != str2.length) return false;
    
  for(let i=0;i<str2.length;i++){
    if(!s1.includes(s2[i])) 
    return false;
  }
  for(let i=0;i<str1.length;i++){
    if(!s2.includes(s1[i])) 
    return false;
  }
 return true;
}

module.exports = isAnagram;
