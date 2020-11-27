import { Client } from 'boardgame.io/react';
import { ThornyUber } from './Game';
import { ThornyUbersTable } from './components/Table';

const App = Client({
  game: ThornyUber,
  board: ThornyUbersTable,
  numPlayers: 2,
});

export default App;