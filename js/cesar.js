var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var escolherCripto = document.getElementById('escolher-cripto')
escolherCripto.addEventListener('change', evento); 

var base64 = document.getElementById('radio-btn1')
base64.addEventListener('change', criptografar)

var base64 = document.getElementById('radio-btn2')
base64.addEventListener('change', descriptografar)


function evento()
{

    if(escolherCripto.value == "Cifra_de_Cesar")
    {
        document.getElementById('rot').style.display = "inline";
    }
    else
    {
        document.getElementById('rot').style.display = "none";
    }
    
}

function criptografar()
{
    
    var mensagem = document.getElementById('input-mensagem').value.toLowerCase();
    var msgCriptografada = '';

    if(escolherCripto.value == "base_64")
    {
        msgCriptografada = btoa(mensagem);
    } 
    else if (escolherCripto.value == "Cifra_de_Cesar")
    {
        var rotacao = document.getElementById('rotation').value;
        
        var alfabetoCesar = alfabeto.slice();
        var alfabetoRotacao = alfabetoCesar.slice(0, rotacao);

        for(var i = 0; i < alfabetoRotacao.length; i++)
        {
            alfabetoCesar.push(alfabetoRotacao[i]);
        }
        alfabetoCesar.splice(0, rotacao);

        for(var i =0; i < mensagem.length; i++)
        {
            var index = alfabeto.indexOf(mensagem[i]);
            msgCriptografada += alfabetoCesar[index];
        }

    }  
    document.getElementById('resultado').value = msgCriptografada;
}

function descriptografar()
{
    
    var mensagem = document.getElementById('input-mensagem').value;
    var msgDesriptografada = '';

    if(escolherCripto.value == "base_64")
    {
        msgDesriptografada = atob(mensagem);
    } 
    else if (escolherCripto.value == "Cifra_de_Cesar")
    {
        var rotacao = document.getElementById('rotation').value;
        var alfabetoCesar = alfabeto.slice();
        var alfabetoRotacao = alfabetoCesar.slice(0, rotacao);

        for(var i = 0; i < alfabetoRotacao.length; i++)
        {
            alfabetoCesar.push(alfabetoRotacao[i]);
        }
        alfabetoCesar.splice(0, rotacao);

        for(var i =0; i < mensagem.length; i++)
        {
            var index = alfabetoCesar.indexOf(mensagem[i]);
            msgDesriptografada += alfabeto[index];
        }

    }  
    document.getElementById('resultado').value = msgDesriptografada;
}







