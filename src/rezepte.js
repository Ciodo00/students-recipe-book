/* 
  BILDOPTIONEN FÜR JEDES REZEPT

  1) Automatisches Unsplash-Bild:
     Verwende eine URL wie:
     image: "https://source.unsplash.com/400x300/?pizza"
     → Zeigt ein zufälliges Bild zu einem Suchbegriff
     → Beispiel: "spaghetti", "salat,tomate"

  2) Feste Bild-URL:
     Verwende eine direkte URL zu einem Bild aus dem Internet:
     image: "https://cdn.pixabay.com/photo/2021/04/15/12/47/spaghetti.jpg"
     → Das Bild bleibt immer gleich
     → Empfohlen für gezielte Bilder oder eigene Wahl

  Hinweis:
  Eigene Bilder (lokal) sind auch möglich über /public/images/...,
  z. B. image: process.env.PUBLIC_URL + "/images/meinbild.jpg"
*/
const rezepte = [
  {
    id: 1,
    title: {
      it: "Pasta al Pomodoro",
      de: "Nudeln mit Tomatensauce",
      en: "Pasta with Tomato Sauce"
    },
    ingredients: {
      it: ["pasta", "pomodori", "aglio", "olio d'oliva", "sale"],
      de: ["Nudeln", "Tomaten", "Knoblauch", "Olivenöl", "Salz"],
      en: ["pasta", "tomatoes", "garlic", "olive oil", "salt"]
    },
    category: {
      it: "Pasta",
      de: "Nudeln",
      en: "Pasta"
    },
    time: 20,
    image: "https://images.unsplash.com/photo-1603133872878-684f336f4884?auto=format&fit=crop&w=400&q=80",
    instructions: {
      it: "Cuocere la pasta in acqua salata. Preparare il sugo con pomodori, aglio e olio. Unire tutto e servire caldo.",
      de: "Pasta in Salzwasser kochen. Die Sauce aus Tomaten, Knoblauch und Öl zubereiten. Alles mischen und heiß servieren.",
      en: "Cook the pasta in salted water. Prepare the sauce with tomatoes, garlic and oil. Mix everything and serve hot."
    }
  },
  ///////////////////////////
  {
    id: 2,
    title: {
      it: "Risotto ai funghi",
      de: "Pilzrisotto",
      en: "Mushroom Risotto"
    },
    ingredients: {
      it: ["riso", "funghi", "cipolla", "brodo vegetale", "parmigiano"],
      de: ["Reis", "Pilze", "Zwiebel", "Gemüsebrühe", "Parmesan"],
      en: ["rice", "mushrooms", "onion", "vegetable broth", "parmesan"]
    },
    category: {
      it: "Riso",
      de: "Reis",
      en: "Rice"
    },
    time: 35,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    instructions: {
      it: "Soffriggere la cipolla, aggiungere i funghi, poi il riso. Cuocere aggiungendo brodo poco a poco. Mantecare con parmigiano.",
      de: "Zwiebel anbraten, Pilze hinzufügen, dann den Reis. Nach und nach Brühe zugeben. Mit Parmesan verfeinern.",
      en: "Sauté the onion, add mushrooms, then the rice. Add broth gradually while cooking. Finish with parmesan."
    }
  },
  {
  id: 3,
  title: {
    it: 'Rotolini di pizza',
    de: 'Pizzabrötchen',
    en: 'Pizza Rolls'
  },
  ingredients: {
    it: ['pasta per pizza', 'prosciutto', 'formaggio', 'crème fraîche', 'origano'],
    de: ['Pizzateig', 'Schinken', 'Käse', 'Crème fraîche', 'Oregano'],
    en: ['pizza dough', 'ham', 'cheese', 'crème fraîche', 'oregano']
  },
  category: {
    it: 'Snack',
    de: 'Snack',
    en: 'Snack'
  },
  time: 20,
  image: 'https://source.unsplash.com/400x300/?pizza-rolls',
  instructions: {
    it: 'Stendere la pasta per pizza. Distribuire sopra prosciutto e formaggio, poi aggiungere la crème fraîche. Arrotolare l’impasto, tagliare a fette e cuocere in forno fino a doratura.',
    de: 'Den Pizzateig ausrollen. Schinken und Käse darauf verteilen, anschließend mit Crème fraîche bestreichen. Aufrollen, in Scheiben schneiden und im Ofen goldbraun backen.',
    en: 'Roll out the pizza dough. Add ham and cheese on top, then spread with crème fraîche. Roll it up, slice into pieces, and bake until golden brown.'
  }
}

];

export default rezepte;
