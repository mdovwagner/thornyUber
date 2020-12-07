import { Client } from 'boardgame.io/react';
import { ThornyUber } from './Game';
import { ThornyUbersTable } from './components/Table';
import { SocketIO } from 'boardgame.io/multiplayer'


const ThornyUberClient = Client({
  game: ThornyUber,
  board: ThornyUbersTable,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
});

export default ThornyUberClient;