contenidoEntrada = `
<style>
    table {
        width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
            cursor: pointer;
        }
        th {
            background-color: #2980b9;
            color: white;
        }
        details {
            margin: 15px 0;
        }
        summary {
            cursor: pointer;
            list-style: none;
        }
        summary::-webkit-details-marker {
            display: none;
        }
        summary h3 {
            display: inline-block;
            margin: 0;
            color: #2980b9;
        }
        summary h3::before {
            content: "▶ ";
            font-size: 0.8em;
        }
        details[open] summary h3::before {
            content: "▼ ";
        }
</style>

<section>
    <h2>FACTORIZACIÓN II</h2>
    <p>Factorizar es escribir una expresión algebraica como un producto de factores. Es el proceso inverso a los productos notables: en lugar de desarrollar la multiplicación, partimos del resultado y buscamos los factores que lo originaron. En esta entrada veremos cuatro casos nuevos: suma de cubos, diferencia de cubos y los dos tipos de trinomios de segundo grado.</p>

    <h3>1. Suma de cubos</h3>
    <p>CÓMO RECONOCERLO: es un binomio con dos términos separados por un signo más, y cada término es un cubo perfecto (tiene raíz cúbica exacta). Ejemplos: 27x³ + 64, y³ + 1.<br>
<br>
REGLA: la suma de dos cubos es igual a la suma de sus raíces cúbicas, multiplicada por un trinomio formado por el cuadrado de la primera raíz, menos el producto de las dos raíces, más el cuadrado de la segunda raíz.<br>
a³ + b³ = (a + b)(a² − ab + b²)<br>
<br>
PROCEDIMIENTO:<br>
1. Saca la raíz cúbica de cada término para obtener a y b.<br>
2. Escribe el primer factor: (a + b).<br>
3. Escribe el segundo factor con a², luego −ab, luego b².<br>
<br>
Ejemplo: 27x³ + 64<br>
Raíz cúbica del primero: ∛(27x³) = 3x, así que a = 3x<br>
Raíz cúbica del segundo: ∛64 = 4, así que b = 4<br>
Primer factor: (3x + 4)<br>
Segundo factor: a² = (3x)² = 9x²; ab = (3x)(4) = 12x; b² = 4² = 16, que da (9x² − 12x + 16)<br>
Resultado: (3x + 4)(9x² − 12x + 16)<br></p>

<p>Comprobación: (3x + 4)(9x² − 12x + 16)</p>
<table>
    <tr><th>×</th><th>9x²</th><th>−12x</th><th>16</th></tr>
    <tr><th>3x</th><td>27x³</td><td>−36x²</td><td>48x</td></tr>
    <tr><th>4</th><td>36x²</td><td>−48x</td><td>64</td></tr>
  </table><br>

Suma: 27x³ + (−36x² + 36x²) + (48x − 48x) + 64 = 27x³ + 64 ✓


<h3>2. Diferencia de cubos</h3>
    <p>CÓMO RECONOCERLO: es un binomio con un signo menos entre dos cubos perfectos. Ejemplos: 8y³ − 125, x³ − 27.<br>
<br>
REGLA: la diferencia de dos cubos es igual a la resta de sus raíces cúbicas, multiplicada por un trinomio formado por el cuadrado de la primera raíz, más el producto de las dos raíces, más el cuadrado de la segunda raíz.<br>
a³ − b³ = (a − b)(a² + ab + b²)<br>
<br>
PROCEDIMIENTO: es el mismo que en la suma de cubos, pero cambian los signos: el primer factor lleva resta y en el trinomio todos los signos son positivos.<br>
<br>
Ejemplo: 8y³ − 125<br>
Raíz cúbica del primero: ∛(8y³) = 2y, así que a = 2y<br>
Raíz cúbica del segundo: ∛125 = 5, así que b = 5<br>
Primer factor: (2y − 5)<br>
Segundo factor: a² = (2y)² = 4y²; ab = (2y)(5) = 10y; b² = 5² = 25, que da (4y² + 10y + 25)<br>
Resultado: (2y − 5)(4y² + 10y + 25)<br></p>

<p>Comprobación: (2y − 5)(4y² + 10y + 25)</p>
<table>
    <tr><th>×</th><th>4y²</th><th>10y</th><th>25</th></tr>
    <tr><th>2y</th><td>8y³</td><td>20y²</td><td>50y</td></tr>
    <tr><th>−5</th><td>−20y²</td><td>−50y</td><td>−125</td></tr>
  </table><br>

Suma: 8y³ + (20y² − 20y²) + (50y − 50y) − 125 = 8y³ − 125 ✓


<h3>3. Trinomio de la forma x² + bx + c</h3>
    <p>CÓMO RECONOCERLO: es un trinomio donde el término x² no tiene coeficiente (vale 1), seguido de un término con x y un término independiente. No es un trinomio cuadrado perfecto. Ejemplos: x² − 3x − 40, x² + 8x + 15.<br>
<br>
REGLA: se buscan dos números que, multiplicados, den el término independiente (c) y, sumados, den el coeficiente de x (b). Si esos números son m y n:<br>
x² + bx + c = (x + m)(x + n), donde m · n = c y m + n = b<br>
<br>
PROCEDIMIENTO:<br>
1. Abre dos paréntesis y escribe x al inicio de cada uno.<br>
2. Busca los pares de números cuyo producto sea c.<br>
3. De esos pares, elige el que sume b. Fíjate en los signos: si c es negativo, los números tienen signos distintos y el de mayor valor absoluto lleva el signo de b; si c es positivo, ambos llevan el signo de b.<br>
4. Escribe los números en los paréntesis.<br>
<br>
Ejemplo: x² − 3x − 40<br>
Producto buscado: −40; suma buscada: −3<br>
Pares con producto −40: (1, −40), (−1, 40), (2, −20), (4, −10), (−4, 10), (5, −8), (−5, 8)<br>
El par que suma −3 es (5, −8), porque 5 + (−8) = −3<br>
Resultado: (x + 5)(x − 8)<br></p>

<p>Comprobación: (x + 5)(x − 8)</p>
<table>
    <tr><th>×</th><th>x</th><th>−8</th></tr>
    <tr><th>x</th><td>x²</td><td>−8x</td></tr>
    <tr><th>5</th><td>5x</td><td>−40</td></tr>
  </table><br>

Suma: x² − 8x + 5x − 40 = x² − 3x − 40 ✓


<h3>4. Trinomio de la forma ax² + bx + c (aspa simple)</h3>
    <p>CÓMO RECONOCERLO: es un trinomio donde el término x² tiene un coeficiente distinto de 1 (a ≠ 1) y no es un trinomio cuadrado perfecto. Ejemplos: 6x² + 7x − 20, 2x² + 11x + 12.<br>
<br>
REGLA: se descompone ax² en dos factores y c en dos factores, se acomodan en forma de aspa (una X) y se comprueba que la suma de los productos cruzados sea igual al término central bx.<br>
ax² + bx + c = (px + q)(rx + s), donde p · r = a, q · s = c y ps + qr = b<br>
<br>
PROCEDIMIENTO:<br>
1. Descompón el primer término ax² en dos factores (px y rx).<br>
2. Descompón el término independiente c en dos factores (q y s), cuidando los signos.<br>
3. Escribe los factores en dos filas y multiplica en cruz.<br>
4. Suma los dos productos cruzados. Si el resultado es bx, ya terminaste; si no, prueba con otra combinación.<br>
5. Los factores se toman en horizontal: cada fila es un paréntesis.<br>
<br>
Ejemplo: 6x² + 7x − 20<br>
Descomposición del primero: 6x² = (3x)(2x)<br>
Descomposición del último: −20 = (−4)(5)<br>
Intento fallido: (3x + 5)(2x − 4) da 3x(−4) + 5(2x) = −12x + 10x = −2x, que no es 7x<br>
Intento correcto: 3x con −4 en la primera fila y 2x con 5 en la segunda<br>
Productos cruzados: (3x)(5) = 15x y (2x)(−4) = −8x<br>
Suma de cruzados: 15x − 8x = 7x ✓<br>
Resultado: (3x − 4)(2x + 5)<br></p>

<p>Aspa: 3x · (−4) y 2x · (+5)</p>
<table>
    <tr><th>Fila</th><th>Primer término</th><th>Segundo término</th></tr>
    <tr><th>1</th><td>3x</td><td>−4</td></tr>
    <tr><th>2</th><td>2x</td><td>+5</td></tr>
  </table><br>

<p>Comprobación: (3x − 4)(2x + 5)</p>
<table>
    <tr><th>×</th><th>3x</th><th>−4</th></tr>
    <tr><th>2x</th><td>6x²</td><td>−8x</td></tr>
    <tr><th>5</th><td>15x</td><td>−20</td></tr>
  </table><br>

Suma: 6x² − 8x + 15x − 20 = 6x² + 7x − 20 ✓


<details>
    <summary><h3>Estrategia de factorización (Pica al subtitulo para ver las estrategias)</h3></summary>
    <p>Para decidir qué caso aplicar, sigue estos pasos en orden (incluye los casos de Factorización I: factor común, agrupación, diferencia de cuadrados y trinomio cuadrado perfecto):<br>
<br>
<b>Paso 1. Busca un factor común.</b> Antes de cualquier otro caso, revisa si todos los términos comparten un número o una letra. Si es así, sácalo y sigue factorizando lo que queda dentro del paréntesis.<br>
<br>
<b>Paso 2. Cuenta los términos.</b><br>
<br>
<b>Si tiene 2 términos (binomio):</b><br>
• Si es una resta de dos cuadrados perfectos: diferencia de cuadrados, a² − b² = (a + b)(a − b).<br>
• Si es una suma de dos cubos perfectos: suma de cubos, a³ + b³ = (a + b)(a² − ab + b²).<br>
• Si es una resta de dos cubos perfectos: diferencia de cubos, a³ − b³ = (a − b)(a² + ab + b²).<br>
• Si es una suma de cuadrados, no se puede factorizar con números reales.<br>
<br>
<b>Si tiene 3 términos (trinomio):</b><br>
• Si dos términos son cuadrados perfectos y el central es el doble producto de sus raíces: trinomio cuadrado perfecto, (a ± b)².<br>
• Si no es cuadrado perfecto y el coeficiente de x² es 1: trinomio x² + bx + c. Busca dos números que multiplicados den c y sumados den b.<br>
• Si no es cuadrado perfecto y el coeficiente de x² es distinto de 1: trinomio ax² + bx + c. Aplica el aspa simple.<br>
<br>
<b>Si tiene 4 o más términos:</b><br>
• Intenta factor común por agrupación: forma grupos con factor común en cada uno y saca el factor que se repite entre los grupos.<br>
<br>
<b>Paso 3. Revisa si algún factor se puede factorizar más.</b> Por ejemplo, una diferencia de cuadrados puede dar un factor que vuelve a ser diferencia de cuadrados. Repite la estrategia hasta que ya no se pueda.<br>
<br>
<b>Paso 4. Comprueba.</b> Multiplica los factores que obtuviste (con una tabla o con el producto notable correspondiente) y verifica que regresas a la expresión original.<br></p>
</details>

</section>`;
