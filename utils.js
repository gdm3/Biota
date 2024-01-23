//ask me before editing plz


function generateDefaults(){
  let nav = document.querySelector('.topbar-nav')
  nav.innerHTML += `  
    <img onclick="window.location.href='/'" class="logo-link" src="biotaLabel.png" >
      <ul>
        <li><a href="#intro-holder">About Us</a></li>
        <li><a href="#o_t">Our Founders</a></li>
        <li><a style="cursor: pointer;" onclick="window.location.href='/courses.html'">Lesson Recordings</a></li>
      </ul>
  `;
  console.log("Loaded top navigation")

  
  let head = document.querySelector('head')
  head.innerHTML += `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Discover Biology</title>
    <link href="style.css" rel="stylesheet">
    <meta name="google" content="notranslate">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Exo+2&display=swap" rel="stylesheet">
  `
  console.log("Loaded head and css");

  
};


