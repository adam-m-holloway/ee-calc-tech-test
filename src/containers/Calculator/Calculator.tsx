import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Caculator.css';
import eeLogo from '../../assets/images/ee-logo.svg';

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

  const operators = ['x', '-', '+', '÷', '.', '=', 'Clear'];

  const buildRow = (array: any) =>
    array.map((item: number | string, index: number) => {
      const isOperator = new Set(operators).has(`${item}`) ? 'is-operator' : '';

      return (
        <button
          key={`button-${index}`}
          className={`calc-button ${isOperator}`}
          value={item}
          onClick={(e) => handleClick(e)}
        >
          {item}
        </button>
      );
    });

  return (
    <div data-testid="calc" className="calc">
      <div className="calc-wrapper">
        <div className="calc-header">
          <img src={eeLogo} alt="EE logo" width="150" height="40" />
        </div>
        <div className="calc-body">
          <div className="calc-row">
            <div className="calc-entry" data-testid="entry">
              {calcValue}
            </div>
          </div>

          <div className="calc-row">{buildRow([7, 8, 9, 'x'])}</div>
          <div className="calc-row">{buildRow([4, 5, 6, '-'])}</div>
          <div className="calc-row">{buildRow([1, 2, 3, '+'])}</div>
          <div className="calc-row">{buildRow([0, '.', '=', '÷'])}</div>

          <div>
            <div className="calc-row">{buildRow(['Clear'])}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
