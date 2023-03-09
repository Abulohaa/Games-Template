// Start Our Skills
var progressSection = document.querySelector("#our-skills");
var progressBar = document.querySelectorAll(".the-progress span");
// let progressBarY = progressBar[0].getBoundingClientRect().top;
// console.log(progressBarY);
// window.addEventListener("scroll", function() {
//   if (window.scrollY == progressBarY) {
//     console.log("hi");
//   } else console.log("ss")
// });
window.onscroll = function () {
    if (window.scrollY >= (progressSection === null || progressSection === void 0 ? void 0 : progressSection.offsetTop) - 50) {
        progressBar.forEach(function (ele) { return ele.style.width = ele.dataset.width; });
    }
    else {
        progressBar.forEach(function (ele) { return ele.style.width = 0; });
    }
};
// End Our Skills
