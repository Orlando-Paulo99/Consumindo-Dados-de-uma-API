
function recebeCep(){

    
let cep=document.getElementById("cep").value
let dadosCep=document.getElementById("dadoCep");
    try{
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data =>{

       
            dadosCep.innerHTML += "CEP :"+data.cep;
            dadosCep.innerHTML +="Logradouro: " + data.logradouro 


        })

    }
    catch (error){
        alert(error3)
        console.log(error);
        
    }

}
recebeCep();