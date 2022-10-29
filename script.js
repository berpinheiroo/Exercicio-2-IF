/*2. Escreva um algoritmo que faça as seguintes perguntas ao seu usuário, guarde as
respostas separadamente:
a. Se ele está com o cinto de segurança
b. Se ele está alcoolizado
c. Se o semáforo está verde
Com base nas respostas do usuário informe que o usuário pode prosseguir se
estiver com o cinto E não estiver alcoolizado E o semáforo estiver verde, se não
informar que ele não deve prosseguir.*/

var situacao = prompt("Voce esta com cinto de seguranca? Se sim, digite 1")
var estado = prompt("Voce esta sobrio? Se sim, digite 1")
var semaforo = prompt("O semaforo esta verde? Se sim, digite 1")

if (situacao == 1 && estado == 1 && semaforo == 1) {
    console.log("Pode prosseguir")
} else {
    console.log("Nao prossiga!")
}