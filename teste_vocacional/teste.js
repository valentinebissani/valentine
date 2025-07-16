var qtdA = 0;
var qtdB = 0;
var qtdC = 0;
var qtdD = 0;
var qtdE = 0;

function contarOpc(select){
    if(select.value == "a"){
        qtdA ++;
    }
    if(select.value == "b"){
     qtdB ++;
    }
    if(select.value == "c"){
        qtdC ++;
    }
    if(select.value == "d"){
        qtdD ++;
    }
    if(select.value == "e"){
        qtdE ++;
    } 
}

function contarSelect(){
    const selects = document.querySelectorAll("select");
    selects.forEach(contarOpc);
    console.log("Quantidade de A: ", qtdA);
    console.log("Quantidade de B:", qtdB);
    console.log("Quantidade de C: ", qtdC);
    console.log("Quantidade de D:", qtdD);
    console.log("Quantidade de E:", qtdE);

    var porcentagemA = qtdA*10;
    var porcentagemB = qtdB*10;
    var porcentagemC = qtdC*10;
    var porcentagemD = qtdD*10;
    var porcentagemE = qtdE*10;

    document.getElementById("exatas").style.width = porcentagemA + "%";
    document.getElementById("exatas").innerHTML = porcentagemA + "%";

    document.getElementById("artes").style.width = porcentagemB + "%";
    document.getElementById("artes").innerHTML = porcentagemB + "%";

    document.getElementById("humanas").style.width = porcentagemC + "%";
    document.getElementById("humanas").innerHTML = porcentagemC + "%";

    document.getElementById("biologia").style.width = porcentagemD + "%";
    document.getElementById("biologia").innerHTML = porcentagemD + "%";

    document.getElementById("gestao").style.width = porcentagemE + "%";
    document.getElementById("gestao").innerHTML = porcentagemE + "%";

    
}