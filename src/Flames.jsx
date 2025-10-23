import { useState } from 'react';

const Flames = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const flames = ['Friends', 'Lovers', 'Admiration', 'Marriage', 'Enemies', 'Secret lovers'];

  const handleFlames = () => {
    if (!name1 || !name2) return setResult('Please enter both names');

    let n1 = name1.toLowerCase().replace(/\s/g, '');
    let n2 = name2.toLowerCase().replace(/\s/g, '');

    for (let char of name1) {
      if (n2.includes(char)) {
        n1 = n1.replace(char, '');
        n2 = n2.replace(char, '');
      }
    }

    const total = n1.length + n2.length;
    const index = total % 6;

    setResult(`Your relationship is: ${flames[index]}`);
  };

  return (
    <>
    <div className="flames-container">
      <h2>🔥 FLAMES Game 🔥</h2>
      <input
        type="text"
        placeholder="Enter first name" value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter second name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <button onClick={handleFlames}>Calculate</button>
      {result && <p className="result">{result}</p>}
    </div>
    <footer><p>Built by <span><a href='https://zik-site.vercel.app' target='_blank'>Zik</a></span> with <span>&hearts;</span></p></footer>
    </>
  );
};

export default Flames;