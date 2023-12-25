async function brewCoffee(coffee){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your " + coffee +" is ready");
        }, 5000);
    })
}
let a = prompt("What type of coffee do you want: ");
brewCoffee(a).then((value)=>{
    console.log(value);
})