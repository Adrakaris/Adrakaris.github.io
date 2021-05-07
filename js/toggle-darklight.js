// file wrangling
var url = location.pathname.split("/").reverse();
var backtrack = 0;

if (window.location.host == "") {
    // locally hosted
    var i = 0;
    while (url[i] != "Website") {
        backtrack++;
        i++;
    }
    backtrack--;
} else {
    // assume remotely hosted
    backtrack = url.length - 2;
}

var toBack = "";
var i;
for (i = 0; i < backtrack; i++) {
    toBack = toBack + "../"
}

var dark = toBack + "style/dark.css"
var light = toBack + "style/style.css"

console.log(url)

// Select the button
const btn = document.querySelector(".dark-light");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    theme.href = dark;
} else {
    theme.href = light;
}

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == dark) {
    // ... then switch it to "light.css"
    theme.href = light;
    localStorage.setItem("theme", "light");
  // Otherwise...
  } else {
    // ... switch it to "dark.css"
    theme.href = dark;
    localStorage.setItem("theme", "dark");
  }
});