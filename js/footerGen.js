// stored details

fc = ["© 2020-2021 Yijun Hu, all rights reserved.", "Designed by Yijun Hu"]

// code

var footer = document.querySelector("#fc2");

var left = document.createElement("div");
left.innerHTML = `<div>
                        <p class="small">
                            ${fc[0]}
                        </p>
                    </div>`;

var right = document.createElement("div");
right.innerHTML = `<div>
                        <p class="small rj">
                            ${fc[1]}
                        </p>
                    </div>`;

footer.appendChild(left);
footer.appendChild(right);