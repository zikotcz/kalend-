# Sdílený kalendář – přihlášení přes Google se schvalováním

Uživatel se přihlásí Google účtem → vytvoří se mu záznam se stavem **pending** →
vidí stránku „Čekáte na schválení“. Jakmile ho správce na `admin.html` schválí,
stránka ho automaticky (živě) pustí do `app.html`. Bez schválení se k datům nedostane –
hlídají to i pravidla Firestore, nejen frontend.

## Soubory
- `docs/index.html` – přihlášení + čekací obrazovka
- `docs/app.html` – sdílený kalendář (měsíční přehled, přidávání / úprava / mazání událostí, živá synchronizace)
- `docs/admin.html` – schvalování / zamítání uživatelů
- `docs/firebase-config.js` – **sem vložte konfiguraci a e-mail správce**
- `firestore.rules` – bezpečnostní pravidla (**i sem e-mail správce**)

## Nastavení
1. Na <https://console.firebase.google.com> vytvořte projekt.
2. **Authentication → Sign-in method → Google** → zapnout.
3. **Firestore Database** → vytvořit databázi.
4. **Project settings → Your apps → Web** → zkopírovat config do `docs/firebase-config.js`.
5. Do `ADMIN_EMAILS` (v `firebase-config.js`) i do `firestore.rules` napište svůj Gmail.
6. **Hostování na GitHub Pages:** repozitář musí být veřejný → Settings → Pages →
   *Deploy from a branch* → vybrat větev a složku **/docs** → Save.
   Doménu `zikotcz.github.io` přidat ve Firebase: **Authentication → Settings → Authorized domains**.
   Obsah `firestore.rules` vložit do **Firestore → Rules → Publish**.

   Alternativně Firebase Hosting:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use --add
   firebase deploy
   ```
   Pokud hostujete jinde (např. GitHub Pages), přidejte doménu v
   **Authentication → Settings → Authorized domains** a pravidla nahrajte přes
   `firebase deploy --only firestore:rules`.

Lokálně: `npx serve public` (nebo `python3 -m http.server -d public`) a otevřít `http://localhost:3000`.
