
function SubmitMy(){
    var allInputs=document.getElementsByTagName('input')
    var username = allInputs[0].value
    var password = allInputs[1].value


    var userLogin=JSON.parse(localStorage.getItem('users'))
    var found=false
    
    for(var i=0; i<userLogin.length; i++){
        var data=userLogin[i]


        if(data.email===username&&data.password===password){
            alert('Login Successfully')
            found=true
            window.open('./index.html')
            break;
        } 
    }
    if(!found){
        alert('Invalid User')
    }
  
}




