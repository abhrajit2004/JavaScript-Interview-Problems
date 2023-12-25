function setAuthToken(token) {
    localStorage.setItem("token",token);
    setTimeout(() => {
        localStorage.removeItem("token");
    }, 10000);
}

let token = prompt("Enter a token");
setAuthToken(token);