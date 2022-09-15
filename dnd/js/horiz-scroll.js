// let items = document.getElementsByClassName("juan-style vertical");

// console.log(items);

// items.array.forEach(item => {
//     window.addEventListener("wheel", function (e) {
//         if (e.deltaY > 0) {
//             item.scrollLeft -= 100;
//         } else {
//             item.scrollLeft += 100;
//         }
//     })
// });


function setBoxHeightRelToHeader(box) {
        
    let vh = window.innerHeight;

    let item2s = document.getElementsByTagName("header");
    let item2 = item2s.item(0)
    let headerHeight = item2.clientHeight;
    let remaining = vh - headerHeight - 70;  // 10 for bottom padding


    // console.log(innerHeight)
    // console.log(item2);
    // console.log(headerHeight);

    // set height of item so it scales properly
    item.style.height = `${remaining}px`;
    
}

let item = document.getElementById("verttext");
// console.log(item)
window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        item.scrollLeft -= 100;
    } else {
        item.scrollLeft += 100;
    }
})

window.addEventListener("resize", function (event) {
    setBoxHeightRelToHeader(item);
})


setBoxHeightRelToHeader(item);

