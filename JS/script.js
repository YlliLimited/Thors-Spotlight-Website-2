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

//Cursor Follower
const cursorFollower = document.getElementById("cursorFollower");
const cursorx = window.screenX;
const cursory = window.screenY;
const windowWidth = window.innerWidth;

document.addEventListener("mousemove", (e) => {
    cursorFollower.style.left = e.clientX - (0.6 * windowWidth) + "px";
    cursorFollower.style.top = e.clientY - (0.6 * windowWidth)  + "px";
});

// document.addEventListener("click", (e) => {
//     cursorFollower.classList.add("click");
//     setTimeout(() => {
//         cursorFollower.classList.remove("click");
//     }, 100);
// });
//Cursor Follower End
