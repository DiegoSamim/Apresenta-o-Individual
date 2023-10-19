// Habilidades Eventos

var iconeProjetoLoja = document.querySelector('#organizadorComercial');

var iconeHtml = document.querySelector('#html');


function mudarOpacidade(listaicones, isMouseOver) {
    // Itera sobre os IDs na lista e altera a opacidade de cada elemento de destino
    listaicones.forEach(function(elementoDaLista){
        var icone = document.getElementById(elementoDaLista);
        if(icone){
            icone.style.opacity = isMouseOver ? 1 : 0.3;
        }
    });
}

function changeColor(targetIds, isMouseOver) {
    // Itera sobre os IDs na lista e altera a cor de cada elemento de destino
    targetIds.forEach(function(targetId) {
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.style.color = isMouseOver ? 'red' : 'black';
        }
    });
}