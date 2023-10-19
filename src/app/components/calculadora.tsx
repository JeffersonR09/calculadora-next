'use client'

import React, { useState } from 'react';
import Display from './display'; // Asumiendo que el componente Display está en './Display'
import Keyboard from './keyboard'; // Asumiendo que el componente Keyboard está en './Keyboard'

function Calculadora() {
  const [texto, setTexto] = useState<string>(''); // Especifica el tipo de estado
  const [resultado, setResultado] = useState<string | number>(''); // Especifica el tipo de estado

  const handleKeyPress = (key: string) => {
    if (key === '=') {
      try {
        const calculandoResultado = calculateExpression(texto);
        setResultado(calculandoResultado);
        setTexto(calculandoResultado.toString());
      } catch (error) {
        setResultado('Error');
      }
    } else if (key === 'Clear') {
      setTexto('');
      setResultado('');
    } else {
      setTexto((prevText) => prevText + key);
    }
  };

  const calculateExpression = (expression: string) => {
    try {
      const regex = /(\d+)\s*([\+\-\*\/])\s(\d+)/;
      const match = expression.match(regex);

      if (!match) {
        throw new Error('Expresión no válida');
      }

      const numero1 = parseFloat(match[1]);
      const operator = match[2];
      const numero2 = parseFloat(match[3]);

      const operators: { [key: string]: (a: number, b: number) => number } = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => {
          if (b === 0) {
            throw new Error('División por cero');
          }
          return a / b;
        }
      };

      if (operators.hasOwnProperty(operator)) {
        return operators[operator](numero1, numero2);
      } else {
        throw new Error('Operador no válido');
      }
    } catch (error) {
      throw new Error('Error al calcular la expresión: ');
    }
  };

  return (
    <div className="border rounded-3xl bg-gray-500">
      <Display texto={texto} resultado={resultado} />
      <Keyboard keyPress={handleKeyPress} />
    </div>
  );
}

export default Calculadora;