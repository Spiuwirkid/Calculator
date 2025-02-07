import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleNumberClick = (number) => {
    if (display === '0') {
      setDisplay(number);
      setExpression(number);
    } else {
      setDisplay(display + number);
      setExpression(expression + number);
    }
  };

  const handleOperatorClick = (operator) => {
    setDisplay(display + operator);
    setExpression(expression + operator);
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(expression);
      setDisplay(result.toString());
      setExpression(result.toString());
    } catch (error) {
      setDisplay('Error');
      setExpression('');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setExpression('');
  };

  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setExpression(expression + '.');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="function" onClick={handleClearClick}>
          C
        </button>
        <button className="function" onClick={() => handleOperatorClick('%')}>
          %
        </button>
        <button className="function" onClick={() => handleOperatorClick('√')}>
          √
        </button>
        <button className="operator" onClick={() => handleOperatorClick('/')}>
          ÷
        </button>
        <button className="number" onClick={() => handleNumberClick('7')}>
          7
        </button>
        <button className="number" onClick={() => handleNumberClick('8')}>
          8
        </button>
        <button className="number" onClick={() => handleNumberClick('9')}>
          9
        </button>
        <button className="operator" onClick={() => handleOperatorClick('*')}>
          x
        </button>
        <button className="number" onClick={() => handleNumberClick('4')}>
          4
        </button>
        <button className="number" onClick={() => handleNumberClick('5')}>
          5
        </button>
        <button className="number" onClick={() => handleNumberClick('6')}>
          6
        </button>
        <button className="operator" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button className="number" onClick={() => handleNumberClick('1')}>
          1
        </button>
        <button className="number" onClick={() => handleNumberClick('2')}>
          2
        </button>
        <button className="number" onClick={() => handleNumberClick('3')}>
          3
        </button>
        <button className="operator" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button className="number zero" onClick={() => handleNumberClick('0')}>
          0
        </button>
        <button className="decimal" onClick={handleDecimalClick}>
          .
        </button>
        <button className="equals" onClick={handleEqualsClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
