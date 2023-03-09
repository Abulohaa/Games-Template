// Start Our Skills
let progressSection: any = document.querySelector("#our-skills");
let progressBar = document.querySelectorAll(".the-progress span");
// let progressBarY = progressBar[0].getBoundingClientRect().top;
// console.log(progressBarY);

// window.addEventListener("scroll", function() {
//   if (window.scrollY == progressBarY) {
//     console.log("hi");
//   } else console.log("ss")
// });
window.onscroll = () => {
  if (window.scrollY >= progressSection?.offsetTop - 50) {
    progressBar.forEach((ele: any) => ele.style.width = ele.dataset.width)
  } else {
    progressBar.forEach((ele: any) => ele.style.width = 0);
  }
}

// End Our Skills