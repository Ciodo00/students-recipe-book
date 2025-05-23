import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import rezepte from './rezepte';
import Generator from './Generator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RezepteApp />} />
        <Route path="/generator" element={<Generator />} />
      </Routes>
    </Router>
  );
}

function RezepteApp() {
  const [lang, setLang] = useState('it');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [aktiveZutaten, setAktiveZutaten] = useState([]);
  const [aktiveKategorie, setAktiveKategorie] = useState('');
  const [aktiveZeit, setAktiveZeit] = useState(null);

  const ignorierteZutaten = ['salz', 'pfeffer', 'wasser', 'öl', 'olivenöl', "olio d'oliva"];

  // 🎨 Akzentfarbe hier anpassen
  const akzentFarbe = '#556b2f';

  const alleZutaten = Array.from(
    new Set(
      rezepte.flatMap(r =>
        r.ingredients[lang].filter(z =>
          !ignorierteZutaten.includes(z.toLowerCase())
        )
      )
    )
  ).sort();

  const alleKategorien = Array.from(
    new Set(rezepte.map(r => r.category[lang]))
  ).sort();

  const toggleZutat = (zutat) => {
    setAktiveZutaten((prev) =>
      prev.includes(zutat)
        ? prev.filter((z) => z !== zutat)
        : [...prev, zutat]
    );
  };

  const toggleKategorie = (kategorie) => {
    setAktiveKategorie((prev) => (prev === kategorie ? '' : kategorie));
  };

  const filteredRezepte = rezepte.filter((r) => {
    const zutatenOK = aktiveZutaten.every(z => r.ingredients[lang].includes(z));
    const kategorieOK = !aktiveKategorie || r.category[lang] === aktiveKategorie;
    const zeitOK = !aktiveZeit || r.time <= aktiveZeit;
    return zutatenOK && kategorieOK && zeitOK;
  });

  const untertitel = {
    it: 'Una collezione di ricette per tutti.',
    de: 'Eine Rezeptsammlung für alle.',
    en: 'A recipe collection for everyone.'
  };

  return (
    <div style={{
      padding: 20,
      fontFamily: 'Inter, sans-serif',
      maxWidth: 900,
      margin: 'auto',
      backgroundColor: '#121212',
      color: '#EAEAEA',
      minHeight: '100vh'
    }}>
      {/* 🔧 Ändere hier den Haupttitel */}
      <h1 style={{ fontSize: '1.5em', textAlign: 'center', marginBottom: 5 }}>
        🎓 Students' Recipe Collection
      </h1>

      {/* 📝 Sprachabhängiger Untertitel */}
      <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: 20 }}>
        {untertitel[lang]}
      </p>

      {/* 🌐 Sprachumschalter (nur Flaggen) */}
      <div style={{ marginBottom: 30, textAlign: 'center' }}>
  {['it', 'de', 'en'].map((code) => {
    const label = code.toUpperCase();
    const isActive = lang === code;
    return (
      <button
        key={code}
        onClick={() => setLang(code)}
        style={{
          margin: 5,
          padding: '6px 12px',
          borderRadius: 20,
          border: `0px solid ${akzentFarbe}`,
          backgroundColor: isActive ? akzentFarbe : 'transparent',
          color: isActive ? 'white' : akzentFarbe,
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {label}
      </button>
    );
  })}
</div>


      {/* Filter: Kategorie */}
      <div style={{ marginBottom: 10, fontWeight: 'bold' }}>
        {lang === 'de' ? 'Kategorie auswählen:' : lang === 'en' ? 'Select category:' : 'Seleziona categoria:'}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 30 }}>
        <button onClick={() => setAktiveKategorie('')} style={{ border: `1px solid ${akzentFarbe}`, backgroundColor: 'transparent', color: akzentFarbe, borderRadius: 20, padding: '6px 12px', cursor: 'pointer' }}>🗑️</button>
        {alleKategorien.map((k) => (
          <button
            key={k}
            onClick={() => toggleKategorie(k)}
            style={{
              padding: '8px 16px',
              borderRadius: 20,
              border: `1px solid ${akzentFarbe}`,
              backgroundColor: aktiveKategorie === k ? akzentFarbe : 'transparent',
              color: aktiveKategorie === k ? 'white' : akzentFarbe,
              cursor: 'pointer'
            }}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Filter: Zutaten */}
      <div style={{ marginBottom: 10, fontWeight: 'bold' }}>
        {lang === 'de' ? 'Zutaten auswählen:' : lang === 'en' ? 'Select ingredients:' : 'Seleziona ingredienti:'}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 30 }}>
        <button onClick={() => setAktiveZutaten([])} style={{ border: `1px solid ${akzentFarbe}`, backgroundColor: 'transparent', color: akzentFarbe, borderRadius: 20, padding: '6px 12px', cursor: 'pointer' }}>🗑️</button>
        {alleZutaten.map((zutat) => (
          <button
            key={zutat}
            onClick={() => toggleZutat(zutat)}
            style={{
              padding: '8px 16px',
              borderRadius: 20,
              border: `1px solid ${akzentFarbe}`,
              backgroundColor: aktiveZutaten.includes(zutat) ? akzentFarbe : 'transparent',
              color: aktiveZutaten.includes(zutat) ? 'white' : akzentFarbe,
              cursor: 'pointer'
            }}
          >
            {zutat}
          </button>
        ))}
      </div>

      {/* Filter: Zeit */}
      <div style={{ marginBottom: 10, fontWeight: 'bold' }}>
        {lang === 'de' ? 'Maximale Zubereitungszeit:' : lang === 'en' ? 'Max preparation time:' : 'Tempo massimo di preparazione:'}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 30 }}>
        <button onClick={() => setAktiveZeit(null)} style={{ border: `1px solid ${akzentFarbe}`, backgroundColor: 'transparent', color: akzentFarbe, borderRadius: 20, padding: '6px 12px', cursor: 'pointer' }}>🗑️</button>
        {[15, 30, 45, 60, 120].map((z) => (
          <button
            key={z}
            onClick={() => setAktiveZeit(z)}
            style={{
              padding: '8px 16px',
              borderRadius: 20,
              border: `1px solid ${akzentFarbe}`,
              backgroundColor: aktiveZeit === z ? akzentFarbe : 'transparent',
              color: aktiveZeit === z ? 'white' : akzentFarbe,
              cursor: 'pointer'
            }}
          >
            ≤ {z} Min
          </button>
        ))}
      </div>

      {/* Rezeptliste */}
      <h2 style={{ marginBottom: 20 }}>{lang === 'de' ? 'Rezepte' : lang === 'en' ? 'Recipes' : 'Ricette'}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
        {filteredRezepte.map((rezept) => (
          <div
            key={rezept.id}
            onClick={() => setSelectedRecipe(rezept)}
            style={{
              border: `1px solid ${akzentFarbe}`,
              borderRadius: 10,
              width: 250,
              padding: 10,
              cursor: 'pointer',
              backgroundColor: '#1E1E1E',
              color: '#EAEAEA'
            }}
          >
            <img
              src={rezept.image}
              alt={rezept.title[lang]}
              style={{ width: '100%', borderRadius: 10, marginBottom: 10 }}
            />
            <h3>{rezept.title[lang]}</h3>
            <p><strong>{lang === 'de' ? 'Zutaten:' : lang === 'en' ? 'Ingredients:' : 'Ingredienti:'}</strong> {rezept.ingredients[lang].join(', ')}</p>
            <p><strong>{lang === 'de' ? 'Kategorie:' : lang === 'en' ? 'Category:' : 'Categoria:'}</strong> {rezept.category[lang]}</p>
            <p><strong>{lang === 'de' ? 'Zeit:' : lang === 'en' ? 'Time:' : 'Tempo:'}</strong> {rezept.time} Min</p>
          </div>
        ))}
      </div>

      {/* Pop-up mit vollständigem Rezept */}
      {selectedRecipe && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: 10
        }}>
          <div style={{
            backgroundColor: '#1E1E1E',
            padding: 20,
            borderRadius: 10,
            width: '100%',
            maxWidth: 500,
            position: 'relative',
            color: '#EAEAEA'
          }}>
            <button
              onClick={() => setSelectedRecipe(null)}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'transparent',
                border: 'none',
                fontSize: 20,
                cursor: 'pointer',
                color: '#EAEAEA'
              }}
            >
              ❌
            </button>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title[lang]}
              style={{ width: '100%', borderRadius: 10, marginBottom: 10 }}
            />
            <h2>{selectedRecipe.title[lang]}</h2>
            <p><strong>{lang === 'de' ? 'Zutaten:' : lang === 'en' ? 'Ingredients:' : 'Ingredienti:'}</strong> {selectedRecipe.ingredients[lang].join(', ')}</p>
            <p><strong>{lang === 'de' ? 'Kategorie:' : lang === 'en' ? 'Category:' : 'Categoria:'}</strong> {selectedRecipe.category[lang]}</p>
            <p><strong>{lang === 'de' ? 'Zeit:' : lang === 'en' ? 'Time:' : 'Tempo:'}</strong> {selectedRecipe.time} Min</p>
            <p><strong>{lang === 'de' ? 'Anleitung:' : lang === 'en' ? 'Instructions:' : 'Istruzioni:'}</strong></p>
            <p>{selectedRecipe.instructions[lang]}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
