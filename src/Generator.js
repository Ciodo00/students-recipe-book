import React, { useState } from 'react';

function Generator() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');

  const generateCode = () => {
    const ingredientArray = ingredients.split(',').map(i => i.trim());
    const obj = {
      id: '/* neue ID einsetzen */',
      title: {
        it: title,
        de: `Übersetze: ${title}`,
        en: `Translate: ${title}`
      },
      ingredients: {
        it: ingredientArray,
        de: ingredientArray.map(z => `Übersetze: ${z}`),
        en: ingredientArray.map(z => `Translate: ${z}`)
      },
      category: {
        it: category,
        de: `Übersetze: ${category}`,
        en: `Translate: ${category}`
      },
      time: Number(time),
      image: "https://source.unsplash.com/400x300/?" + title.toLowerCase().replace(/\s/g, '-'),
      instructions: {
        it: instructions,
        de: `Übersetze: ${instructions}`,
        en: `Translate: ${instructions}`
      }
    };
    return `\n${JSON.stringify(obj, null, 2)},\n`;
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>🧾 Neues Rezept erstellen (auf Italienisch)</h2>

      <input placeholder="Titel (IT)" value={title} onChange={e => setTitle(e.target.value)} style={{ display: 'block', margin: 10, width: 400 }} />
      <input placeholder="Kategorie (IT)" value={category} onChange={e => setCategory(e.target.value)} style={{ display: 'block', margin: 10, width: 400 }} />
      <input placeholder="Zutaten (Komma-getrennt)" value={ingredients} onChange={e => setIngredients(e.target.value)} style={{ display: 'block', margin: 10, width: 400 }} />
      <input placeholder="Zubereitungszeit (Minuten)" value={time} onChange={e => setTime(e.target.value)} style={{ display: 'block', margin: 10, width: 400 }} />
      <textarea placeholder="Anleitung (IT)" value={instructions} onChange={e => setInstructions(e.target.value)} style={{ display: 'block', margin: 10, width: 400, height: 100 }} />

      <h3>📋 Code für rezepte.js:</h3>
      <pre style={{ background: '#eee', padding: 10, whiteSpace: 'pre-wrap' }}>
        {generateCode()}
      </pre>
    </div>
  );
}

export default Generator;
