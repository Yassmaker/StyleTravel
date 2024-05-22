var sidebar = document.querySelector('.sidebar');
var menu = document.querySelector('#menu');
var close = document.querySelector('#close');

window.addEventListener('DOMContentLoaded' , () =>{
    menu.addEventListener('click', () =>{
        sidebar.classList.add('active')
    })

    close.addEventListener('click' , () =>{
        sidebar.classList.remove('active')
    })
    
})

var header = document.querySelector('.header');
var maxScroll = 0;

window.addEventListener('scroll', () => {
    var scroll = window.scrollY;

    if (scroll == 0) {
        header.classList.remove('active');
        header.classList.remove('null');
    } else if (scroll > maxScroll) {
        header.classList.add('null');
        header.classList.remove('active');
    } else {
        header.classList.remove('null');
        header.classList.add('active');
    }

    maxScroll = scroll;

});

const scrollUp = () => {
    const scrollUp = document.querySelector('.scrollUp')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scrollUp')
                        : scrollUp.classList.remove('show.scrollUp')

    this.scrollY <= 350 ? scrollUp.classList.remove('show-scrollUp')
                        : scrollUp.classList.add('show.scrollUp')
}
window.addEventListener('scroll' , scrollUp)

/* -----MESSAGE------*/

var Invia = document.querySelector('.Invia')
var Message = document.querySelector('.messaggio')
var cancel = document.querySelector('#cancelMessage')
var InputEmail = document.querySelector('.inputEmail') 
var Message2 = document.querySelector('.messaggio2')
var cancel2 = document.querySelector('#cancelMessage2')

window.addEventListener('DOMContentLoaded' , () =>{
    
    Invia.addEventListener('click' , () =>{
        if(InputEmail.value !== "")
        {
            Message.classList.add('show')
        }else{
            Message2.classList.add('alert')
        }
    })
    cancel.addEventListener('click' , () =>{
        Message.classList.remove('show')
        setTimeout(function() {
            location.reload();
        }, 1000);
    })
    cancel2.addEventListener('click' , () =>{
        Message2.classList.remove('alert')
    })
})  

window.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        if(InputEmail.value !== "")
        {
            Message.classList.add('show')
        }else{
            Message2.classList.add('alert')
        }
        
    }
});