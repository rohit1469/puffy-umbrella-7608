document.querySelector('form').addEventListener('submit',myFun1)
let arr = []
function myFun1(){
    event.preventDefault()
    
    let email = document.querySelector("#email").value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector("#confirmPassword").value;
    if(password !== cpassword){
        alert("Password must be same")
        return false
    }
    else{
        alert("sign up successfull")
        window.location.href = "otp.html"
    }
    let d1 = new data(email,password,cpassword)
    // console.log(d1)
        arr.push(d1)
        localStorage.setItem("deta",JSON.stringify(arr))
        // console.log(arr)
}

function data(e,p,cp){
    this.email = e;
    this.password = p;
    this.cpassword = cp;
}