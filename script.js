function calcular(){
    const v = Number(document.getElementById('valor').value);
    const t = Number(document.getElementById('tempo').value);
    const s = Number(document.getElementById('salario').value);
    const prestacao = (v / (t * 12)).toFixed(2);
    const minimo = (30 * s) / 100;
    document.querySelector('.resposta1').innerHTML = `Para conseguir um empréstimo de R$ ${v} em ${t} anos </br> A prestação será de R$ ${prestacao}`;
    if( minimo < prestacao){
        document.querySelector('.resposta2').innerHTML = `Emprestimo negado. </br> A prestação mensal não pode exceder 30% do seu salário.`;
    }
    else{
        document.querySelector('.resposta2').innerHTML = `Emprestimo aprovado. </br> Basta assinar os papeis e correr atrás dos seus sonhos!`;
    }

}