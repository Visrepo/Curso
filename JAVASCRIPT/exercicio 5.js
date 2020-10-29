

let btn=document.querySelector('#enviar')

btn.addEventListener('click',(evento)=>{
    evento.preventDefault()
    let UF=document.querySelector('#UF').value
    busqueda(UF)

})

function busqueda(valor){

fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${valor}/distritos`)
.then( respuesta=>{respuesta.json()
    .then(datos=>
    {   
        datos=datos[0].municipio.microrregiao.mesorregiao.UF;
        let Nome=datos.nome
        let Regiao=datos.regiao.nome
        let item=document.createElement('li')
        item.textContent=`Estado: ${Nome} / Regiao: ${Regiao}`
        document.querySelector('#listDatos').appendChild(item)
        //console.log(Nome)
    })
    .catch(e=>
        {
        alert("Não é um UF válido! Tente novamente.")
        console.log('error '+e)
        document.querySelector('#UF').focus()

        })

})
}


