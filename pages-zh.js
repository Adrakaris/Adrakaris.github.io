
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
        "date": new Date(Date.UTC(2023,05,01)),
        "link": "blog-cs/cs352",
        "title": "Notes on CS352",
        "desc": "Notes on CS352: Project Management</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2023,04,24)),
        "link": "blog-cs/cs331",
        "title": "Notes on CS331",
        "desc": "Notes on CS331: Neural</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2023, 01, 25)),
        "link": "blog-cs/cs313",
        "title": "Notes on CS313",
        "desc": "Notes on CS313: Robotics</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2022,11,10)),
        "link": "blog-cs/cs342",
        "title": "Notes on CS342",
        "desc": "Notes on CS342: Machine Learning. 我觉得这个挺重要的。</p><p>此页很长，加载需要一会。</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2022,05,05)),
        "link": "blog-cs/cs261/",
        "title": "Notes on CS261",
        "desc": "CS259：软件工程的笔记 (wah)</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2022,05,02)),
        "link": "blog-cs/cs259/",
        "title": "Notes on CS259",
        "desc": "CS259：正式语言的笔记</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2022,02,07)),
        "link": "blog-cs/cs262/",
        "title": "CS262的记录",
        "desc": "CS262：逻辑与求正。要看小抄页，点<a href='blog-cs/cs262/cheat.html'>这里</a>。</p>",
        "picture": "",
        "tags": ["cs"]
    },
    // {
    //     "date": new Date(Date.UTC(2021, 10, 14)),
    //     "link": "blog-cs/cs241/",
    //     "title": "CS241的记录",
    //     "desc": "CS241：网络与操作系统的记录。这些是学完而写，会慢慢添加。无翻译。</p>",
    //     "picture": "",
    //     "tags": ["cs"]
    // },
    {
        "date": new Date(Date.UTC(2021, 10, 14)),
        "link": "blog-cs/cs258/",
        "title": "CS258的记录",
        "desc": "CS258：数据库系统的记录。无翻译。</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 10, 10)),
        "link": "blog-cs/cs255/short.html",
        "title": "CS255的记录",
        "desc": "CS255：人工智能的记录。请注意这页非常长。</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 10, 10)),
        "link": "blog-cs/cs260/",
        "title": "CS260的记录",
        "desc": "CS260：算法的记录。无翻译。</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 7, 10)),
        "link": "blog-misc/guqin/index-zh.html",
        "title": "古琴减字谱",
        "desc": "古琴有一种非常特殊的琴谱——减字谱。正常是手写的，但是我为之做了个字体！</p>",
        "picture": "",
        "tags": ["misc"]
    },
    {
        "date": new Date(Date.UTC(2021, 7, 10)),
        "link": "blog-cs/minty/index-zh.html",
        "title": "新的电脑体系",
        "desc": "最近我刚安装了一个新的SSD，并安装了Linux。这篇文章就是说我为何开始在Linux上编程。</p>",
        "picture": "",
        "tags": ["tech"]
    },
    {
        "date": new Date(Date.UTC(2021, 5, 29)),
        "link": "blog-cs/cs141/",
        "title": "CS141的记录",
        "desc": "很短的CS141记录，主要观看难一点的题目。无翻译！</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 5, 28)),
        "link": "blog-misc/podcast/index-zh.html",
        "title": "我录了一个Podcast!",
        "desc": "我上了我朋友Leo的podcast, YASP. 你可以在这里听：<a href=\"https://yasp.show/episodes\" class=\"text\">here</a>, 或（火墙禁止）<a href=\"https://podcasts.google.com/feed/aHR0cHM6Ly95YXNwLnNob3cvYXRvbS54bWw\" class=\"text\">Google Podcasts</a>、<a href=\"https://open.spotify.com/show/3ZkM1l13q6VPFngcOk5M8A?si=gfiDqUvfQ6GEVA3cJTk86Q&nd=1\" class=\"text\">Spotify</a>.</p>",
        "picture": "blog-misc/podcast/yasp.svg",
        "tags": ["misc"]
    },
    {
        "date": new Date(Date.UTC(2021, 5, 15)),
        "link": "blog-cs/cs131/",
        "title": "CS131的记录",
        "desc": "完整的CS131记录。 <i>有很多MathJax，稍微等一等让它下载！</i>无翻译！</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 5, 11)),
        "link": "blog-cs/cs126/",
        "title": "CS126的记录",
        "desc": "CS126一些少的记录。这不是完整的，就一些我不怎么熟悉的题目。无翻译！</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 4, 19)),
        "link": "blog-cs/cs132/",
        "title": "CS132的记录",
        "desc": "\nCS132完整的记录。无翻译！\n</p>\n\n<p style=\"color: var(--bg-col)\">\nAmatt.\n</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 4, 7)),
        "link": "blog-misc/wyvern/index-zh.html",
        "title": "螭龙 - 指导和图纸。",
        "desc": "我设计的螭（chí）龙的指导（视频），2021年3月。视频在YouTube上，火墙禁止。</p>",
        "picture": "blog-misc/wyvern/wyvern.jpg",
        "tags": ["origami"]
    },
    {
        "date": new Date(Date.UTC(2021, 2, 20)),
        "link": "blog-cs/cs130/",
        "title": "CS130的记录",
        "desc": "CS130完整的记录。有很多内容。注：稍微等一等，很多MathJax。无翻译！</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {  // 1188
        "date": new Date(Date.UTC(2021, 2, 8)),
        "link": "blog-cs/cs118/",
        "title": "CS118的记录",
        "desc": "<i>CS118: 编程</i>完整的记录。这认为读者已经知道一些Java了。无翻译！</p>",
        "picture": "",
        "tags": ["cs"]
    }
    
];
