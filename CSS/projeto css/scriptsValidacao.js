

let click=document.querySelector('form')
click.addEventListener('submit',value=> value.preventDefault())


let Nome=document.querySelector('#Nome')
let Mail=document.querySelector('#E-MAIL')
let Assunto=document.querySelector('#Assunto')
let Messagem=document.querySelector('#Messagem')
       
    let arroba=Mail.value.indexOf('@')
    let espacio=Mail.value.indexOf(' ')
    let punto=Mail.value.indexOf('.',arroba+2)

    let required=document.querySelectorAll('[required]')

       for(validacion of required)
    {
        validacion.addEventListener("invalid",Validar)
    }
function Validar(value)
{
    invalids=value.target
    if(invalids.validity.valueMissing)
        {
        invalids.setCustomValidity("Por favor debe inserir o "+invalids.id);
        }else invalids.setCustomValidity('');
     
    if(Mail.value!=='' && (arroba===-1 || espacio===-1 || punto===-1)){
        console.log('correo invalido '+invalids['E-MAIL'])
       invalids.setCustomValidity("E-Mail invalido!!! Deve ter uma @, nao ter espacios e como minimo um punto despois da Arroba: exemplo>> usuario@midominio.com.br  ");
       
    }
    

    
}
        //alert('tiene arroba '+arroba+' tiene espacio '+espacio+' tiene un punto despues de la arroba '+punto)

