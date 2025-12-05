import { AlertTriangle, InfoIcon, Loader } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import Board from "./components/ui/board";
import { Button } from "./components/ui/button";
import Players from "./components/ui/players";
import { useGameState } from "./hooks/useGameState";

function App() {
  const { data, status, refetch } = useGameState();

  const state = data?.data;

  if (status === "pending")
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loader className="animate-spin" />
      </div>
    );

  // If there is no state after fetching data from backend, inform of the issue
  if (!state || status === "error") {
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
        {state?.wonMessage && (
          <div className="absolute top-1/2 left-1/2 bg-card/50 backdrop-blur-2xl border-border border -translate-1/2 rounded-lg p-5 z-10 text-xl text-center font-semibold min-w-xl">
            {state.wonMessage}
          </div>
        )}
        <Players
          players={state.players}
          gameName={state.gameName}
          active={state.activePlayer}
        />
        <Board state={state} />
      </div>
      <img
        src="/waves2.svg"
        className="w-full h-full absolute top-0 left-0 z-0 object-cover"
      />
    </div>
  );
}

export default App;
