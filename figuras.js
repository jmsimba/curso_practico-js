//Codigo del Cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los Lados del cuadrado miden: "+ ladoCuadrado +"cm");

function perimetroCuadrado (lado) {
  return  lado * 4;  
} 
//console.log("El perimetro del cuadrado es: "+ perimetroCuadrado +"cm");

function areaCuadrado (lado){
    return  lado * lado;
} 
//console.log("El area del cuadrado es: "+ areaCuadrado +"cm^2");
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triangulo miden: "+ ladoTriangulo1 +"cm,"+ ladoTriangulo2 +"cm,"+ baseTriangulo +"cm");

//const alturaTriangulo = 5.5;
//console.log("ELa altura del triangulo es: "+ alturaTriangulo +"cm");

function perimetroTriangulo (lado1,lado2,base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: "+ perimetroTriangulo +"cm");
//const areaTriangulo =  (baseTriangulo*alturaTriangulo)/2;
function areaTriangulo (base,altura) {
    return (base*altura)/2;
}
//console.log("El area del triangulo es: "+ areaTriangulo +"cm^2");
console.groupEnd();

//Codigo del Triangulo
console.group("Circulos")
//const radioCirculo = 4;
//console.log("El radio del circulo es: "+ radioCirculo +"cm");

function diametroCirculo (radio){
    return radio *2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: "+ diametroCirculo +"cm");
const PI = Math.PI;
//console.log("El valor de PI es: "+ PI +"cm");
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es: "+ perimetroCirculo +"cm");
function areaCirculo (radio) {
    return (radio * radio) * PI;
}
//const areaCirculo = (radioCirculo * radioCirculo)* PI;
//console.log("El area del circulo es: "+ areaCirculo +"cm");
console.groupEnd();

//Interactuamos con HTML
function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function alturaIsoseles () {
    let ladoA = (document.getElementById("InputLado1")).value;   
    let ladoB = (document.getElementById("InputLado2")).value; 
    let ladoBase = (document.getElementById("InputBase")).value;
    const perimetroTri = perimetroTriangulo (ladoA,ladoB,ladoBase);
    alert(perimetroTri);
}