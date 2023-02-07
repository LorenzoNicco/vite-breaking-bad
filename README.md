# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

Vite Breaking Bad

Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Breaking Bad:
https://www.breakingbadapi.com/api/characters
e con i dati restituiti, stampate una card per ogni personaggio.

Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.

parte 2:
Descrizione:
Continuate a lavorare nella stessa repo di ieri e aggiungete una select per filtrare i risultati in base alla proprietà archetype.
Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata alle API con l'archetype selezionato.

Milestone 1
Recuperare tramite chiamata API tutti gli archetype richiamando l'endpoint https://db.ygoprodeck.com/api/v7/archetypes.php e salvare i risultati. Utilizzare i dati salvati per riempire la select che servirà per filtrare le carte

Milestone 2
Implementare la logica di filtraggio dei risultati delle carte: al cambio del valore della select, effettuare una nuova chiamata API per ottenere una nuova lista di carte

Bonus:
Creare un componente che mostri il numero totale di risultati ottenuti.