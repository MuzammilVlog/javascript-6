


var userLogin=JSON.parse(localStorage.getItem('users'))



for(var i=0; i<userLogin.length; i++){
    var data=userLogin[i]
     document.getElementById("usersName").innerHTML=data.name

     
}