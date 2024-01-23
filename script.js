function populateVideo(video, func){
  let videoElement = document.getElementById("yt-video")
  if(func == "load" && video == "bio-1"){
    // get old sidebar highlight then remove it
    let sidebar_old = document.getElementById(localStorage.state)
    sidebar_old.style.backgroundColor = "#ffffff"
    // set new sidebar highlight state
    localStorage.state = "sidebar-button-video-1"
    // set new sidebar color
    let sidebar_current = document.getElementById("sidebar-button-video-1")
    sidebar_current.style.backgroundColor = "#e3fff1"
    // set the title of the sidebar
    document.getElementById("course-name").innerText = "Introduction To Biology"
  }
  if(func == "load-q" && video == "bio-1"){
    // remove old sidebar highlight
    let sidebar_old = document.getElementById(localStorage.state)
    sidebar_old.style.backgroundColor = "#ffffff"
    localStorage.state = "sidebar-button-q-1"
    // set new one
    let sidebar_current = document.getElementById("sidebar-button-q-1")
    sidebar_current.style.backgroundColor = "#e3fff1"
    // lay out questions in array
    let questions = [
      ["Question 1", "Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    ]
    // loop through questions then add them to page 
    questions.forEach((question) => {
      let page = document.getElementById("")
    })
  }
  var logo = document.getElementById("logo");
  var logoRect = logo.getBoundingClientRect();
  var logoAnimated = false;

  function checkScroll() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (!logoAnimated && scrollPosition + window.innerHeight > logoRect.top) {
     
      logo.classList.add("active");
      logoAnimated = true;
    }
  }

  // Check scroll position on scroll
  window.addEventListener("scroll", checkScroll);

  // Initial check in case the element is already in view on page load
  checkScroll();
}


