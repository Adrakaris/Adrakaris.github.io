// stored details

fc = ["© 2020-2024 Yijun Hu, all rights reserved.", "Designed by Yijun Hu"]

// code

var footer = document.querySelector("#fc2");

var left = document.createElement("div");
left.innerHTML = `<p class="small">
                            ${fc[0]}
                        </p>`;

var right = document.createElement("div");
right.innerHTML = `<p class="small rj">
                            ${fc[1]}
                        </p>`;

footer.appendChild(left);
footer.appendChild(right);