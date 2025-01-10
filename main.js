const form = document.getElementById('form-atividade'); // criamos uma const form que receberá o valor do id form-atividade
let linhas =  ''; // aqui criamos uma nova linha
const imgAprovado = '<img src="./aprovado.png" alt="Emoji celebrando" />'; // aqui criamos constantes que receberam os valores do emoji celebrando e decepcionado que estão sendo usado no if ali em baixo.
const imgReprovado = '<img src="./reprovado.png" alt="Emoji Decepcionado" />';
const atividades = []; // criamos um var atividades que é um array e de valor vazio, seu valor foi atribuido abaixo
const notas = []; // criamos var notas que é um array de valor vazio e seu valor foi atribuido abaixo
const spanAprovado = '<span class = "resultado aprovado"> Aprovado </span>';
const spanReprovado = '<span class = "resultado reprovado"> reprovado </span>';
const notaMinima = parseFloat(prompt("Digite a nota minima")); // aqui quando o usuario entrar na aba de calculadora de medias, aparecera um campo para ele preencher, que é gerado apartir dessa const, o valor inserido seria uma string, mudamos isso com o parseFloat.


form.addEventListener('submit' ,function(e) {
    e.preventDefault(); // aqui toda vez que clicavamos no submit, a pagina era atualizada, com a função e o preventDefault removemos isso
    
    // também usamos essa mesma função para chamarmos mais algumas funções abaixo, como adicionalinha e atualizatabela.
    
    adicionaLinha(); // chamada de função
    atualizaTabela(); //chamada de função
    atualizaMediaFinal(); //chamada de função

})

    function adicionaLinha() { //função usada para adicionar linhas na tabela
    const inputNomeAtividade = document.getElementById('nome-atividade');  // aqui criamos uma const de nome inputNomeAtividade que recebera o valor inserido pelo usuário no input nome-atividade
    const inputNotaAtividade = document.getElementById('nota-atividade'); // aqui criamos uma const de nome inputNotaAtividade que recebera o valor inserido pelo usuário no input nota-atividade

    if (atividades.includes(inputNomeAtividade.value)) { // O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`); // o valor da atividades sera verificado através do includes, e esse valor será atribuido apartir do input, se esse valor ja tiver sido inserido. será retornado o alert para o usuário.
    } else {

       atividades.push(parseFloat(inputNomeAtividade.value)); // push quer dizer puxar então estamos puxando o valor do input para dentro do atividades, usando o .push e dizemos que o valor inserido sera de números variados usando o parsefloat.  
    notas.push(parseFloat(inputNotaAtividade.value)); // ou seja a const notas e atividades receberam os valores dos inputs usando o comando push, o parse float usamos para dizer que se tratam de números variados por isso um parsefloat e nao parseint

    let linha = '<tr>';  // aqui criamos um var chamada linha que recebe o valor da uma linha
    linha += `<td>${inputNomeAtividade.value}</td>`;    // aqui dizemos que a var linha concatenamos com += a coluna que receberá o valor de inputNomeAtividade.value
    linha += `<td>${inputNotaAtividade.value}</td>`;    // aqui dizemos que a var linha concatenamos com += a coluna que receberá o valor de inputNotaAtividade.value
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado  }<td>`; // aqui dizemos que a var linha concatenamos com += a coluna que receberá o valor de inputNotaAtividade.value, a nota deve ser maior ou igual a 7, o '?' significa um if então se o resultado for >= 7 aparecerá a imgAprovado o ':' é um else então se a nota for menor que 7 aparecerá a imgReprovado
    linha +=  `</tr>`; // aqui fechamos a linha

    linhas += linha; 
    }

    // alert(`Atividade: ${input.nomeAtividade.value} - nota: ${inputNotaAtividade}`); // aqui criamos um alert para exibir uma msg em tela, o ${} é usado para concatenar valores em funções ou outras formas. 

    inputNomeAtividade.value = ''; // aqui toda vez que a ação de submit ser disparada os valores do desses inputs irão retornar vazios
    inputNotaAtividade.value = '';
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');  // precisavamos colocar isso dentro do corpo da tabela, para isso criamos essa const corpoTabela, acessamos o valor com o querySelector 
    corpoTabela.innerHTML = linhas;   // e para levarmos tudo isso para dentro do nosso html usamos o innerHTML

}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal(); // criamos a var que recebera o valor de calculaMediaFinal, e o valor de media final vem do return de somaDasNotas / notas.lenght;

    document.getElementById('media-final-valor').innerHTML = mediaFinal; // aqui recuperamos o valor do id, levamos ao html com o innerHTML e resultado que aparecerá la sera o de mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado; // aqui então se mediaFinal for maior ou igual a nota minima, aparecerá a img de aprovado, se não aparecerá a img de reprovado

    // lembrando que o ? significa um if e o : um else nesse caso. 

    
}


function calculaMediaFinal() { // criamos a função 
    let somaDasNotas = 0; // criamos uma var de valor 0

    for (let i = 0; i < notas.length; i++) { // iniciamos um laço com for enquanto o i for menos que notas.lenght o i sera incrementado, cada vez que entrar no laço
        somaDasNotas += notas[i]; // aqui somaDasNotas recebera o valor de notas[i] o i quer dizer que notas recebera o incremento
    }

    return somaDasNotas / notas.length; //aqui dizemos que queremos retornar a divisão de somaDasNotas por notas.lenght, .length em JavaScript serve para indicar o tamanho de um array ou string, ou o número de argumentos de uma função

}






