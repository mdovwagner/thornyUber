import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThornyUberClient from './App';
import { ThornyUbersTable } from './components/Table'
import { ThornyUber } from './Game'
import { Lobby } from 'boardgame.io/react';

const NO_LOBBY = process.env.REACT_APP_NO_LOBBY;

if (NO_LOBBY) {
  // Code for local deployment no lobby both players on one screen, no seperate server.
  ReactDOM.render(
    <React.StrictMode>
      <ThornyUberClient playerID='0' />
      <ThornyUberClient playerID='1' />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else {
  const ENV = process.env.REACT_APP_ENV

  let SERVER
  if (ENV === 'dev') {
    SERVER = `http://${window.location.hostname}:8000`  // Local
  } else {
    SERVER = `https://${window.location.hostname}` // Prod
  }

  // Render the lobby. This relies on a running server.
  // TODO: Make the lobby way nicer looking!
  ReactDOM.render(
    <React.StrictMode>
      <Lobby
        gameServer={SERVER}
        lobbyServer={SERVER}
        gameComponents={[{ game: ThornyUber, board: ThornyUbersTable }]}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

