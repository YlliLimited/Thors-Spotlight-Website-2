const loadingScreen = document.getElementById("loadingScreen");

function hideLoadingScreen() {
    loadingScreen.style.visibility = "hidden";
}
function showLoadingScreen() {
    loadingScreen.style.visibility = "show";
}

document.addEventListener("readystatechange", (e) => {
    if (document.readyState === "complete") {
        hideLoadingScreen();
    } else {
        showLoadingScreen();
    }
});



// Intersecton Observer
const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => Observer.observe(el));
// End of Intersecton Observer