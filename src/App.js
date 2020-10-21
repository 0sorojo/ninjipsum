import React, { useState } from 'react';
import { narutoText } from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }

    setText(narutoText.slice(0, amount));
  };

  return (
    <>
      <section>
        <h1>i work</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='amount'>paragraphs:</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type='submit'>generarate</button>
        </form>
        <article>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
