/* 
1. Função que retorna o nome do funcionário que tem o maior salário da empresa.
2. Função que retorna o nome do funcionário que tem o menor salário da empresa.
3. Função que retorna a média salarial da empresa.
4. Função que recebe um setor como parâmetro e retorna o funcionário de maior salário 
do setor informado.
5. Função que recebe um setor como parâmetro e retorna o funcionário de menor 
salário do setor informado.
6. Função que recebe um setor como parâmetro e retorna a média salarial do setor 
informado.
*/



var fs = require("fs");
var funcionarios = "funcionarios.json";

fs.readFile(funcionarios, "utf-8", function(err, data){
    if(err) {
        console.log(err)
    } else {
        var objeto = JSON.parse(data);
    }
        //resolvendo a primeira questão: "Função que retorna o nome do funcionário que tem o maior salário da empresa."
        var maiorSalarioEmpresa = 0;
        var funcionarioMaiorSalario = ""
        for (var i = 0; i < objeto.funcionarios.length;i++) {
            if (objeto.funcionarios[i].salario > maiorSalarioEmpresa) {
                maiorSalarioEmpresa = objeto.funcionarios[i].salario;
                funcionarioMaiorSalario = objeto.funcionarios[i].nome
            } 
        }
        console.log("O MAIOR salário da empresa é de: " + funcionarioMaiorSalario);

        // resolvendo a segunda questão: "Função que retorna o nome do funcionário que tem o menor salário da empresa.""
        var menorSalarioEmpresa = maiorSalarioEmpresa;
        var funcionarioMenorSalario = ""
        for (var i = 0; i < objeto.funcionarios.length;i++) {
            if (objeto.funcionarios[i].salario < menorSalarioEmpresa) {
                menorSalarioEmpresa = objeto.funcionarios[i].salario;
                funcionarioMenorSalario = objeto.funcionarios[i].nome
            } 
        }
        console.log("O MENOR salário da empresa é de: " + funcionarioMenorSalario);
        // resolvendo a terceira questão: Função que retorna a média salarial da empresa. 
        var totalSalario = 0;
            var count = 0;
            var mediaSalarial = totalSalario/count;

        for(var i = 0; i < objeto.funcionarios.length;i++) { //fazer a média de todos os salarios da empresa
            totalSalario += objeto.funcionarios[i].salario;
            count++;
            mediaSalarial = totalSalario/count;
        }
            //console.log("Total da soma de salarios é: " + totalSalario);
            console.log("A média salarial da empresa é: " + mediaSalarial);

        //resolvendo a quarta questão : Função que recebe um setor como parâmetro e retorna o funcionário de maior salário do setor informado
        // fazer uma função aqui
        
        var salarioProducao = 0;
            var count2 = 0;
            var mediaProducao = salarioProducao/count2;
           
            for(var i = 0; i < objeto.funcionarios.length;i++){
                if(objeto.funcionarios[i].setor === "Produção") {
                    salarioProducao += objeto.funcionarios[i].salario
                    count2++;
                    mediaProducao = salarioProducao/count2;
                }
            }






});
