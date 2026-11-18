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
</style>

<section>
    <h2>PRODUCTOS NOTABLES</h2>
    <p>Los productos notables son operaciones algebraicas, donde se expresan multiplicaciones de polinomios, que no necesitan ser resueltas tradicionalmente, sino que con la ayuda de ciertas reglas se pueden encontrar los resultados de las mismas.</p>

    <h3>1. Binomio al cuadrado</h3>
    <p>REGLA: el cuadrado de una suma o resta es el cuadrado del primer término, más (o menos) el doble producto del primero por el segundo, más el cuadrado del segundo.<br>
(a ± b)² = a² ± 2ab + b²<br>
<br>
Ejemplo: (3x + 5)²<br>
Cuadrado del primero: (3x)² = 9x²<br>
Doble producto: 2(3x)(5) = 30x<br>
Cuadrado del segundo: 5² = 25<br>
Resultado: 9x² + 30x + 25<br></p>

<table>
    <tr><th>×</th><th>3x</th><th>5</th></tr>
    <tr><th>3x</th><td>9x²</td><td>15x</td></tr>
    <tr><th>5</th><td>15x</td><td>25</td></tr>
  </table><br>

Suma: 9x² + 15x + 15x + 25 = 9x² + 30x + 25


<h3>2. Binomio al cubo</h3>
    <p>REGLA: el cubo de un binomio es el cubo del primero, más (o menos) el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, más (o menos) el cubo del segundo. Si el binomio es una resta, los signos se alternan.<br>
(a ± b)³ = a³ ± 3a²b + 3ab² ± b³<br>
<br>
Ejemplo: (2x − 3)³<br>
Cubo del primero: (2x)³ = 8x³<br>
Triple del cuadrado del primero por el segundo: −3(2x)²(3) = −3(4x²)(3) = −36x²<br>
Triple del primero por el cuadrado del segundo: +3(2x)(3)² = 3(2x)(9) = 54x<br>
Cubo del segundo: −(3)³ = −27<br>
Resultado: 8x³ − 36x² + 54x − 27<br></p>

<p>Paso A: (2x − 3)(2x − 3)</p>
  <table>
    <tr><th>×</th><th>2x</th><th>−3</th></tr>
    <tr><th>2x</th><td>4x²</td><td>−6x</td></tr>
    <tr><th>−3</th><td>−6x</td><td>9</td></tr>
  </table>
  <p>Resultado: 4x² − 12x + 9</p>
 
  <p>Paso B: (4x² − 12x + 9)(2x − 3)</p>
  <table>
    <tr><th>×</th><th>2x</th><th>−3</th></tr>
    <tr><th>4x²</th><td>8x³</td><td>−12x²</td></tr>
    <tr><th>−12x</th><td>−24x²</td><td>36x</td></tr>
    <tr><th>9</th><td>18x</td><td>−27</td></tr>
  </table><br>

Suma: 8x³ + (−12x² − 24x²) + (36x + 18x) − 27 = 8x³ − 36x² + 54x − 27


<h3>3. Binomios con un término común</h3>
    <p>REGLA: al multiplicar dos binomios que comparten un término, se obtiene el cuadrado del término común, más la suma de los términos distintos multiplicada por el común, más el producto de los términos distintos.<br>
(x + a)(x + b) = x² + (a + b)x + ab<br>
<br>
Ejemplo: (x + 7)(x − 4)<br>
Cuadrado del común: x²<br>
Suma de los distintos: 7 + (−4) = 3, que da +3x<br>
Producto de los distintos: (7)(−4) = −28<br>
Resultado: x² + 3x − 28<br></p>

<table>
    <tr><th>×</th><th>x</th><th>−4</th></tr>
    <tr><th>x</th><td>x²</td><td>−4x</td></tr>
    <tr><th>7</th><td>7x</td><td>−28</td></tr>
  </table><br>

Suma: x² − 4x + 7x − 28 = x² + 3x − 28


<h3>4. Binomios conjugados</h3>
    <p>REGLA: dos binomios son conjugados cuando tienen los mismos términos, pero uno con suma y el otro con resta. Su producto es el cuadrado del primer término menos el cuadrado del segundo, porque los términos de en medio se cancelan.<br>
(a + b)(a − b) = a² − b²<br>
<br>
Ejemplo: (4x + 3y)(4x − 3y)<br>
Cuadrado del primero: (4x)² = 16x²<br>
Cuadrado del segundo: (3y)² = 9y²<br>
Resultado: 16x² − 9y²<br></p>

<table>
    <tr><th>×</th><th>4x</th><th>−3y</th></tr>
    <tr><th>4x</th><td>16x²</td><td>−12xy</td></tr>
    <tr><th>3y</th><td>12xy</td><td>−9y²</td></tr>
  </table><br>

Suma: 16x² − 12xy + 12xy − 9y² = 16x² − 9y²

</section>`;
