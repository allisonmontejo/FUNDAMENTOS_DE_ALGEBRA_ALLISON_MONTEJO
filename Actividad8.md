# Solución Ejercicios 73–114 — Unidad 1

## Conversión de binario a decimal (73–78)

| # | Binario | Procedimiento | Resultado |
|---|---------|----------------|-----------|
| 73 | 00001111 | 8+4+2+1 | **15** |
| 74 | 10011001 | 128+16+8+1 | **153** |
| 75 | 11001100 | 128+64+8+4 | **204** |
| 76 | 01111011 | 64+32+16+8+2+1 | **123** |
| 77 | 00000000 11111111 | byte alto=0, byte bajo=255 → 0(256)+255 | **255** |
| 78 | 00000010 00000000 | byte alto=2, byte bajo=0 → 2(256)+0 | **512** |

## Conversión de binario a octal (79–84)

| # | Binario | Agrupación (3 bits) | Resultado |
|---|---------|----------------------|-----------|
| 79 | 11010101 | 011 010 101 | **325** |
| 80 | 01101110 | 001 101 110 | **156** |
| 81 | 10110011 | 010 110 011 | **263** |
| 82 | 00000000 11111111 | 000 000 011 111 111 | **377** |
| 83 | 00000011 11000000 | 000 001 111 000 000 | **1700** |
| 84 | 00000101 01010101 | 000 000 101 010 101 01 | **2525** |

## Conversión de binario a hexadecimal (85–90)

| # | Binario | Agrupación (4 bits) | Resultado |
|---|---------|----------------------|-----------|
| 85 | 11011010 | 1101 1010 | **DA** |
| 86 | 01111100 | 0111 1100 | **7C** |
| 87 | 10110101 | 1011 0101 | **B5** |
| 88 | 11110000 10100101 | 1111 0000 1010 0101 | **F0A5** |
| 89 | 00001111 00001111 | 0000 1111 0000 1111 | **0F0F** |
| 90 | 10000000 00000001 | 1000 0000 0000 0001 | **8001** |

## Conversión de octal a binario (91–96)

| # | Octal | Procedimiento | Resultado |
|---|-------|----------------|-----------|
| 91 | 325 | 3=011, 2=010, 5=101 | **011 010 101** |
| 92 | 156 | 1=001, 5=101, 6=110 | **001 101 110** |
| 93 | 377 | 3=011, 7=111, 7=111 | **011 111 111** |
| 94 | 01777 | 0=000,1=001,7=111,7=111,7=111 | **000 001 111 111 111** |
| 95 | 03700 | 0=000,3=011,7=111,0=000,0=000 | **000 011 111 000 000** |
| 96 | 05255 | 0=000,5=101,2=010,5=101,5=101 | **000 101 010 101 101** |

## Conversión de hexadecimal a binario (97–102)

| # | Hex | Procedimiento | Resultado |
|---|-----|----------------|-----------|
| 97 | DA | D=1101, A=1010 | **11011010** |
| 98 | 7C | 7=0111, C=1100 | **01111100** |
| 99 | B5 | B=1011, 5=0101 | **10110101** |
| 100 | F0A5 | F=1111,0=0000,A=1010,5=0101 | **1111000010100101** |
| 101 | 0F0F | 0=0000,F=1111,0=0000,F=1111 | **0000111100001111** |
| 102 | 8001 | 8=1000,0=0000,0=0000,1=0001 | **1000000000000001** |

## Clasificación de polinomios (103–108)

| # | Polinomio | Grado | N° términos | Clasificación |
|---|-----------|-------|-------------|----------------|
| 103 | 5n + 5 | 1 | 2 | **Binomio de primer grado** |
| 104 | -10p³ - 6 + 9p² - 4p⁵ - 2p⁸ | 8 | 5 | **Polinomio de grado 8 con 5 términos** |
| 105 | 7x⁸ | 8 | 1 | **Monomio de grado 8** |
| 106 | -2n + n⁴ + 10n⁶ | 6 | 3 | **Trinomio de grado 6** |
| 107 | 5 | 0 | 1 | **Monomio de grado 0 (constante)** |
| 108 | 5v⁷ | 7 | 1 | **Monomio de grado 7** |

## Problemas de aplicación (109–114)

### 109) Trabajo conjunto — Amy y Jill
Amy: 8 h; juntas: 3.08 h.

Ecuación: 1/8 + 1/x = 1/3.08

1/x = 1/3.08 − 1/8 = 0.324675 − 0.125 = 0.199675

x = 1/0.199675 ≈ **5.01 horas**

### 110) Trabajo conjunto — Jaidee y Ted
Jaidee: 5 h; Ted: 7 h.

1/5 + 1/7 = 7/35 + 5/35 = 12/35

tiempo = 35/12 ≈ **2.92 horas (≈ 2 h 55 min)**

### 111) Velocidad del avión de carga
El avión de la Fuerza Aérea voló 6 h a 310 km/h → distancia recorrida = 6 × 310 = 1860 km

El avión de carga voló 4 + 6 = 10 h para cubrir esa misma distancia (salió 4 h antes)

velocidad = 1860 / 10 = **186 km/h**

### 112) Tren de carga
El regreso tomó 10 h a 49 km/h → distancia = 49 × 10 = 490 km (misma distancia ida y vuelta)

tiempo de ida = 490 / 35 = **14 horas**

### 113) Mezcla de tierra con arena
Arena total = 1(0.30) + 4(0.20) = 0.30 + 0.80 = 1.10 yd³

Volumen total = 1 + 4 = 5 yd³

porcentaje = 1.10 / 5 = **22%**

### 114) Mezcla de ponche
Jugo total = 7(0.11) + 6(0.24) = 0.77 + 1.44 = 2.21 L

Volumen total = 7 + 6 = 13 L

porcentaje = 2.21 / 13 = **17%**
