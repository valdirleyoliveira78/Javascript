/**
 * Validação simples com JS
 * Exemplo de uso das funções do array
 * @author José de Assis
 */

 function validacao(){
     // o método abaixo é usado para capturar dados de formulários
     // diversos facilitando a busca
    let formulario = document.forms.frmCadastro
    let nome = formulario.txtNome.value
    let cpf = formulario.txtCpf.value
    let sexo = formulario.sexo.value
    let perfil = formulario.txtPerfil.value
    alert(nome)
    alert(cpf)
    alert(sexo)
    alert(perfil)
 }