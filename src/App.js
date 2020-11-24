import { Client } from 'boardgame.io/react';
import { ThornyUber } from './Game';
import { ThornyUbersTable } from './components/Table';

const App = Client({
  game: ThornyUber,
  board: ThornyUbersTable,
});

export default App;