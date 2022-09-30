import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById("head_navbar");

navbar_div.innerHTML = navbar();

import { footer } from "../components/footer.js";
let footer_div = document.getElementById("bottom_footer");
footer_div.innerHTML = footer();
