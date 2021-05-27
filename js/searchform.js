// on load - we want to populate everything in order
// load pages

// console.log(pages)

var populateDiv = document.querySelector("#population");  // div to populate


function createDiv(block) {
    var div = document.createElement("div");

    var title = document.createElement("h2");
    var title_a = document.createElement("a");
    title_a.setAttribute("class", "text"); title_a.setAttribute("href", block["link"]);
    title_a.appendChild(document.createTextNode(block["title"]));
    title.appendChild(title_a);
    div.appendChild(title);

    var date = block["date"];
    console.log(block)
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
        console.log(block);
        populateDiv.appendChild(createDiv(block));
    });

    // for (var blin in array) {  // make divs and add all children
    //     console.log(blin)
    //     populateDiv.appendChild(createDiv(blin));
    // }
}


// after functions run on load

populatebox(pages);


// on activate 

function formActivate(form) {  // this should run when submit clicked on form

}
