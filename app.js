let continuar=true
    do {
        let opcao = parseInt(prompt("Menu de Opções\n" + 
        "1. Adição\n" +
        "2. Subtração\n" + 
        "3. Multiplicação\n" + 
        "4. Divisão\n" +
        "0. Sair\n" + 
        "Selecione a operação desejada: " ));

        if(opcao===0){
            continuar = false;
            alert("Programa finalizado.");
        }
            let numero1 = parseInt(prompt("Digite o primeiro número: "))
            let numero2 = parseInt(prompt("Digite o segundo número: "))
        
            switch (opcao){

                case 1:
                alert(`A soma dos números é: ${numero1+numero2}`);
                break;

                case 2:
                alert(`A subtração dos números é: ${numero1-numero2}`);
                break;
            
                case 3:
                alert(`A multiplicação dos números é: ${numero1*numero2}`);
                break;
            
                case 4:
                alert(`A divisão dos números é: ${numero1/numero2}`)
                break;
            }
        
    } while(continuar)