(function() {

    const carts = document.querySelectorAll(".button1")
    const hearts = document.querySelectorAll(".button2")
    const alert = document.getElementById("alert-success")
    
    function alertSuccess(){
        alert.classList.add("alert__display");
        setTimeout(function(){
            alert.classList.remove("alert__display");
        },2000)       
    }


    const clickCarts = function (){
        carts.forEach( element => {
            element.addEventListener("click", e =>{
                e.preventDefault()
                alertSuccess()
            })
        })
    }

    const clickearts = function(){
        hearts.forEach( element => {
            element.addEventListener("click", e =>  {
                e.preventDefault();
                console.log("hola")
            })
        })
    }

    clickCarts()
    clickearts()
    

    const menu = document.getElementById("menu")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            menu.classList.add("bg-light__scroll")
            menu.classList.remove("bg-light")
        } else {
            menu.classList.remove("bg-light__scroll")
            menu.classList.add("bg-light")
        }
    })

})()