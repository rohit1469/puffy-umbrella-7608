document.querySelector("#p5").addEventListener('click',myOtp)

function myOtp(){
    // console.log("asdh")
    let otp = "0123456789"
    let res = ""

    for(let i=0;i<4;i++){
        res += otp[Math.floor(Math.random()*10)]
    }
    // console.log(res)
    alert(res)

    localStorage.setItem('otp',res)
}



document.querySelector("#btn2").addEventListener("click",myFun11)

function myFun11(){
    let otp = localStorage.getItem("otp")
    // console.log(otp)
let otp_val = document.querySelector("#otpdata").value;

if(otp_val === otp){
    alert('Redirect to Login Page')
    window.location.href = "login.html"
}
else{
    alert("your otp is incorrect")
    return false

}

    // console.log("kshdfik")
}