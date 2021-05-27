// on load - we want to populate everything in order
// load pages

// console.log(pages)

// get essential variables
var populateDiv = document.querySelector("#population");  // div to populate
var iText = document.querySelector("#se");  // gets the text box
var iButton = document.querySelector("#sb");  // gets the button

// define functions
function createDiv(block) {
    var div = document.createElement("div");

    var title = document.createElement("h2");
    var title_a = document.createElement("a");
    title_a.setAttribute("class", "text"); title_a.setAttribute("href", block["link"]);
    title_a.appendChild(document.createTextNode(block["title"]));
    title.appendChild(title_a);
    div.appendChild(title);

    var date = block["date"];
    var description = `<p><b><i>${date.getFullYear()}/${date.getMonth()}/${date.getDate()}</i></b>. ` + block["desc"];
    div.innerHTML += description;


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


// after functions run on load

populatebox(pages);


// listeners

function formActivate(form) {  // this should run when submit clicked on form
    console.log("search clicked");
}

iButton.addEventListener("click", function() {
    // do the search logic
    console.log(`click, ${document.querySelector("#se").value}`)
    var results = []
    pages.forEach((block) => {
        if (block["title"].toLowerCase().includes(document.querySelector("#se").value) || 
            block["desc"].toLowerCase().includes(document.querySelector("#se").value)) {
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
