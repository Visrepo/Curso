

let i=0
let NombreElement=[];


let MyRepo=fetch( `https://api.github.com/users/Visrepo/repos`)
.then((respuesta)=>respuesta.json()
.then((repo)=>{
    console.log(respuesta)
    repo.forEach(element => {
        //console.log(element.name)//nombre del repositorio
        //console.log(element.html_url)// url del repositorio
        //console.log(element.fork)//si el repo es un fork o no
        let Link=document.createElement('a')
        i++
        Link.id='link'+i.toString();
        
        Link.href=element.html_url
        let RepoName=document.createElement('p')
            
       
        if(element.fork==false){
        RepoName.textContent=element.name+': '+ '('+NombreElement+')'
        }else RepoName.textContent=element.name+': Este Repositorio es un Fork'
        
        document.querySelector('#rect4').appendChild(Link)
        document.querySelector(`#link${i}`).appendChild(RepoName)
        
       //url_Conteudos.push(element.contents_url)
    });
}
))
  
let datos=fetch(`https://api.github.com/repos/Visrepo/Curso/contents/`)
        .then ((respuesta2)=>respuesta2.json()
        .then((contenido)=>{
            console.log(respuesta2)
            contenido.forEach(element2 => {
                if(element2.name!=='Readme.md'){
                   NombreElement.push(" "+ element2.name)
                }
            });
        })) 
        .catch((e)=>console.log('Um erro ocorreu: '+e)) 



