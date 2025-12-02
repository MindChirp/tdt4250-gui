import { AlertTriangle, Loader } from "lucide-react";
import Board from "./components/ui/board";
import Players from "./components/ui/players";
import { useGameState } from "./hooks/useGameState";
import type { Tile } from "./types/tile";
import { Button } from "./components/ui/button";

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

  if (!state.currentPlayer) {
    return (
      <div className="flex items-center justify-center h-screen w-full flex-col gap-5">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance flex flex-row items-center gap-2.5">
          <AlertTriangle size={40} strokeWidth={3} />
          No game defined
        </h1>
        <Button onClick={() => refetch()}>Refetch game</Button>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-5">
      <Players players={[{ name: "Kjell" }, { name: "Kari" }]} active="Kjell" />
      <Board state={state} tiles={tileList} height={10} width={10} />
    </div>
  );
}

export default App;
