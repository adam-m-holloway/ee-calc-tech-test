import React from 'react';

export const Calculator = () => {
  return (
    <div>
      <div>
        <input type="text" />
      </div>

      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>x</button>
      </div>

      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>

      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>

      <div>
        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>/</button>
      </div>

      <div>
        <button>Clear</button>
      </div>
    </div>
  );
};
