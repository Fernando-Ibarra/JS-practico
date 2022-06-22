// Código del Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado*lado;
}
console.groupEnd();


// Código del Triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    if (Number(lado1) == Number(lado2)){
        return Number(lado1) + Number(lado2) + Number(base);
    } else {
        return 0;
    }
}

function areaTriangulo(lado1, lado2, base) {
    if (Number(lado1) == Number(lado2)){
        const altura = Math.sqrt((lado1*lado2) - ((base*base)/4))
        return (base * altura)/2
    } else {
        return 0;
    };
}
console.groupEnd();

// Código del Círculo
console.group("Círculo");

function diametroCirculo(radio) {
    return radio*2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Interactuar con HTML

function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function CalcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const inputb = document.getElementById("InputBase");
    const value1 = input1.value;
    const value2 = input2.value;
    const valueb = inputb.value;

    const perimetro = perimetroTriangulo(value1, value2, valueb);
    if (perimetro == 0){
        alert("Los lados del triángulo no corresponden a un triángulo isósceles");
    } else {
        alert(perimetro);
    }
}

function CalcularAreaTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const inputb = document.getElementById("InputBase");
    const value1 = input1.value;
    const value2 = input2.value;
    const valueb = inputb.value;

    const area = areaTriangulo(value1, value2, valueb);
    if (area == 0){
        alert("Los lados del triángulo no corresponden a un triángulo isósceles");
    } else {
        alert(area);
    }
}