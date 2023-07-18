/* Menú de navegacion resposivo */

const enlaces = document.getElementsByClassName("enlaces")[0]; 
const hamburguesa = document.getElementsByClassName("hamburguesa")[0]; 
const menuhamburguesa = document.getElementById("hamburguesa");

let abierto = false;    //variable para validar si el menu está abierto o cerrado

const toggleMenu = () =>{       //funcion creada para que cada que se de click al menu se active la clase "activar" que tiene un translate en X de 0
    enlaces.classList.toggle("activar");   
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

hamburguesa.addEventListener("click", function(){       //funcion flecha con evento que permite que al presionar el menu se muestre en la pamtalla del dispositivo
    toggleMenu();                  

    if (document.querySelector(".enlaces.activar")){        //condicion que valida si el menu esta abierto o cerrado
        abierto = true;         //menu abierto
    }else{
        abierto = false;           //menu cerrado
    }

})

window.addEventListener("click", function(e){
    this.console.log(e.target);

    if (abierto){
        if(e.target !== menuhamburguesa){
            toggleMenu();
            abierto = false;
        }
    }
})

window.addEventListener("resize", function(){
    if (screen.width > 769){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto = false;
        }
    }
})