function nextPage() {

    var users=JSON.parse(localStorage.getItem('users'))||[]

    var allInputs=document.getElementsByTagName('input')
    var firstName=allInputs[0]
    var email=allInputs[1]
    var password=allInputs[2]
    var confirmPassword=allInputs[3]


    var user={
        name:firstName.value,
        email:email.value,
        password:password.value
    }   

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailRegex.test(email.value)){
        alert('Please Enter a Valid Email')
        return
    }
    if(password.value.length < 6){
        alert('Please fill 6 characters password');
        return
        
    }
    if(!firstName.value||!email.value||!password.value||!confirmPassword.value){
      alert("Please Fill All Inputs")
      return
    }

    if(password.value !==confirmPassword.value){
        alert("incorrect password")
        return
    }
    

    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))

    alert('Register Successfully');
    window.location.href='./login.html'
}
