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

window.addEventListener("load", () => {
    if (videoPlayTimes === "1") {
        video.style.visibility = "hidden";
        videoBackground.style.visibility = "hidden";
        video.style.animation = "none";
        videoBackground.style.animation = "none";
        video.pause();
    } else {
        checkUserAgentVideoAutoplay();
    }
});

const checkUserAgentVideoAutoplay = async () => {
    try {
        await video.play();
        video.style.animation = "loadingVideoAnimation 17s linear";
        videoBackground.style.animation = "loadingVideoAnimation 17s linear";
        video.setAttribute("autoplay", true);
        sessionStorage.setItem("videoPlayTimes", "1");
    } catch (err) {
        sessionStorage.setItem("videoPlayTimes", "1");
        video.setAttribute("autoplay", false);
        video.setAttribute("controls", true);
        video.onplay = () => {
            video.style.visibility = "visible";
            videoBackground.style.visibility = "visible";
            video.style.animation = "none";
            videoBackground.style.animation = "none";
        };
        video.onended = () => {
            video.style.visibility = "hidden";
            videoBackground.style.visibility = "hidden";
            video.style.animation = "loadingVideoAnimation 2s linear";
            videoBackground.style.animation = "loadingVideoAnimation 2s linear";
        };
    }
};

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



// start video at frame 0
var frameNumber = 0,
        
// lower numbers = faster playback
playbackConst = 1000, 

// select video element         
vid = document.getElementById('scrollingVideo'); 

// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
var frameNumber  = window.scrollY / playbackConst;
vid.currentTime  = frameNumber;
window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);