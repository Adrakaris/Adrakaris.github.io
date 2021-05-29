// on load - we want to populate everything in order
// load pages

// console.log(pages)

// get essential variables
var populateDiv = document.querySelector("#population");  // div to populate
var iText = document.querySelector("#se");  // gets the text box
var iButton = document.querySelector("#sb");  // gets the button

var allButtom = document.querySelector("#tall");
var csButton = document.querySelector("#tcs");
var origamiButton = document.querySelector("#torigami");
var miscButton = document.querySelector("#tmisc");

// define functions
function createDiv(block) {
    var div = document.createElement("div");

    if (block["picture"] != "") {
        var picture = document.createElement("img");
        picture.setAttribute("src", block["picture"]);
        picture.setAttribute("style", "max-width: 160px; width: 100%; float:right;")
        div.appendChild(picture)
        // to fix formatting
    }

    var title = document.createElement("h2");
    var title_a = document.createElement("a");
    title_a.setAttribute("class", "text"); title_a.setAttribute("href", block["link"]);
    title_a.appendChild(document.createTextNode(block["title"]));
    title.appendChild(title_a);
    div.appendChild(title);

    

    var date = block["date"];
    var description = `<p><b><i>${date.getFullYear()}/${date.getMonth()}/${date.getDate()}</i></b>. ` + block["desc"];
    div.innerHTML += description;
    div.setAttribute("style", "overflow: hidden; border-bottom: 1px solid var(--pink); margin-top: 5px; padding-bottom: 5px;")

    return div;
}


function populatebox(array) {
    // remove all children of populate
    while (populateDiv.firstChild) {
        populateDiv.removeChild(populateDiv.lastChild);
    }

    array.forEach((block) => {
        populateDiv.appendChild(createDiv(block));
    });
}


function getResults(tag) {
    var results = []
    pages.forEach((block) => {
        if (block["tags"].includes(tag)) {
            results.push(block)
        }
    });
    return results;
}


// after functions run on load

populatebox(pages);


// listeners

iButton.addEventListener("click", function() {
    // do the search logic
    // console.log(`click, ${document.querySelector("#se").value}`)
    var results = []
    pages.forEach((block) => {
        if (block["title"].toLowerCase().includes(document.querySelector("#se").value.toLowerCase()) || 
            block["desc"].toLowerCase().includes(document.querySelector("#se").value.toLowerCase())) {
            results.push(block)
        }
    })

    populatebox(results);
});

iText.addEventListener("keyup", function(event) {
    // 13 is enter
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("#sb").click();
    }
})

allButtom.addEventListener("click", function() {populatebox(pages)})

csButton.addEventListener("click", function() {
    populatebox(getResults("cs"));
})

origamiButton.addEventListener("click", function() {
    populatebox(getResults("origami"));
})

miscButton.addEventListener("click", function() {
    populatebox(getResults("misc"));
})
