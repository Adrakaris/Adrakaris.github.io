// linkrepo: an array of categories, each with a name and a list of links, which are themselvs a list of name and link

const repo = [
    {
        "name": "DnD Related",
        "links": [
            ["Main DnD page", "./dnd-main.html"],
            ["Mechanics Ref", "./dnd-default-ref.html"]
        ]
    },
    {
        "name": "Lore Related",
        "links": [
            ["Main lore page", "./lore-main.html"],
            ["Saga", "./saga.html"],
            ["Stories and Texts", "./stories.html"],
            ["Notes on the Twilight", "./twilight.html"],
            ["Map (East Aseron)", "./assets/ancient-empire-liao.jpg"]
            
        ]
    }
]

let sidebar = document.getElementById("sidebar");

repo.forEach((category) => {
    let catBtn = document.createElement("button");
    catBtn.classList.add("collapsible", "active");
    catBtn.innerHTML = category.name;

    let catLinks = document.createElement("div");
    catLinks.classList.add("ccontent");
    catLinks.setAttribute("style", "display: block");

    category.links.forEach((link) => {
        let a = document.createElement("a");
        let linkText = document.createTextNode(link[0]);
        a.appendChild(linkText);
        a.href = link[1];

        catLinks.appendChild(a);
    })

    sidebar.appendChild(catBtn);
    sidebar.appendChild(catLinks);
})
