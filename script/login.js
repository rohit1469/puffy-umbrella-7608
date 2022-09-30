let data = JSON.parse(localStorage.getItem('deta')) || [];
console.log(data)

document.querySelector("form").addEventListener('submit',onSubmit) 


function onSubmit(event){
    event.preventDefault()
    let Remail= document.getElementById('rohit_email').value;
    let Rpass = document.getElementById('password').value;
    
    // console.log(Remail,Rpass)

    data.forEach(function(el){
        console.log(el)
        if(Remail === el.email && Rpass === el.cpassword){
            alert('Login Successfull')
            window.location.href = "index.html"
        } 
        else{
            alert('Wrong info')
        }
    })

}


