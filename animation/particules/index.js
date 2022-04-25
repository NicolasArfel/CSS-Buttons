const app = {
    // je stocke ici toutes les valeurs max pour mon style
    
    // nombre de particules
    divNbr : 450,
    // positionnement des div
    maxLeft : 940,
    maxTop : 800,
    // taille des particules
    maxSize :20,

    init: function() { 
        app.createDiv();
        // setTimeout(app.init, 5000)
    },
    
    // je crée mes div 
    createDiv: function() {
        
        // je lance une boucle pour créer chaque particule
        for(let i = 0; i < app.divNbr; i++) {
            // je crée les différentes valeurs aléatoires en fonction des valeurs
            const leftValue = Math.random() * app.maxLeft;
            const topValue = Math.random() * app.maxTop;
            const sizeValue = Math.random() * app.maxSize;
            const animationDelay = Math.random() * 1;
    
            // je sélectionne l'emplacement de la future div
            const newDiv = document.createElement('div');
            // j'ajoute la classe snow
            newDiv.classList.add('particles')
            // j'insère les différentes valeurs à la classe snow
            newDiv.style.left = leftValue + "px";
            newDiv.style.top = topValue + "px";        
            newDiv.style.width = sizeValue + "px";
            newDiv.style.height = sizeValue + "px";
    
    
            newDiv.style.setProperty('--animation-time', Math.random() + 's')
    
            // j'implémente mes nouvelles div
            document.body.appendChild(newDiv);
            
        }
    },
    
    

}



document.addEventListener('DOMContentLoaded', app.init);