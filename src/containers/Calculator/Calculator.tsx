import React, { useState } from 'react';
import { evaluate, round } from 'mathjs';

export const Calculator = () => {
  const [calcValue, setCalcValue] = useState('');

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const inputValue = (event.target as HTMLInputElement).value;

    switch (inputValue) {
      case 'x':
        setCalcValue(calcValue + inputValue.replace('x', '*'));
        break;
      case '÷':
        setCalcValue(calcValue + inputValue.replace('÷', '/'));
        break;
      case '=':
        setCalcValue(evaluate(calcValue));
        break;
      case 'Clear':
        setCalcValue('');
        break;
      default:
        setCalcValue(calcValue + inputValue);
        break;
    }
  };

  const operators = ['x', '-', '+', '/', '.', '=', 'Clear'];

  const buildRow = (array: any) =>
    array.map((item: number | string, index: number) => {
      const isOperator = new Set(operators).has(`${item}`) ? 'is-operator' : '';

      return (
        <button
          key={`button-${index}`}
          className={isOperator}
          value={item}
          onClick={(e) => handleClick(e)}
        >
          {item}
        </button>
      );
    });

  return (
    <div>
      <div>
        <div className="calc-entry" data-testid="entry">
          {calcValue}
        </div>
      </div>

      <div>{buildRow([7, 8, 9, 'x'])}</div>
      <div>{buildRow([4, 5, 6, '-'])}</div>
      <div>{buildRow([1, 2, 3, '+'])}</div>
      <div>{buildRow([0, '.', '=', '÷'])}</div>

      <div>
        <div>{buildRow(['Clear'])}</div>
      </div>
    </div>
  );
};
