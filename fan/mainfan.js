// populate the mainpage with the most three recent blog items
var populateDiv = document.querySelector("#fillblog")

function createDiv(block) {
    var div = document.createElement("div");

    

    var title = document.createElement("h2");
    var title_a = document.createElement("a");
    title_a.setAttribute("class", "text"); title_a.setAttribute("href", block["link"]);
    title_a.setAttribute("style", "color: var(--green)")
    title_a.appendChild(document.createTextNode(block["title"]));
    title.appendChild(title_a);
    div.appendChild(title);

    /*if (block["picture"] != "") {
        var picture = document.createElement("img");
        picture.setAttribute("src", block["picture"]);
        picture.setAttribute("style", "max-width: 40px; width: 100%; float:none;")
        div.appendChild(picture)
        // to fix formatting
    }   */
    

    var date = block["date"];
    var description = `<p><b><i>${date}</i></b>. ` + block["desc"];
    div.innerHTML += description;
    div.setAttribute("style", "overflow: hidden; margin-top: 5px; padding-bottom: 5px;")

    return div;
}

function populatebox(array) {
    array.forEach((block) => {
        populateDiv.appendChild(createDiv(block));
    });
}

fanPages.forEach((block) => {
    block["link"] = "../" + block["link"];
})
populatebox(fanPages.slice(0, 3))