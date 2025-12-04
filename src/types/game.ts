export type Tile = {
  row: number;
  column: number;
  name: string;
  defaultHexColor: string;
  currentState: string;
  currentStateColor: string;
};

export type Game = {
  players: string[];
  activePlayer: string;
  boardWidth: number;
  boardHeight: number;
  tiles: Tile[];
  legalMoves: Tile[];
  gameName: string;
};

export type MoveRequest = {
  column: number;
  row: number;
  player: string;
};

export type Player = string;
