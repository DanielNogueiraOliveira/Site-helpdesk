
const head=document.head
const body=document.body

const CSS="<link rel='stylesheet' href='/assets/style.css'>"
head.innerHTML+=CSS


const Header= document.createElement("div")
Header.setAttribute("id","header")
Header.setAttribute("class","header")

body.prepend(Header)

const Logo=
    "<div class='cabecalho'>" +
        "<img class='logo' src='./assets/img/Logo_MR_Rualonga_desenho-removebg-preview.png' loading='lazy' alt'Logo-MR' id='logo'/>"
    "</div>"
    
    Header.innerHTML+=Logo