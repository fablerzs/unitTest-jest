const { suma, resta, multiplicacion, division } = require ('../calc')


describe ('Prueba de funciones basicas', () => {

 test ('suma de dos numeros', () => {
    expect(suma(2,2)).toBe(4)
 })

 test ('resta de dos numeros', () => {
    expect(resta(2,2)).toBe(0)
 })

 test ('multiplicacion de dos numeros', () => {
    expect(multiplicacion(2,2)).toBe(4)
 })

 test ('division de dos numeros', () => {
    expect(division(2,2)).toBe(1)
 })
 


})