/**
 * Cálculo IMC
 * @author Valdirley Oliveira
 */

 // Variáveis Globais
 let Peso, Altura, Imc

 function calcular(){
Altura= Number(frmImc.txtAltura.value.replace(",","."));
Peso= Number(frmImc.txtPeso.value.replace(",","."));
Imc = (Peso / ( Altura * Altura))
frmImc.txtResultado.value=Imc.toFixed(2)  

}



