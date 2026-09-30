# Kalopsia — Sito Cocktail Bar

Sito one-page completo (React + Tailwind). Nessun backend o database necessario: è un sito statico.

## Avvio in locale (sviluppo)
1. Installa Node.js (versione 16 o superiore) e Yarn (`npm install -g yarn`)
2. Dentro la cartella `frontend` esegui:
   ```
   yarn install
   yarn start
   ```
3. Il sito parte su http://localhost:3000

## Versione di produzione (da mettere online)
```
yarn build
```
Crea la cartella `frontend/build` con tutti i file statici pronti da pubblicare.

## Dove pubblicarlo
Qualsiasi hosting statico va bene, ad esempio:
- Netlify (trascina la cartella `build` su app.netlify.com/drop)
- Vercel (importa il repository)
- Il tuo hosting attuale: carica il contenuto di `build` via FTP

## Dove sono le cose
- `frontend/src/components/kalopsia/` — tutte le sezioni del sito (Hero, Menu, Esperienze, Recensioni, Contatti…)
- `frontend/public/index.html` — titolo, descrizione e font del sito
- `frontend/public/kalopsia-mark.svg` — il logo/favicon
- `frontend/tailwind.config.js` — colori del brand (neon pink #FF007F, lime #CCFF00)

## Cose da aggiornare col contenuto reale
- I 5 drink nel file `MenuSection.jsx` sono d'esempio: sostituiscili col menù vero
- Le citazioni in `Reviews.jsx` sono evocative: metti le recensioni reali
- I link Instagram/Facebook in `Info.jsx` puntano alle home dei social: inserisci i profili veri
