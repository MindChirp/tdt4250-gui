import type { Player } from "@/types/game";
import { Badge } from "./badge";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type PlayersProps = {
  players: Player[];
  gameName?: string;
  active: string;
} & ComponentProps<"div">;
const Players = ({
  players,
  gameName,
  active,
  className,
  ...props
}: PlayersProps) => {
  return (
    <div
      className={cn(
        "flex flex-row justify-evenly w-full max-w-xl mx-auto bg-card border-border border rounded-lg shadow-sm p-2.5",
        className
      )}
      {...props}
    >
      {gameName && <h1 className="text-black">{gameName}</h1>}
      {players.map((p, i) => (
        <Badge key={p + i} variant={p === active ? "default" : "outline"}>
          {p}
        </Badge>
      ))}
    </div>
  );
};

export default Players;
