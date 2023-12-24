let numbers = [5, 6, -1, 8, 4, -4];
let sum = 0;
numbers.filter((element,index)=>{
    if(numbers[index]>=0){
        sum += element;
    }
})
console.log("The result will be:",sum);