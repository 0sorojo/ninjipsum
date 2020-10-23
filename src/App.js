import React, { useState } from 'react';
import { narutoText, sasuskeText } from './data';

import useCopyClipBoard from './utils/useCopyToClipboard';

import { HiClipboardCopy } from 'react-icons/hi';
import { HiCheck } from 'react-icons/hi';
import { FaUserNinja } from 'react-icons/fa';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([`look for the hidden message...`]);
  const [ninja, setNinja] = useState('');
  const [isCopied, handleCopy] = useCopyClipBoard(2000);

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
    <main className='main-section'>
      <section className='left-body'>
        <h1 className='header'>NinJipsum</h1>
        <div className='form-container'>
          <form onSubmit={handleSubmit} className='form'>
            <div className='form-header'>
              <label className='ninja'>
                Which
                <br />
                <span>
                  <FaUserNinja />
                </span>
                <br />
                Are You?
              </label>
              <div className='radio-choice'>
                <label>Naruto</label>
                <input
                  className='name'
                  type='radio'
                  name='ninja'
                  value='naruto'
                  checked={ninja === 'naruto'}
                  onChange={handleChange}
                />

                <input
                  className='name'
                  type='radio'
                  name='ninja'
                  value='sasuke'
                  checked={ninja === 'sasuke'}
                  onChange={handleChange}
                />
                <label>Sasuke</label>
              </div>
            </div>

            <div className='paragraph-div'>
              <label htmlFor='amount'># of paragraphs:</label>
              <div className='generate-section'>
                <input
                  className='input-box'
                  type='number'
                  name='amount'
                  id='amount'
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
                <button className='btn' type='submit'>
                  generarate
                </button>
              </div>
            </div>
            <div className='btn-container'>
              <button className='btn' type='submit' onClick={() => setCount(1)}>
                1
              </button>
              <button className='btn' type='submit' onClick={() => setCount(2)}>
                2
              </button>
              <button className='btn' type='submit' onClick={() => setCount(3)}>
                3
              </button>
              <button className='btn' type='submit' onClick={() => setCount(5)}>
                5
              </button>
              <button className='btn' type='submit' onClick={() => setCount(8)}>
                8
              </button>
              <button
                className='btn'
                onClick={() =>
                  handleCopy(document.getElementById('ninjaText').innerText)
                }
              >
                {isCopied ? <HiCheck /> : <HiClipboardCopy />}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className='right-body'>
        <article className='text-container'>
          <div id='ninjaText'>
            {text.map((item, index) => {
              return (
                <>
                  <p className='ninja-text' key={index}>
                    {item}
                  </p>
                </>
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
};

export default App;
