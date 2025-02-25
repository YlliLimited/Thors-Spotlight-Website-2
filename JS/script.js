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
    cursorFollower.style.left = e.clientX - 1.3 * windowWidth + "px";
    cursorFollower.style.top = e.clientY - 1.3 * windowWidth + "px";
});
//Cursor Follower End

// Loading Video
const video = document.getElementById("loadingVideo");
const videoBackground = document.getElementById("loadingVideoBackground");
const closeButton = document.getElementById("closeButton");
let videoPlayTimes = sessionStorage.getItem("videoPlayTimes") || "0";

export const checkUserAgentVideoAutoplay = async () => {
    const video = document.querySelector("#video-bg");

    try {
        await video.play();

        video.setAttribute("autoplay", true);

        console.log("video started playing successfully");
    } catch (err) {
        video.setAttribute("autoplay", false);
        video.setAttribute("controls", true);
    }
};
if (videoPlayTimes === "1") {
    video.style.visibility = "hidden";
    videoBackground.style.visibility = "hidden";
    video.style.animation = "none";
    videoBackground.style.animation = "none";
    video.pause();
}

video.addEventListener("ended", () => {
    sessionStorage.setItem("videoPlayTimes", "1");
});

closeButton.addEventListener("click", () => {
    video.style.visibility = "hidden";
    videoBackground.style.visibility = "hidden";
    video.style.animation = "none";
    videoBackground.style.animation = "none";
    video.pause();
    sessionStorage.setItem("videoPlayTimes", "1");
});
// Loading Video End
