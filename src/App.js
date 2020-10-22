import React, { useState } from 'react';
import { narutoText, sasuskeText } from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [ninja, setNinja] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }

    ninja === 'naruto'
      ? setText(narutoText.slice(0, amount))
      : setText(sasuskeText.slice(0, amount));

    !ninja && setText([`I am not a ninja`]);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setNinja(value);
  };

  return (
    <>
      <section>
        <h1>i work</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Which Ninja Are You?
              <br />
              <input
                type='radio'
                name='ninja'
                value='naruto'
                checked={ninja === 'naruto'}
                onChange={handleChange}
              />
              <label>Naruto</label>
              <br />
              <input
                type='radio'
                name='ninja'
                value='sasuke'
                checked={ninja === 'sasuke'}
                onChange={handleChange}
              />
              <label>Sasuke</label>
            </label>
          </div>

          <div>
            <label htmlFor='amount'>paragraphs:</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>

          <button type='submit'>generarate</button>

          <button type='submit' onClick={() => setCount(1)}>
            1
          </button>
          <button type='submit' onClick={() => setCount(2)}>
            2
          </button>
          <button type='submit' onClick={() => setCount(3)}>
            3
          </button>
          <button type='submit' onClick={() => setCount(5)}>
            5
          </button>
          <button type='submit' onClick={() => setCount(8)}>
            8
          </button>
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
