console.log("Prueba");


var usu = document.getElementById('User')
var pas = document.getElementById('Password')
var btn = document.getElementById('Ingresar')

btn.addEventListener('click', () => {

    if(usu.value=="angel" && pas.value =="123"){
        console.log('Angel')
        window.location.href="routes/secret/angel.html"
    }else{
    console.log('No angel')
    }
    
})