// Código del Cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + " cm.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm.");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + " cm^2.");
console.groupEnd();

// Código del Triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm.");
console.log("El altura del triángulo mide: " + alturaTriangulo + " cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +  baseTriangulo;
console.log("El perimetro del triángulo mide: " + perimetroTriangulo + " cm.");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/0.5;
console.log("El área del triángulo mide: " + areaTriangulo + " cm^2.");
console.groupEnd();

// Código del Círculo
console.group("Círculo");

// Radio
const radioCirculo = 4;
console.log("El radio del Círculo mide: " + radioCirculo + " cm.");

// Diámetro 
const diametroCirculo = radioCirculo*2;
console.log("El diámetro del Círculo mide: " + diametroCirculo + " cm.");

// PI
const PI = Math.PI;
console.log("Pi es = " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo*PI;
console.log("La circunferencia del círculo mide: " + perimetroCirculo + " cm.");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo mide: " + areaCirculo + " cm^2.");

console.groupEnd();