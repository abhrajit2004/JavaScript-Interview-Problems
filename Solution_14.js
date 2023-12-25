function smoothScrollToTop() {
    let box = document.getElementById("box");
    document.getElementById("box").style.display = "inline";
    document.body.style.scrollBehavior = "smooth";
    box.addEventListener("click",()=>{
        document.getElementById("container").scrollIntoView();
    })
}
smoothScrollToTop();