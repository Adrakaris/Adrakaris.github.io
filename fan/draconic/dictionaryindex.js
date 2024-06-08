const ENG = "#783F04";
const REKH = "#20124D";
const KHAR = "#4C1130";
const ANCIENT = "#274E13";
const CLASS = "#7F6000";

function sortDictionary(dict) {
    dict = dict.split("\r\n");
    dict = dict.map(ln => ln.split("\t"));
    let titles = dict.slice(0, 1);
    let everythingelse = dict.slice(1);
    everythingelse.sort((a,b) => a[0].localeCompare(b[0]));
    return titles.concat(everythingelse);
}


function addRow(table, array, rowType) {
    // filling data
    let row = document.createElement("tr");
    array.forEach(e => {
        let th = document.createElement(rowType);
        th.innerText = e;
        row.appendChild(th);
    });

    // colouring
    row.children.item(0).style.color = ENG;
    row.children.item(1).style.color = REKH;
    row.children.item(1).style.fontStyle = "italic";
    row.children.item(2).style.color = KHAR;
    row.children.item(2).style.fontStyle = "italic";
    row.children.item(3).style.color = ANCIENT;
    row.children.item(3).style.fontStyle = "italic";
    row.children.item(4).style.color = CLASS;
    table.appendChild(row)
}


function fillTable(table, dict) {
    /**@type {String[]} */
    let titles = dict.slice(0, 1)[0];
    /**@type {String[][]} */
    let data = dict.slice(1);  

    // console.log(titles)

    // filling title
    let row = document.createElement("tr");
    titles.forEach(t => {
        let th = document.createElement("th");
        let h4 = document.createElement("h3");
        h4.innerText = t;
        h4.style.paddingBottom = "0.6em";
        h4.style.paddingTop = "0em";
        th.appendChild(h4);
        row.appendChild(th);
    })
    // colouring

    row.children.item(0).style.color = ENG;
    row.children.item(1).style.color = REKH;
    row.children.item(2).style.color = KHAR;
    row.children.item(3).style.color = ANCIENT;
    row.children.item(4).style.color = CLASS;

    table.appendChild(row)

    console.log(data)
    data.forEach(row => {
        if (row.length < 5) return;
        if (row.length == 5) {
            row.push("")
        }
        // console.log(row)
        addRow(table, row, "td")
    })

}


function resetTable(table) {
    table.innerHTML = "";
}


function refilterTable(table, dictArray, keyword) {
    keyword = keyword.trim();
    console.log("keyword " + keyword);
    let newArray;
    if (keyword !== "") {
        let keywords = keyword.split(" ")

        let title = dictArray.slice(0,1);
        let result = dictArray.slice(1).filter(row => {
            // console.log(row);
            return keywords.every(kw => row.some(e => e.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(kw)));
        });
        newArray = title.concat(result);
    } else {
        newArray = dictArray;
    }
    
    resetTable(table);
    fillTable(table, newArray);
}


function main(req) {
    var table = document.getElementById("dictionary");

    const DICTIONARY = sortDictionary(req.responseText);
    fillTable(table, DICTIONARY);

    // ================================================================
    // SEARCH FUNCTIONALITY

    var iText = document.querySelector("#se");  // gets the text box
    var iButton = document.querySelector("#sb");  // gets the button

    iButton.addEventListener("click", function() {
        // do the search logic
        // console.log(`click, ${document.querySelector("#se").value}`)
        refilterTable(table, DICTIONARY, iText.value.toLowerCase());
    });
    
    iText.addEventListener("keyup", function(event) {
        // 13 is enter
        if (event.keyCode === 13) {
            event.preventDefault();
            iButton.click();
        }
    })
}


window.onload = () => {
    // file reader and get html elem
    

    let req = new XMLHttpRequest();
    req.open("GET","./dict.tsv");
    req.onreadystatechange = function(){
        if(req.readyState === req.DONE && req.status === 200){
            main(req);
        }
    }
    req.send();
}



