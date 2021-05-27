
// storing all pages

// note: make sure all fields are present. 
// ALWAYS put </p> at the end of the description, but NOT <p> at start

/*
{
        "date": new Date(Date.UTC()),
        "link": "",
        "title": "",
        "desc": "</p>",
        "picture": "",
        "tags": []
    },
*/

var pages = [
    {
        "date": new Date(Date.UTC(2021, 5, 11)),
        "link": "blog-cs/cs126/index.htm",
        "title": "",
        "desc": "</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 4, 19)),
        "link": "blog-cs/cs132/index.html",
        "title": "Notes on CS132",
        "desc": "\nNotes on all topics in CS132.\n</p>\n\n<p style=\"color: var(--bg-col)\">\nAmatt.\n</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 4, 7)),
        "link": "blog-misc/wyvern/index.html",
        "title": "Origami Wyvern - Tutorial and CP",
        "desc": "Tutorial for a wyvern designed by me, March 2021.</p>",
        "picture": "blog-misc/wyvern/wyvern.jpg",
        "tags": ["origami"]
    },
    {
        "date": new Date(Date.UTC(2021, 2, 20)),
        "link": "blog-cs/cs130/index.html",
        "title": "Notes on CS130",
        "desc": "Notes on all topics in CS130. This is a dense one. Includes all excersises and proofs I noted down from Dimitry's videos. Note: This may take a while to load up. There is a LOT of MathJax here.</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {  // 1188
        "date": new Date(Date.UTC(2021, 2, 8)),
        "link": "blog-cs/cs118/index.html",
        "title": "Notes on CS118",
        "desc": "Notes on the finer details of <i>CS118: Programming for Computer Scientists.</i> This assumes a prior basic knowledge of Java and touches on some select specifics.</p>",
        "picture": "",
        "tags": ["cs"]
    }
    
];
