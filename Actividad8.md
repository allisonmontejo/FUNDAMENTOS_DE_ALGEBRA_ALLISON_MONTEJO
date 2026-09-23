1. Conversión de binario a decimal

Para convertir un número binario a decimal, se multiplica cada bit por la potencia de 2 correspondiente, comenzando con (2^0) desde la derecha.

73) 00001111

[
0(2^7)+0(2^6)+0(2^5)+0(2^4)+1(2^3)+1(2^2)+1(2^1)+1(2^0)
]

[
=8+4+2+1=15
]

Respuesta: (\boxed{15})

74) 10011001

[
1(128)+0(64)+0(32)+1(16)+1(8)+0(4)+0(2)+1(1)
]

[
=128+16+8+1=153
]

Respuesta: (\boxed{153})

75) 11001100

[
128+64+0+0+8+4+0+0=204
]

Respuesta: (\boxed{204})

76) 01111011

[
0+64+32+16+8+0+2+1=123
]

Respuesta: (\boxed{123})

77) 00000000 11111111

Los primeros 8 bits representan 0. Los últimos 8 bits representan:

[
128+64+32+16+8+4+2+1=255
]

Respuesta: (\boxed{255})

78) 00000010 00000000

El único bit encendido corresponde a (2^9):

[
2^9=512
]

Respuesta: (\boxed{512})

2. Conversión de binario a octal

Para convertir de binario a octal se agrupan los bits de 3 en 3:

Binario

Octal

000

0

001

1

010

2

011

3

100

4

101

5

110

6

111

7

79) 11010101

Se agrega un cero a la izquierda:

011 010 101

[
011=3,\quad010=2,\quad101=5
]

Respuesta: (\boxed{325_8})

80) 01101110

001 101 110

[
001=1,\quad101=5,\quad110=6
]

Respuesta: (\boxed{156_8})

81) 10110011

010 110 011

[
010=2,\quad110=6,\quad011=3
]

Respuesta: (\boxed{263_8})

82) 00000000 11111111

000 000 011 111 111

[
0,\ 0,\ 3,\ 7,\ 7
]

Respuesta: (\boxed{377_8})

83) 00000011 11000000

000 000 111 100 000

[
0,\ 0,\ 7,\ 4,\ 0
]

Respuesta: (\boxed{740_8})

84) 00000101 01010101

000 000 101 010 101

[
0,\ 0,\ 5,\ 2,\ 5
]

Respuesta: (\boxed{525_8})

3. Conversión de binario a hexadecimal

Para convertir de binario a hexadecimal se agrupan los bits de 4 en 4.

Binario

Hexadecimal

0000

0

0001

1

0010

2

0011

3

0100

4

0101

5

0110

6

0111

7

1000

8

1001

9

1010

A

1011

B

1100

C

1101

D

1110

E

1111

F

85) 11011010

1101 1010

[
1101=D,\quad1010=A
]

Respuesta: (\boxed{DA_{16}})

86) 01111100

0111 1100

[
0111=7,\quad1100=C
]

Respuesta: (\boxed{7C_{16}})

87) 10110101

1011 0101

[
1011=B,\quad0101=5
]

Respuesta: (\boxed{B5_{16}})

88) 11110000 10100101

1111 0000 1010 0101

[
F\quad0\quad A\quad5
]

Respuesta: (\boxed{F0A5_{16}})

89) 00001111 00001111

0000 1111 0000 1111

[
0\quad F\quad0\quad F
]

Respuesta: (\boxed{0F0F_{16}})

90) 10000000 00000001

1000 0000 0000 0001

[
8\quad0\quad0\quad1
]

Respuesta: (\boxed{8001_{16}})

4. Conversión de octal a binario

Cada dígito octal equivale a 3 bits.

91) 325

[
3=011,\quad2=010,\quad5=101
]

325₈ = 011 010 101₂

Respuesta: (\boxed{011010101_2})

92) 156

[
1=001,\quad5=101,\quad6=110
]

156₈ = 001 101 110₂

Respuesta: (\boxed{001101110_2})

93) 377

[
3=011,\quad7=111,\quad7=111
]

377₈ = 011 111 111₂

Respuesta: (\boxed{011111111_2})

94) 01777

[
0=000,\quad1=001,\quad7=111,\quad7=111,\quad7=111
]

Respuesta: (\boxed{000001111111_2})

95) 03700

[
0=000,\quad3=011,\quad7=111,\quad0=000
]

Respuesta: (\boxed{000011111000_2})

96) 05255

[
0=000,\quad5=101,\quad2=010,\quad5=101,\quad5=101
]

05255₈ = 000 101 010 101 101₂

Respuesta: (\boxed{000101010101101_2})

5. Conversión de hexadecimal a binario

Cada dígito hexadecimal equivale a 4 bits.

97) DA

[
D=1101,\quad A=1010
]

Respuesta: (\boxed{11011010_2})

