/**
* JS Aula : Calculadora Flex
 * @author Valdirley Oliveira
*/

function calcular(){

    let etanol
    let gasolina

    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",", "."))
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",", "."))
    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src = "etanol.png"
    } else {
        document.getElementById("status").src = "gasolina.png"
    }
}