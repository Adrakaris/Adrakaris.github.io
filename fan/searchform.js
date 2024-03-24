// BLOG-FAN SEARCH CODE
// We need to MERGE custom lore entries with the main ones.

// console.log(pages)

// get essential variables
var populateDiv = document.querySelector("#population");  // div to populate
var iText = document.querySelector("#se");  // gets the text box
var iButton = document.querySelector("#sb");  // gets the button

var allButtom = document.querySelector("#tall");
// var csButton = document.querySelector("#tcs");
// var origamiButton = document.querySelector("#torigami");
var miscButton = document.querySelector("#tmisc");
var loreButton = document.querySelector("#tlore");
var histButton = document.querySelector("#thistory");

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
    title_a.setAttribute("class", "text "); title_a.setAttribute("href", block["link"]);
    title_a.setAttribute("style", "color: var(--green)")
    title_a.appendChild(document.createTextNode(block["title"]));
    title.appendChild(title_a);
    div.appendChild(title);

    

    var date = block["date"];
    var description = `<p><b><i>${date}</i></b>. ` + block["desc"];
    div.innerHTML += description;
    var tags = "#" + block["tags"].join(" #")
    var tagsp = document.createElement("p")
    tagsp.setAttribute("style", "color: var(--green)")
    tagsp.innerText = tags
    div.appendChild(tagsp)
    div.setAttribute("style", "overflow: hidden; border-bottom: 1px solid var(--pink); margin-top: 5px; padding-bottom: 5px;")

    // set a styling on a
    var divElems = div.getElementsByTagName("a");
    for (let i = 0; i < divElems.length; i++) {
        divElems[i].setAttribute("class", "text black")
    }

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
    mergedPages.forEach((block) => {
        if (block["tags"].includes(tag)) {
            results.push(block)
        }
    });
    return results;
}

/*
function merge(a, b) {
    // taken shamelessly from online somewhere
    const c = []

    while (a.length && b.length) {
        c.push(a[0]["date"] < b[0]["date"] ? b.shift() : a.shift())
    }

    //if we still have values, let's add them at the end of `c`
    while (a.length) {
        c.push(a.shift())
    }

    while (b.length) {
        c.push(b.shift())
    }

    return c
}


// after functions run on load

var mergedPages = merge(pages, fanPages)
*/

var mergedPages = fanPages

mergedPages.forEach((block) => {
    block["link"] = "../" + block["link"];
    if (block["picture"] != "") {
        block["picture"] = "../" + block["picture"];
    }
})

populatebox(mergedPages);


// listeners

iButton.addEventListener("click", function() {
    // do the search logic
    // console.log(`click, ${document.querySelector("#se").value}`)
    var results = []
    mergedPages.forEach((block) => {
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

allButtom.addEventListener("click", function() {populatebox(mergedPages)})

// csButton.addEventListener("click", function() {
//     populatebox(getResults("cs"));
// })

// origamiButton.addEventListener("click", function() {
//     populatebox(getResults("origami"));
// })

miscButton.addEventListener("click", function() {
    populatebox(getResults("misc"));
})

loreButton.addEventListener("click", function() {
    populatebox(getResults("legends"));
})
histButton.addEventListener("click", function() {
    populatebox(getResults("records"));
})
