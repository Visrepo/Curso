
//declaraçâo de variables
    let nome;
    let sexo;
    let edade;
    let conferir;
    let pessoa;
    let trabalhadores=[];
    let pessoaRegistrada;
    
 
 //funtions------------------
    function trabalhador(_nombre,_sexos,_edad){
    this.nombre= _nombre
    this.sexos= _sexos
    this.edad= _edad
  
    }
    function aposentadoria(sexo_pessoa, edad_pessoa)
    {
        pessoa.Aposentadoria= "ainda nao tem a edade suficiente para se aposentar.";
        if (sexo_pessoa==='Masculino' && Number(edad_pessoa)>=65 ){
    pessoa.Aposentadoria = "já esta na edade, e pode disfrutar da aposentadoria.";
        }
        if (sexo_pessoa==='Femenino' && Number(edad_pessoa)>=62 ){
        pessoa.Aposentadoria= "já esta na edade, e pode disfrutar da aposentadoria.";
        }
    }
    function Limpar(){
        document.querySelector('#nome').value='';
        document.querySelector('#F').checked=false;
        document.querySelector('#M').checked=false;
        document.querySelector('#edade').value='';
        document.querySelector('#nome').focus();
    }
    function registrarDados(value)
    {
     value.preventDefault()
        nome= document.querySelector('#nome').value;
        if(document.querySelector('#M').checked)
                {
                sexo=document.querySelector('#M').value;
                }
                else sexo= document.querySelector('#F').value;
        edade= document.querySelector('#edade').value;
            //reset
        Limpar()
        pessoa = new trabalhador(nome,sexo,edade)
            //verificacao do aposentadoria
        aposentadoria(pessoa.sexos, pessoa.edad)
            //salva de dados no array
        trabalhadores.push(pessoa)

            //mostrando dados
        let h3=document.querySelector('h3')
        h3.style.visibility='visible';
        let p=document.querySelector('p')
        p.style.visibility='visible';
      
        pessoaRegistrada=document.createElement('li')
        pessoaRegistrada.textContent=nome+ " (Sexo: "+sexo+" Edade: "+edade +") => Aposentadoria: "+pessoa.Aposentadoria;
        document.querySelector('#listado').appendChild(pessoaRegistrada)
        
    }
    
    
//aguardando pelo evento Click
let BtnSelect = document.querySelector('#registrar');
let BtnClic =  BtnSelect.addEventListener('click', registrarDados);

    

