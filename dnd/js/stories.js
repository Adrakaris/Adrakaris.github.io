/*
    {
        "ti": "",
        "xu": "",
        "lian": ""
    }
*/

const storyRepo = [
    {
        "ti": "唐山君",
        "xu": "人间，无边大洋中，在某处；天中生星琉璃闪，万里陆地皆无现，海中鱼虫万古一，突兀圣山自海崛。",
        "lian": "./stories/tangshan.html"
    }
]


let stories = document.getElementById("juanku");

storyRepo.forEach((story) => {
    let page = document.createElement("div");
    let title = document.createElement("h2");
    let par = document.createElement("p");
    let link = document.createElement("a");

    title.textContent = story.ti;
    par.textContent = story.xu.slice(0,40) + "……";
    link.textContent = "更多 More";
    link.href = story.lian;
    
    page.appendChild(title);
    page.appendChild(par);
    page.appendChild(link);

    stories.appendChild(page);
})
 