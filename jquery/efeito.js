/**
 * Efeito Fade para destacar uma imagem 
 * Exemplo de uso de funções JQuery se comportando como if e else 
 * @author Valdirley Oliveira
 */

//template
$(document).ready(function () {
    $('ul.Destaque li img').hover(function () {
        $('ul.Destaque li img').not(this).stop().fadeTo(300,0.2)
    }, function () {
        $('ul.Destaque li img').stop().fadeTo(400,1)

    })
})
