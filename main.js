const card = document.getElementsByClassName('folio');
//ajouter mouse event
function info (){
    
        const newP = document.createElement("p");
        newP.innerHTML = 'la description ici';
        card.appendChild(newP);
        
       

}