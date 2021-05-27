// themes

var light = {
    "--bg-col": "#ffffff",
    "--bg-active": "#f1f2e9",
    "--txt-col": "#000000",
    "--band-col": "#a17667",
    "--band-txt": "#f1f2e9",
    "--pink": "#a17667",
    "--blue": "#1f7282",
    "--green": "#3a6342",
    "--overlay": "#00000030",
    "--tai-home": "url(\"images/taichuan_smaller_size.jpg\")",
    "--tai-smol": "url(\"images/taichuan_smaller_size_squish.jpg\")",
    "--filter": "brightness(.8) contrast(1.2)",
    "--img-bg": "#0000"
}

var dark = {  
    "--bg-col": "#2e2e2e",
    "--bg-active": "#333333",
    "--txt-col": "#eaeaea",
    "--band-col": "#6e5046",
    "--band-txt": "#f1f2e9",
    "--pink": "#c7917f",
    "--blue": "#1f7282",
    "--green": "#3a6342",
    "--overlay": "#00000030",
    "--tai-home": "url(\"images/taichuan_dark.jpg\")",
    "--tai-smol": "url(\"images/taichuan_dark_squish.jpg\")",
    "--filter": "brightness(.8) contrast(1.2)",
    "--img-bg": "#fff"
}


// code


function setTheme(thema) {
    for (const [k, v] of Object.entries(thema)) {
        // console.log(k, v);
        style.setProperty(k, v);
    }
}


var style = document.documentElement.style
// var cssRoot = styleSheet.querySelector(":root");  // document.querySelector("#theme-link").querySelector(":root");
const toggle = document.querySelector(".dark-light");
const currentTheme = localStorage.getItem("theme");

var indicator;

if (currentTheme == "dark") {  // seems redudnant but in case localStorage has none
    indicator = "dark"
    setTheme(dark);
} else {
    indicator = "light"
    setTheme(light);
}



toggle.addEventListener("click", function() {
    // we need to check if it's dark or light
    if (indicator == "dark") {
        indicator = "light";
        localStorage.setItem("theme", "light");
        setTheme(light);
    } else {
        indicator = "dark";
        localStorage.setItem("theme", "dark");
        setTheme(dark);
    }
});


