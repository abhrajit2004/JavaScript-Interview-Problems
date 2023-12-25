async function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your order is confirmed");
        }, 2000);
    })
}
placeOrder().then((value)=>{
    console.log(value);
})