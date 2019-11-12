/**
 * Cálculo IMC
 * @author Valdirley Oliveira
 */

// Variáveis Globais
let Peso, Altura, Imc

function calcular() {
    Altura = Number(frmImc.txtAltura.value.replace(",", "."));
    Peso = Number(frmImc.txtPeso.value.replace(",", "."));
    Imc = (Peso / (Altura * Altura))
    frmImc.txtResultado.value = Imc.toFixed(2)

    if (imc < 17) {
            document.getElementById('status').src = 'imc1.png'
 
    else if (imc >= 17 && imc < 18.5) {
            document.getElementById('status').src = 'imc2.png'
    
    else if (imc > 18.5 && imc < 25) {
            document.getElementById('status').src = 'imc3.png'
    
    else if (imc > 25 && imc < 30) {
            document.getElementById('status').src = 'imc4.png'
                }
    else if (imc > 30 && imc < 35) {
            document.getElementById('status').src = 'imc5.png'
    
    else if (imc > 35 && imc < 40) {
            document.getElementById('status').src = 'imc6.png'
    
    else (imc > 40){
            document.getElementById('status').src = 'imc7.png'
       }
      } 
     }
    }
   }
  }






