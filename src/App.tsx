import Board from "./components/ui/board";
import type { Tile } from "./types/tile";

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
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-5">
      <Board tiles={tileList} height={10} width={10} />
    </div>
  );
}

export default App;
