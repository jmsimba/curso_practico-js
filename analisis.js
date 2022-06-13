//Helpers
function esPar(numero){
    return (numero % 2 === 0);  
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
// Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2) ;

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2])
        return mediana
    }else{
        const mediana = lista[mitad];
        return mediana
    }

}

 //MEdiana General 
const salariosCol = colombia.map(
   function(persona){
    return persona.salary;        
   } 
);

const salariosColSorted = salariosCol.sort(
    function(a,b){
        return a - b;
    }
);
const medianaGeneral = medianaSalarios(salariosColSorted);

//Mediana Top 10 Porciento
const spliceStrat = salariosColSorted.length * 90 / 100;
const spliceCount = salariosColSorted.length - spliceStrat


const salariosTop10 = salariosColSorted.splice(spliceStrat,spliceCount);

const medianaTop10 = medianaSalarios(salariosTop10);
console.log({
    medianaGeneral,
    medianaTop10
});