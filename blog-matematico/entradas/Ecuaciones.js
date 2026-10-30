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
    }
    th {
        background-color: #2980b9;
        color: white;
    }
</style>

<section>
    <h2>ECUACIONES DE PRIMER GRADO</h2>
    <p>Una ecuación de primer grado (o lineal) con una incógnita es una igualdad que, una vez simplificada, puede escribirse como ax + b = 0, con a ≠ 0. Resolverla es encontrar el valor de la incógnita que hace verdadera la igualdad.</p>

    <h3>1. Procedimiento general</h3>
    <ol>
        <li><strong>Suprimir signos de agrupación:</strong> aplica la propiedad distributiva y elimina paréntesis, corchetes y llaves, empezando por los más internos. Cuida los signos: un signo menos delante cambia todos los signos de adentro.</li>
        <li><strong>Eliminar denominadores:</strong> multiplica ambos miembros por el mínimo común múltiplo (MCM) de los denominadores.</li>
        <li><strong>Reducir términos semejantes</strong> en cada miembro por separado.</li>
        <li><strong>Transponer términos:</strong> pasa los términos con la incógnita a un miembro y los números al otro, cambiando el signo al cambiarlos de lado.</li>
        <li><strong>Reducir</strong> nuevamente hasta obtener la forma ax = b.</li>
        <li><strong>Despejar:</strong> divide ambos miembros entre el coeficiente de la incógnita: x = b / a.</li>
        <li><strong>Comprobar:</strong> sustituye el valor en la ecuación original; los dos miembros deben dar el mismo resultado.</li>
    </ol>

    <h3>2. Ejemplos resueltos y comprobados</h3>

    <h4>a) Ecuación entera</h4>
    <p>5x − 7 = 3x + 9<br>
    Transponer: 5x − 3x = 9 + 7<br>
    Reducir: 2x = 16<br>
    Despejar: x = 16 / 2 = 8<br>
    <strong>Comprobación:</strong><br>
    Izquierda: 5(8) − 7 = 40 − 7 = 33<br>
    Derecha: 3(8) + 9 = 24 + 9 = 33<br>
    33 = 33 ✓</p>

    <h4>b) Ecuación fraccionaria</h4>
    <p>(x + 2)/4 + (x − 1)/5 = 3<br>
    MCM de 4 y 5 = 20. Multiplicamos todo por 20:<br>
    5(x + 2) + 4(x − 1) = 60<br>
    Distribuir: 5x + 10 + 4x − 4 = 60<br>
    Reducir: 9x + 6 = 60<br>
    Transponer: 9x = 60 − 6 = 54<br>
    Despejar: x = 54 / 9 = 6<br>
    <strong>Comprobación:</strong><br>
    (6 + 2)/4 + (6 − 1)/5 = 8/4 + 5/5 = 2 + 1 = 3<br>
    3 = 3 ✓</p>

    <h4>c) Ecuación con signos de agrupación</h4>
    <p>3x − [2x − (x − 4)] = 6 − 2(x + 1)<br>
    Paréntesis interno: 3x − [2x − x + 4] = 6 − 2x − 2<br>
    Reducir dentro del corchete: 3x − [x + 4] = 4 − 2x<br>
    Quitar el corchete: 3x − x − 4 = 4 − 2x<br>
    Reducir: 2x − 4 = 4 − 2x<br>
    Transponer: 2x + 2x = 4 + 4<br>
    Reducir: 4x = 8<br>
    Despejar: x = 8 / 4 = 2<br>
    <strong>Comprobación:</strong><br>
    Izquierda: 3(2) − [2(2) − (2 − 4)] = 6 − [4 − (−2)] = 6 − 6 = 0<br>
    Derecha: 6 − 2(2 + 1) = 6 − 6 = 0<br>
    0 = 0 ✓</p>

    <h4>d) Ecuación literal (despejar x en términos de a)</h4>
    <p>3(x − a) = 2x + 5a<br>
    Distribuir: 3x − 3a = 2x + 5a<br>
    Transponer: 3x − 2x = 5a + 3a<br>
    Reducir: x = 8a<br>
    <strong>Comprobación:</strong><br>
    Izquierda: 3(8a − a) = 3(7a) = 21a<br>
    Derecha: 2(8a) + 5a = 16a + 5a = 21a<br>
    21a = 21a ✓</p>

    <h3>3. Problema de planteamiento propio</h3>
    <p><strong>Enunciado:</strong> Al desplegar mi proyecto web puedo elegir entre dos planes de hosting. El Plan A cobra $120 fijos al mes más $8 por cada GB de almacenamiento extra. El Plan B cobra $60 fijos al mes más $14 por cada GB extra. ¿Con cuántos GB extra cuestan lo mismo los dos planes y cuánto se paga?</p>

    <table>
        <tr><th>Paso</th><th>Desarrollo</th></tr>
        <tr><td>1. Incógnita</td><td>x = número de GB extra con los que ambos planes cuestan igual.</td></tr>
        <tr><td>2. Traducción</td><td>Costo del Plan A: 120 + 8x<br>Costo del Plan B: 60 + 14x<br>"Cuestan lo mismo" significa que son iguales.</td></tr>
        <tr><td>3. Ecuación</td><td>120 + 8x = 60 + 14x</td></tr>
        <tr><td>4. Solución</td><td>8x − 14x = 60 − 120<br>−6x = −60<br>x = (−60)/(−6) = 10</td></tr>
        <tr><td>5. Validación contra el enunciado</td><td>Plan A con 10 GB: 120 + 8(10) = 120 + 80 = $200<br>Plan B con 10 GB: 60 + 14(10) = 60 + 140 = $200<br>Ambos cuestan $200 ✓. El resultado es positivo y tiene sentido como cantidad de GB.</td></tr>
    </table>

    <p><strong>Respuesta:</strong> con 10 GB extra los dos planes cuestan $200 al mes. Con menos de 10 GB conviene el Plan B y con más de 10 GB conviene el Plan A.</p>
</section>`;
