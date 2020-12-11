function valida(){
    var frase=document.getElementById('nome').value;
    document.getElementById('nome').value=frase.toUpperCase();
    if(frase.length>=3){
        /*document.getElementById('nome').style.background = "green";*/
        document.getElementById('nome').style.borderColor = "green";
        document.getElementById('cod').style.visibility="hidden";                    					
            return true;
    }else{					
        document.getElementById('cod').style.visibility="visible";
        document.getElementById('cod').style.color="red";
        document.getElementById('cod').style.fontSize="13px";
        document.getElementById('nome').style.borderColor = "red";								
        return false;	
    }                
    
}

function validarSenha(){
    NovaSenha = document.formulario.NovaSenha.value;
    CNovaSenha = document.formulario.CNovaSenha.value;					
        if(NovaSenha != CNovaSenha){ 
            alert("SENHAS DIFERENTES! FAVOR DIGITAR SENHAS IGUAIS");			
            return false;				
        }else if(NovaSenha.charAt(0) == "@" || CNovaSenha.charAt(0) == "@"){
            alert("A SENHA NÃO PODE COMEÇAR COM O CARACTERE '@' ");                        
            return false;
        }
}           

function validaSexo(){                                
    if(document.getElementById('masculino').checked){
        document.getElementById('alistamento').style.visibility="visible";
        return true;                    
    }else if(document.getElementById('feminino').checked){
        document.getElementById('alistamento').style.visibility="hidden";
    }                    
}       