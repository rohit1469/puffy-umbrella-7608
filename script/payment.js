import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById("head_navbar");

navbar_div.innerHTML = navbar();

import { footer } from "../components/footer.js";
let footer_div = document.getElementById("bottom_footer");
footer_div.innerHTML = footer();

document.getElementById("rightpart").addEventListener("submit",()=>{
    event.preventDefault();
    let number=document.getElementById("num").value;
    let address=document.getElementById("add").value;
    let name=document.getElementById("name").value;
    let address1=document.getElementById("add1").value;
    let state=document.getElementById("state").value;
    let country=document.getElementById("country").value;
    let city=document.getElementById("city").value;
    let pincode=document.getElementById("pincode").value;
    if(number==""||address==""||name==""||address1==""||state==""||country==""||city==""||pincode==""){
        alert("Fill all the details")

    }else{
        document.getElementById("num").value=null;
        document.getElementById("add").value=null;
        document.getElementById("name").value=null;
        document.getElementById("add1").value=null;
        document.getElementById("state").value=null;
        document.getElementById("country").value=null;
        document.getElementById("city").value=null;
        document.getElementById("pincode").value=null;

        setTimeout(()=>{
            alert("Payment is progress!")
        },2000)
        setTimeout(()=>{
            alert("Payment is Successfull!")
        },5000)
        setTimeout(()=>{
            alert("Order is placed!")
        },8000)
        setTimeout(()=>{
            alert("We'll send a confirmation when your items ship!")
        },11000)
        setTimeout(()=>{
            alert("Thank You for shopping with Meanbuy");
        },13000)
        setTimeout(()=>{
            alert("Continue shopping with Meanbuy");
            window.location.href="index.html"
        },16000)

    }
})