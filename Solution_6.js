let vowels = ['A','E','I','O','U','a','e','i','o','u'];

let s = "Amarjit";
let count = 0;

for (let i = 0; i < s.length; i++) {
   for (let j = 0; j < vowels.length; j++) {
      if(s[i]==vowels[j]){
        count++;
      }
   }
}

console.log("The number of vowels:", count);