98) 7C

[
7=0111,\quad C=1100
]

Respuesta: (\boxed{01111100_2})

99) B5

[
B=1011,\quad5=0101
]

Respuesta: (\boxed{10110101_2})

100) F0A5

[
F=1111,\quad0=0000,\quad A=1010,\quad5=0101
]

Respuesta: (\boxed{1111000010100101_2})

101) 0F0F

[
0=0000,\quad F=1111,\quad0=0000,\quad F=1111
]

Respuesta: (\boxed{0000111100001111_2})

102) 8001

[
8=1000,\quad0=0000,\quad0=0000,\quad1=0001
]

Respuesta: (\boxed{1000000000000001_2})

6. Clasificación de polinomios

Se clasifican considerando el exponente mayor y el número de términos.

103) (5n+5)

El exponente mayor es 1 y existen 2 términos.

Respuesta: Binomio lineal.

104) (-10p^3-6+9p^2-4p^5-2p^8)

El exponente mayor es 8 y existen 5 términos.

Respuesta: Polinomio de grado 8 con 5 términos.

105) (7x^8)

Existe un solo término y el grado es 8.

Respuesta: Monomio de grado 8.

106) (-2n+n^4+10n^6)

El exponente mayor es 6 y existen 3 términos.

Respuesta: Trinomio de grado 6.

107) (5)

Es una constante, por lo que su grado es 0 y tiene un término.

Respuesta: Monomio constante.

108) (5v^7)

Existe un solo término y el grado es 7.

Respuesta: Monomio de grado 7.

7. Problemas de aplicación

109) Amy y Jill

Amy puede realizar el trabajo sola en 8 horas.

Su tasa de trabajo es:

[
\frac{1}{8}
]

Sea (x) el número de horas que necesita Jill sola. Su tasa es:

[
\frac{1}{x}
]

Juntas tardan 3.08 horas:

[
\frac{1}{8}+\frac{1}{x}=\frac{1}{3.08}
]

Despejamos:

[
\frac{1}{x}=\frac{1}{3.08}-\frac{1}{8}
]

[
\frac{1}{x}\approx0.199675
]

Por lo tanto:

[
x\approx5.008
]

Respuesta: (\boxed{5.01\text{ horas aproximadamente}})

110) Jaidee y Ted

Jaidee realiza el trabajo en 5 horas:

[
\frac{1}{5}
]

Ted lo realiza en 7 horas:

[
\frac{1}{7}
]

Trabajando juntos:

[
\frac{1}{5}+\frac{1}{7}
]

[
=\frac{7}{35}+\frac{5}{35}
]

[
=\frac{12}{35}
]

El tiempo es el inverso de la tasa:

[
t=\frac{35}{12}
]

[
t\approx2.92
]

Respuesta: (\boxed{2.92\text{ horas aproximadamente}})

Equivale aproximadamente a:

[
\boxed{2\text{ h }55\text{ min}}
]

111) Avión de carga

El avión de la Fuerza Aérea viajó a:

[
310\text{ km/h}
]

durante 6 horas.

La distancia recorrida fue:

[
d=vt
]

[
d=310(6)=1860\text{ km}
]

El avión de carga salió 4 horas antes. Por lo tanto, cuando fue alcanzado había viajado:

[
4+6=10\text{ horas}
]

Su velocidad era:

[
v=\frac{d}{t}
]

[
v=\frac{1860}{10}=186
]

Respuesta: (\boxed{186\text{ km/h}})

112) Tren de carga

El viaje de regreso fue a 49 km/h durante 10 horas:

[
d=49(10)=490\text{ km}
]

La distancia de ida es la misma:

[
d=490\text{ km}
]

La velocidad de ida fue 35 km/h:

[
t=\frac{d}{v}
]

[
t=\frac{490}{35}=14
]

Respuesta: (\boxed{14\text{ horas}})

113) Mezcla de tierra

Tenemos:

(1,yd^3) de tierra con 30% de arena.

(4,yd^3) de tierra con 20% de arena.

Arena de la primera cantidad:

[
1(0.30)=0.30,yd^3
]

Arena de la segunda cantidad:

[
4(0.20)=0.80,yd^3
]

Arena total:

[
0.30+0.80=1.10,yd^3
]

Tierra total:

[
1+4=5,yd^3
]

Porcentaje de arena:

[
\frac{1.10}{5}=0.22
]

[
0.22(100)=22%
]

Respuesta: (\boxed{22%})

114) Ponche de frutas

Marca A

Hay 7 L con 11% de jugo:

[
7(0.11)=0.77,L
]

Marca B

Hay 6 L con 24% de jugo:

[
6(0.24)=1.44,L
]

Jugo total:

[
0.77+1.44=2.21,L
]

Mezcla total:

[
7+6=13,L
]

Porcentaje de jugo:

[
\frac{2.21}{13}(100)=17%
]

Respuesta: (\boxed{17%})
