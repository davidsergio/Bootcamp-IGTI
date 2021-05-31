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

const { clear } = require("console");
const { maxHeaderSize } = require("http");
var fs = require("fs"); //chamando a biblioteca firesystem
var fJson = "funcionarios.json"; //alocando a lista json em uma variavel

var funcionario = "Ana Castro Dias"
var funcionario2 = "Leonardo Souza Lima"
var funcionario3 = "Gabrielle Araujo Souza"
var funcionario4 = "Igor Cunha Lima"



fs.readFile(fJson, "UTF-8", function (err, data) {
    if (err) {
        console.log(err)
    } else {
        var objeto = JSON.parse(data); //transformando o arquivo funcionarios.json em um objeto literal com o "JSON.PARSE", para poder mexer nas estruturas dos arrays

        for (var i = 0; i < objeto.funcionarios.length;i++){ // aqui fizemos um loop para conseguirmos acessar as posições especificas.
            if(objeto.funcionarios[i].nome === funcionario) {
                console.log(objeto.funcionarios[i].nome);
                console.log(objeto.funcionarios[i].salario);
                console.log(objeto.funcionarios[i].setor); 
                console.log("_____________________________________________");
            } else if(objeto.funcionarios[i].nome === funcionario2) {
                console.log(objeto.funcionarios[i].nome);
                console.log(objeto.funcionarios[i].salario);
                console.log(objeto.funcionarios[i].setor);
                console.log("_____________________________________________");
            } else if(objeto.funcionarios[i].nome === funcionario3) {
                console.log(objeto.funcionarios[i].nome);
                console.log(objeto.funcionarios[i].salario);
                console.log(objeto.funcionarios[i].setor);
                console.log("_____________________________________________");
            } else if(objeto.funcionarios[i].nome === funcionario4) {
                console.log(objeto.funcionarios[i].nome);
                console.log(objeto.funcionarios[i].salario);
                console.log(objeto.funcionarios[i].setor);
                console.log("_____________________________________________");
            } 
            
        
        }
            //Declarando as variaveis para a média salarial da empresa toda. 
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

            //Declarando as variaveis para gerar a media de salarios pro setor de produção.
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
            console.log("A média de salarial da Produção é: " + mediaProducao);

            //Declarando as variaveis para gerar a media de salarios pro setor de Comercial.
            var salarioComercial = 0;
            var count3 = 0;
            var mediaComercial = salarioComercial/count3;
           
            for(var i = 0; i < objeto.funcionarios.length;i++){
                if(objeto.funcionarios[i].setor === "Comercial") {
                    salarioComercial += objeto.funcionarios[i].salario
                    count3++;
                    mediaComercial = salarioComercial/count3;
                }
            }
            console.log("A média de salarial da Comercial é: " + mediaComercial);
            
            //Declarando as variaveis para gerar a media de salarios pro setor de Administrativo.
            var salarioAdm = 0;
            var count4 = 0;
            var mediaAdm = salarioAdm/count4;
           
            for(var i = 0; i < objeto.funcionarios.length;i++){
                if(objeto.funcionarios[i].setor === "Administrativo") {
                    salarioAdm += objeto.funcionarios[i].salario
                    count4++;
                    mediaAdm = salarioAdm/count4;
                }
            }
            console.log("A média de salarial da Administrativo é: " + mediaAdm)
    }
})
                
