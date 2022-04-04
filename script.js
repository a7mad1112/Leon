let linksUl = document.querySelector(".links-ul")
let links = document.querySelector(".links")

let c = 1;
links.onclick = () => {
    c+=1
    if(c%2 ==0){

        linksUl.style.display = "block"
    }else{
        linksUl.style.display = "none"

    }

}