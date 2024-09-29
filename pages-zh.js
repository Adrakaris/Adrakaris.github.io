
// storing all pages

// note: make sure all fields are present. 
// ALWAYS put </p> at the end of the description, but NOT <p> at start

class _date {
    constructor(year, month, day) {
        this.year = String(year); 
        this.month = String(month).padStart(2, "0"); 
        this.day = String(day).padStart(2, "0");
    }

    getFullYear() {return this.year;}
    getMonth() {return this.month;}
    getDate() {return this.day;}
}

/*
    {
        "date": new _date(),
        "link": "",
        "title": "",
        "desc": "</p>",
        "picture": "",
        "tags": []
    },
*/

var pages = [
    {
        "date": new _date(2024, 9, 29),
        "link": "blog-misc/graduating",
        "title": "我毕业了（英文）",
        "desc": "</p>",
        "picture": "",
        "tags": ["misc"]
    },
    {
        "date": new _date(2024,5,5),
        "link": "blog-cs/cs413",
        "title": "413 | 图影学注",
        "desc": "图片视频分析</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2024,4,30),
        "link": "blog-cs/cs409",
        "title": "409 | 博弈概要",
        "desc": "算法博弈论</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2024,1,31),
        "link": "blog-cs/cs416",
        "title": "416 | 优化法注",
        "desc": "优化方法</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2024,1,15),
        "link": "blog-cs/cs419",
        "title": "419 | 量子计算 ",
        "desc": "量子计算机</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2023,11,12),
        "link": "blog-cs/cs412",
        "title": "412 | 正形研发 + B文",
        "desc": "正形系统研发及 B 语言</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2023,5,24),
        "link": "blog-cs/cs349",
        "title": "349 | 法算真经",
        "desc": "编程语言之原则</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2023,5,1),
        "link": "blog-cs/cs352",
        "title": "352 | 管理简要",
        "desc": "项目管理（非 WBS 课程）</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2023,4,24),
        "link": "blog-cs/cs331",
        "title": "331 | 神经网述",
        "desc": "神经网络</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2023, 1, 25),
        "link": "blog-cs/cs313",
        "title": "313 | 机器概言",
        "desc": "机器人</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2022,11,10),
        "link": "blog-cs/cs342",
        "title": "342 | 机学本技",
        "desc": "机器学习</p><p>此页很长，加载需要一会。</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2022,5,5),
        "link": "blog-cs/cs261/",
        "title": "261 | 软件工程",
        "desc": "CS259：软件工程的笔记 (wah)</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2022,5,2),
        "link": "blog-cs/cs259/",
        "title": "259 | 正式语言",
        "desc": "CS259：正式语言的笔记</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2022,2,7),
        "link": "blog-cs/cs262/",
        "title": "262 | 逻辑正义",
        "desc": "CS262：逻辑与求正。要看小抄页，点<a href='blog-cs/cs262/cheat.html'>这里</a>。</p>",
        "picture": "",
        "tags": ["cs"]
    },
    // {
    //     "date": new _date(2021, 10, 14),
    //     "link": "blog-cs/cs241/",
    //     "title": "CS241的记录",
    //     "desc": "CS241：网络与操作系统的记录。这些是学完而写，会慢慢添加。无翻译。</p>",
    //     "picture": "",
    //     "tags": ["cs"]
    // },
    {
        "date": new _date(2021, 10, 14),
        "link": "blog-cs/cs258/",
        "title": "258 | 数据储法",
        "desc": "CS258：数据库系统的记录。无翻译。</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2021, 10, 10),
        "link": "blog-cs/cs255/short.html",
        "title": "255 | 人工智能",
        "desc": "CS255：人工智能的记录。请注意这页非常长。</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2021, 10, 10),
        "link": "blog-cs/cs260/",
        "title": "260 | 算法概要",
        "desc": "CS260：算法的记录。无翻译。</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2021, 7, 10),
        "link": "blog-misc/guqin/index-zh.html",
        "title": "古琴减字谱",
        "desc": "古琴有一种非常特殊的琴谱——减字谱。电脑上难以输入，故我作一字体现之。</p>",
        "picture": "",
        "tags": ["misc"]
    },
    // {
    //     "date": new _date(2021, 7, 10),
    //     "link": "blog-cs/minty/index-zh.html",
    //     "title": "新的电脑体系",
    //     "desc": "最近我刚安装了一个新的SSD，并安装了Linux。这篇文章就是说我为何开始在Linux上编程。</p>",
    //     "picture": "",
    //     "tags": ["tech"]
    // },
    {
        "date": new _date(2021, 5, 29),
        "link": "blog-cs/cs141/",
        "title": "141 | 函数算言（不整）",
        "desc": "很短的CS141记录，主要观看难一点的题目。无翻译！</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2021, 5, 28),
        "link": "blog-misc/podcast/index-zh.html",
        "title": "我录了一个Podcast!",
        "desc": "我曾参加我朋友Leo的播客，叫YASP，可以在这里听：<a href=\"https://yasp.show/episodes\" class=\"text\">here</a>, 或<a href=\"https://podcasts.google.com/feed/aHR0cHM6Ly95YXNwLnNob3cvYXRvbS54bWw\" class=\"text\">Google Podcasts</a>、<a href=\"https://open.spotify.com/show/3ZkM1l13q6VPFngcOk5M8A?si=gfiDqUvfQ6GEVA3cJTk86Q&nd=1\" class=\"text\">Spotify</a>.</p>",
        "picture": "blog-misc/podcast/yasp.svg",
        "tags": ["misc"]
    },
    {
        "date": new _date(2021, 5, 15),
        "link": "blog-cs/cs131/",
        "title": "131 | 数学之二",
        "desc": "完整的CS131记录。 <i>有很多MathJax，稍微等一等让它下载！</i>无翻译！</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2021, 5, 11),
        "link": "blog-cs/cs126/",
        "title": "126 | 数据结构（不整）",
        "desc": "CS126一些少的记录。这不是完整的，就一些我不怎么熟悉的题目。无翻译！</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2021, 4, 19),
        "link": "blog-cs/cs132/",
        "title": "132 | 电脑机构",
        "desc": "\nCS132完整的记录。无翻译！\n</p>\n\n<p style=\"color: var(--bg-col)\">\nAmatt.\n</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new _date(2021, 4, 7),
        "link": "blog-misc/wyvern/index-zh.html",
        "title": "螭龙 - 指导和图纸。",
        "desc": "我设计的螭（chí）龙的指导（视频），2021年3月。</p>",
        "picture": "blog-misc/wyvern/wyvern.jpg",
        "tags": ["origami"]
    },
    {
        "date": new _date(2021, 2, 20),
        "link": "blog-cs/cs130/",
        "title": "130 | 数学之一",
        "desc": "CS130完整的记录。有很多内容。注：稍微等一等，很多MathJax。无翻译！</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {  // 1188
        "date": new _date(2021, 2, 8),
        "link": "blog-cs/cs118/",
        "title": "118 | 编程草记（不整）",
        "desc": "<i>CS118: 编程</i>完整的记录。这认为读者已经知道一些Java了。无翻译！</p>",
        "picture": "",
        "tags": ["cs"]
    }
    
];
