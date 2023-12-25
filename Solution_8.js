async function numbers(arr) {
    arr.map((value)=>{
        setTimeout(() => {
          value = value*2;
          console.log(value);
        }, 500);
    });
}
let arr = [1, 2, 3, 4, 5, 6];
numbers(arr);