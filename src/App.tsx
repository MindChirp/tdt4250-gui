import { AlertTriangle, InfoIcon, Loader } from "lucide-react";
import Board from "./components/ui/board";
import Players from "./components/ui/players";
import { useGameState } from "./hooks/useGameState";
import type { Tile } from "./types/tile";
import { Button } from "./components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";

const tileList: Tile[] = [
  { col: 0, row: 0, color: "#cccccc", darker: false },
  { col: 1, row: 0, color: "#cccccc", darker: true },
  { col: 2, row: 0, color: "#cccccc", darker: false },
  { col: 3, row: 0, color: "#cccccc", darker: true },
  { col: 4, row: 0, color: "#cccccc", darker: false },
  { col: 5, row: 0, color: "#cccccc", darker: true },
  { col: 6, row: 0, color: "#cccccc", darker: false },
  { col: 7, row: 0, color: "#cccccc", darker: true },
  { col: 8, row: 0, color: "#cccccc", darker: false },
  { col: 9, row: 0, color: "#cccccc", darker: true },
  { col: 0, row: 1, color: "#cccccc", darker: true },
  { col: 1, row: 1, color: "#cccccc", darker: false },
  { col: 2, row: 1, color: "#cccccc", darker: true },
  { col: 3, row: 1, color: "#cccccc", darker: false },
  { col: 4, row: 1, color: "#cccccc", darker: true },
  { col: 5, row: 1, color: "#cccccc", darker: false },
  { col: 6, row: 1, color: "#cccccc", darker: true },
  { col: 7, row: 1, color: "#cccccc", darker: false },
  { col: 8, row: 1, color: "#cccccc", darker: true },
  { col: 9, row: 1, color: "#cccccc", darker: false },
];

function App() {
  const { data, status, refetch } = useGameState();
  const state = data?.data ?? {
    currentPlayer: { name: "Kjell" },
    name: "Tic Tac Toe",
  };

  if (status === "pending")
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loader className="animate-spin" />
      </div>
    );

  // If there is no state after fetching data from backend, inform of the issue
  if (!state.currentPlayer) {
    return (
      <div className="flex items-center justify-center h-screen w-full flex-col gap-5">
        <div className="relative z-10 flex flex-col gap-5 justify-center">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance flex flex-row items-center gap-2.5">
            <AlertTriangle size={40} strokeWidth={3} />
            No game defined
          </h1>
          <Button onClick={() => refetch()}>Refetch game</Button>
        </div>
        <img
          src="/waves.svg"
          className="w-full h-full absolute top-0 left-0 z-0 object-cover"
        />
        <Alert className="absolute bottom-10 left-1/2 -translate-x-1/2 w-fit shadow-sm max-w-xl">
          <InfoIcon />
          <AlertTitle>Cannot open game?</AlertTitle>
          <AlertDescription>
            Ensure that the python backend is up and running, and that a game
            has been generated and put inside the server.
          </AlertDescription>
        </Alert>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-5">
      <div className="flex flex-col gap-5 items-center relative z-10">
        <Players
          players={[{ name: "Kjell" }, { name: "Kari" }]}
          active="Kjell"
        />
        <Board state={state} tiles={tileList} height={10} width={10} />
      </div>
      <img
        src="/waves2.svg"
        className="w-full h-full absolute top-0 left-0 z-0 object-cover"
      />
    </div>
  );
}

export default App;
