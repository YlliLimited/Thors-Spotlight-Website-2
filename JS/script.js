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
