
let valid;
let UsuariosRegistrados=[]

document.querySelector('#enviar').addEventListener('click', (event)=>{
entradaDatos()
console.log('acaba de dar clic')

})
//recepcion de datos del html
function entradaDatos(){
     let usuario=document.querySelector('#usuario').value
     let senha=document.querySelector('#senha').value
     let login = document.querySelector('#contenedor').style
     if(usuario && senha!==''){
     event.preventDefault()
     }
    registrado=new Registro(usuario,senha)
    Validar(registrado,login)
    MostrarDatos()
}
//constructor del objeto para guardar los usuarios
function Registro(usuario,senha){
    this.Usuario=usuario
    this.Senha=senha
}
//salida de datos en la consola
function MostrarDatos(){
   console.log(UsuariosRegistrados)
}
//comprobando si usuario existe|| y si hay problemas con el usuario o el password
function comprobar (a,b){
    for (let usuarios of UsuariosRegistrados){
    if (usuarios.Usuario===a && usuarios.Senha===b){
     return true
    }else if (usuarios.Usuario===a && usuarios.Senha!==b || usuarios.Usuario!==a && usuarios.Senha===b ){
    return 'senhaOusuario'
    }
    
    }
}
//validar usuario y senha diferente de '' o con problemas en la senha o usuario, registro de aquel que sea nuevo y dando la bienvenida a quien ya esta registrado
function Validar(registrado,login)
{
   
if((registrado.Usuario && registrado.Senha)!=='')
    {
    if(comprobar(registrado.Usuario,registrado.Senha)==='senhaOusuario')
    {
        console.log('se esta cumpliendo el nooooo')
        alert('Por favor, revise si su usuario o sua senha esta correctamente deleteado');
    }else{  
    if (!comprobar(registrado.Usuario,registrado.Senha))
        {
            console.log('se esta cumpliendo el que no esta registradoooo')
            valid=confirm(registrado.Usuario+' usted no está registrado(a), quiere que guardemos su Registro con estos datos??')
            if (valid)
            {
                console.log('se esta cumpliendo el listo despues de registrar')
                UsuariosRegistrados.push(registrado); alert('Listo! recuerde guardar bien sua senha, BIENVENIDO!')
            console.log('ocultado')
            hidden(valid,login)
            
            }

        }else {
            console.log('se esta cumpliendo el BIENVENIDO final')  
            alert(`BIENVENIDO ${registrado.Usuario}!`)
               console.log('ocultado')
               hidden(comprobar,login)
               //Show()
               }
            }
       
    }    
}
//para ocultar usando opacity
function hidden(validacion, paraOcultar)
    {
    if(validacion)
        {
        paraOcultar.opacity=0;
        paraOcultar.transition='opacity .3s linear';
        }
    }
    
/*

    function Show(validacion, paraMostrar)
    {
    if(!validacion)
        {
        paraMostrar.opacity=1;
        paraMostrar.transition='opacity .3s linear';
        }
    }
*/

