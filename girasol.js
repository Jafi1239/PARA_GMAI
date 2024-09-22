function setup() {
    createCanvas(600, 600);  // Crear un lienzo de 600x600 píxeles
    background(0);           // Fondo negro
    noLoop();                // Evitar que el dibujo se redibuje continuamente
}

function draw() {
    // Centrar el dibujo en el canvas
    translate(width / 2, height / 2);

    // Dibujar el tallo
    fill(34, 139, 34);
    rect(-10, 50, 20, 200);  // Tallo centrado y alineado

    // Dibujar los pétalos
    let numPetalos = 16;     // Número de pétalos
    let petaloLongitud = 150; // Longitud del pétalo
    let petaloAnchura = 60;  // Ancho del pétalo

    for (let i = 0; i < numPetalos; i++) {
        push();
        rotate(TWO_PI * i / numPetalos);  // Rotar alrededor del centro

        // Crear forma de pétalo
        fill(255, 165, 0);  // Color anaranjado en la base
        beginShape();
        vertex(-petaloAnchura / 2, -10);  // Parte inferior del pétalo
        bezierVertex(-petaloAnchura, -petaloLongitud / 2, -petaloAnchura, -petaloLongitud, -petaloAnchura / 2, -petaloLongitud);  // Curva izquierda
        bezierVertex(petaloAnchura / 2, -petaloLongitud, petaloAnchura, -petaloLongitud / 2, petaloAnchura / 2, -10);  // Curva derecha
        endShape(CLOSE);
        
        // Pétalo amarillo en la punta
        fill(255, 204, 0);  // Color amarillo en la punta
        ellipse(0, -petaloLongitud, petaloAnchura, petaloLongitud / 2); // Punta del pétalo

        pop();
    }

    // Dibujar el centro del girasol
    fill(139, 69, 19);  // Café claro para el centro
    ellipse(0, 0, 80, 80);  // Centro del girasol más grande y visible

    // Añadir puntitos negros al centro como semillas
    fill(0);  // Color negro para las semillas
    let seedCount = 50;  // Número de semillas ajustado
    for (let i = 0; i < seedCount; i++) {
        let angle = random(TWO_PI);  // Ángulo aleatorio
        let radius = random(25, 40);  // Radio aleatorio para la posición de las semillas
        let x = radius * cos(angle);  // Coordenada x
        let y = radius * sin(angle);  // Coordenada y

        // Variar el tamaño de las semillas
        let size = random(3, 6);  // Tamaño aleatorio entre 3 y 6
        ellipse(x, y, size, size);  // Dibujar la semilla
    }
}

