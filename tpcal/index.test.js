const Addition = require('.');

test('Additionne 1 et 2 pour arriver à 3', () => {
    expect(Addition(1, 2)).toBe(3);
});

test('Additionne -1 et 2 pour arriver à 1', () => {
    expect(Addition(-1, 2)).toBe(1);
});

test('Additionne 1 et -2 pour arriver à -1', () => {
    expect(Addition(1, -2)).toBe(-1);
});

test('Additionne -1 et -2 pour arriver à -1', () => {
    expect(Addition(-1, -2)).toBe(-3);
});


const Division = require('.');
const DividedByZeroError = require('../Errors/DividedByZeroError');

/*
 * Tests en fonction des paramètres
 */

test('Divise 25 par 5 pour obtenir 5', () => {
    expect(Division(25, 5)).toBe(5);
});

test('Divise -25 par 5 pour obtenir -5', () => {
    expect(Division(-25, 5)).toBe(-5);
});

test('Divise 25 par -5 pour obtenir -5', () => {
    expect(Division(25, -5)).toBe(-5);
});

test('Divise -25 par -5 pour obtenir 5', () => {
    expect(Division(-25, -5)).toBe(5);
});

/*
 * Les prochains tests utilisent une fonction anonyme au lieu d'utiliser une instance de Division directement afin
 * de recupérer les erreurs comme DividedByZeroError.
 */

test('Divise un nombre positif par zero afin d\'obtenir une erreur.', () => {
    expect(() => Division(Math.floor(Math.random() * 100) + 1, 0)).toThrow(DividedByZeroError);
});

test('Divise un nombre négatif par zero afin d\'obtenir une erreur.', () => {
    expect(() => Division((Math.floor(Math.random() * 100) + 1) * -1, 0)).toThrow(DividedByZeroError);
});

const Multiplication = require('.');

test('Multiplie 7 par 4 pour obtenir 28', () => {
    expect(Multiplication(7, 4)).toBe(28);
});

test('Multiplie -7 par 4 pour obtenir -28', () => {
    expect(Multiplication(-7, 4)).toBe(-28);
});

test('Multiplie 7 par -4 pour obtenir -28', () => {
    expect(Multiplication(7, -4)).toBe(-28);
});

test('Multiplie -7 par -4 pour obtenir 28', () => {
    expect(Multiplication(-7, -4)).toBe(28);
});


const Soustraction = require('.');

test('Soustrait 24 par 17 pour obtenir 7', () => {
    expect(Soustraction(24, 17)).toBe(7);
});

test('Soustrait -24 par 17 pour obtenir -41', () => {
    expect(Soustraction(-24, 17)).toBe(-41);
});

test('Soustrait 24 par -17 pour obtenir 41', () => {
    expect(Soustraction(24, -17)).toBe(41);
});

test('Soustrait -24 par -17 pour obtenir -7', () => {
    expect(Soustraction(-24, -17)).toBe(-7);
});
