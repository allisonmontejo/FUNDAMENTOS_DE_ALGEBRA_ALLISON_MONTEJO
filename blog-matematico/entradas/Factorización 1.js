contenidoEntrada = `
<style>
    body {
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 20px auto;
            padding: 10px;
            color: #222;
        }
        h2 {
            color: #222;
            border-bottom: 2px solid #1a5276;
            padding-bottom: 5px;
        }
        p {
            font-size: 16px;
            cursor: pointer;
            background-color: #f2f2f2;
            padding: 10px;
            border-radius: 4px;
        }
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
        ul, ol {
            background-color: #fafafa;
            padding: 15px 30px;
            border: 1px solid #ddd;
        }
        li {
            margin: 5px 0;
            cursor: pointer;
            padding: 4px;
        }
        .oculto {
            display: none;
        }
        .resaltado {
            background-color: #B1E0E3;
            color: #264F50;
        }
        .cambio-color {
            color: #c0392b;
        }
</style>

<section>
    <h2 id="text" style="color: #AAAAAA">FACTORIZACIÓN 1</h2>
    <p>Factorizar es escribir una expresión como un producto de factores. Es el camino inverso de multiplicar. Como regla general, busca primero el término común, porque a veces simplifica el resto del problema.</p>

    <h3>1. Factor (término) común</h3>
    <p>Todos los términos del polinomio comparten algo, ya sea un número, una letra o ambos.<br>
    <p onclick="alternarLista('procedimiento')">Procedimiento
</p>
    <ul id="procedimiento">
   <li onclick="resaltarElemento(this)">Busca el mayor número que divide a todos los coeficientes (su MCD).</li>
   <li onclick="resaltarElemento(this)">Toma cada letra que aparezca en todos los términos, con su menor exponente.</li>
   <li onclick="resaltarElemento(this)">Multiplica ambas partes: ese es el factor común.</li> 
   <li onclick="resaltarElemento(this)">Divide cada término entre el factor común y escribe los resultados dentro de un paréntesis.</li>
</ul>

Ejemplo: Factoriza 12a³b² − 18a²b³ + 6a²b<br>
<li>Coeficientes: el MCD de 12, 18 y 6 es 6
    Letras: a aparece con exponentes 3, 2 y 2, así que va a². b aparece con 2, 3 y 1, así que va b.<br>
    Factor común: 6a²b<br>
    Divisiones: 12a³b² ÷ 6a²b = 2ab, −18a²b³ ÷ 6a²b = −3b², y 6a²b ÷ 6a²b = 1.<br></li>

Resultado: 6a²b(2ab − 3b² + 1)<br>
Comprobación: 6a²b * 2ab = 12a³b², 6a²b * (−3b²) = −18a²b³ y 6a²b * 1<br>
= 6a²b. Al sumar queda 12a³b² − 18a²b³ + 6a²b<br>


<h3>2. Trinomio cuadrado perfecto (TCP)</h3>
    <p>Es un trinomio donde el primer y el tercer término son cuadrados perfectos, y el término de en medio es el doble producto de sus raíces.<br>
    <p>Procedimiento:</p>
    <ul>
     1. Saca la raíz cuadrada del primer término y del tercero.<br>
     2.Multiplica las dos raíces por 2 y verifica que el resultado coincida con el término central. Si no coincide, no es un TCP.<br>
     3.Escribe el binomio con las dos raíces elevado al cuadrado, usando el signo del término central.<br></ul>
<br>
Ejemplo: Factoriza 49x² − 84x + 36<br>
<li>√(49x²) = 7x y √36 = 6.<br>
Doble producto: 2 * 7x * 6 = 84x, que coincide con el término central. El signo es negativo.<br></li>

Resultado: (7x − 6)²<br>
Comprobación: (7x − 6)(7x − 6) = 49x² − 42x − 42x + 36 = 49x² − 84x + 36<br>


<h3>3. Diferencia de cuadrados</h3>
    <p>Es un binomio con resta donde ambos términos son cuadrados perfectos. Una suma de cuadrados no se factoriza de esta forma.<br>
    <p>Procedimiento:</p>
    <ul>
     1. Saca la raíz cuadrada de cada término.<br>
     2.Escribe dos paréntesis: en uno las raíces se restan y en el otro se suman.<br>
     3.Revisa si algún factor se puede factorizar otra vez.<br></ul>
<br>
Ejemplo: Factoriza 81x⁴ − 100y⁶<br>
<li>√(81x⁴) = 9x² y √(100y⁶) = 10y³ (los exponentes se dividen entre 2).<br></li>

Resultado: (9x² − 10y³)(9x² + 10y³)<br>
Comprobación: 81x⁴ + 90x²y³ − 90x²y³ − 100y⁶ = 81x⁴ − 100y⁶ ✓ (los términos centrales se cancelan).<br>

<h3>Ida y regreso</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Factorización (regreso)</th>
      <th>Producto notable (ida)</th>
      <th>Qué ocurre al ir y volver</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Factor común:</strong> ab + ac → a(b + c)</td>
      <td><strong>Propiedad distributiva:</strong> a(b + c) = ab + ac</td>
      <td>Al multiplicar, el factor común se reparte entre todos los términos. Al factorizar, se vuelve a sacar.</td>
    </tr>
    <tr>
      <td><strong>TCP:</strong> a<sup>2</sup> ± 2ab + b<sup>2</sup> → (a ± b)<sup>2</sup></td>
      <td><strong>Cuadrado de un binomio:</strong> (a ± b)<sup>2</sup> = a<sup>2</sup> ± 2ab + b<sup>2</sup></td>
      <td>Al elevar al cuadrado aparece el doble producto en medio. Al factorizar, ese término confirma que es un TCP.</td>
    </tr>
    <tr>
      <td><strong>Diferencia de cuadrados:</strong> a<sup>2</sup> − b<sup>2</sup> → (a + b)(a − b)</td>
      <td><strong>Binomios conjugados:</strong> (a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup></td>
      <td>Al multiplicar conjugados, los términos centrales se cancelan. Al factorizar, se reconstruyen.</td>
    </tr>
  </tbody>
</table>
</section>`;
