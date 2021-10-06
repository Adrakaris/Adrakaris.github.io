var jiapu = document.getElementById("jiapu");

/***
 * function to fill the tree
 * will also return the number of fractions total that required
 * for the family tree, recursive algorithm:
 * 
 * base case: no descendants. Thus, add just span and return 1.
 * Recursive case, has descendants. Apply to all descendants, then sum up their total fractions, return that fraction. Give descendants propiortional
 * fractions in grid
 */
function recursiveFill(base, data) {
    // must be done for every one
    
    let info = document.createElement("span");
    info.setAttribute("style", "display: inline-block; margin: 0 auto;");


    info.innerHTML += `<p style="writing-mode:vertical-lr;"><b>${data["ord"]}</b> ${data["name"]}</p>`;

    // console.log(info);
    // console.log(base);

    base.appendChild(info);

    // base case
    if (data["desc"].length === 0) {
        // base.setAttribute("style", `display: grid;`)
        return 1;
    }

    // recursive case
    let totalfraction = 0;
    let fractions = "";
    let newContainer = document.createElement("div");

    data["desc"].forEach(person => {
        // create a new "base"
        let newBase = document.createElement("div");

        let tf = recursiveFill(newBase, person);

        // tf is total fractions of that thing
        fractions += `${tf}fr `
        totalfraction += tf;

        // then append the new base
        newContainer.appendChild(newBase);
    });

    console.log(fractions)

    newContainer.setAttribute("style", `display: grid; grid-template-columns: ${fractions}; border-top: 1px solid var(--pink); border-left: 1px solid var(--pink); border-right: 1px solid var(--pink); margin-top: 10px; padding-top: 10px`)
    // base.setAttribute("style", `display: grid; grid-template-columns: ${totalfraction}fr;`);  
    base.setAttribute("style", `display: grid; grid-template-columns: 1fr; letter-spacing: 3px;`)
    base.appendChild(newContainer)
    return totalfraction;
}

recursiveFill(jiapu, people)

/*
<span style="display: inline-block; margin: 0 auto;">
                <p>长子</p>
                <p style="writing-mode:vertical-lr;">
                <b>长子</b> 小测试
            </p>
*/