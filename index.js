let navDisplay = false;

function rotateNav() {
  if (navDisplay) {
    document.documentElement.style.setProperty("--rotate-angle", "-60deg");
    document.documentElement.style.setProperty("--background-color", "black");
  } else {
    document.documentElement.style.setProperty("--rotate-angle", "100deg");
    document.documentElement.style.setProperty("--background-color", "blue");
  }

  navDisplay = !navDisplay;

  console.log(document.documentElement.style.setProperty);
}
