let password = prompt("Enter your passowrd: ");
let index = 0;

while(index<password.length) {
    let charCode = password.charCodeAt(index);
    if((password.length>=8)&&(charCode >=65 && charCode <=90) &&(charCode >=97 && charCode <=122)&&(charCode >=48 && charCode <=57)){
        alert("You can proceed!");
    }
    else{
        alert("Your password should be at least 8 characters long, contain both uppercase and lowercase letters and includes at least one digit!");
    } 
}